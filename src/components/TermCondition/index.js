import { Button, message, Spin } from "antd";
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import {useGetTermsQuery,useEditTermMutation,} from "../../../redux/Slices/Term";

export default function Index() {
  const Editor = dynamic(() => import("./Editor"), { ssr: false });
  const { data, isLoading, isSuccess } = useGetTermsQuery();
  const [updateTerm, { isLoading: loadingEdit }] = useEditTermMutation();
  const editorData = useRef();
  const handleSubmit = () => {
    console.log(editorData.current);
    updateTerm({
      description: editorData.current,
    })
      .unwrap()
      .then((res) => message.success("Term and Conditions updated"))
      .catch((err) => {
        console.log(err);
        message.error("Failed to update");
      });
  };

  useEffect(() => {
    if (isSuccess) {
      editorData.current = data?.description;
    }
  }, [isSuccess]);
  return (
    <div>
      <div style={{ textAlign: "right", marginBottom: 30 }}>
        <Button type="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </div>
      <Spin spinning={loadingEdit || isLoading}>
        <Editor
          value={data?.description}
          onChange={(v) => (editorData.current = v)}
        />
      </Spin>
    </div>
  );
}
