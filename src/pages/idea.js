import React, { useState } from "react";
import Layout from "../components/Layout/Index";
import {
  Select,
  Input,
  Form,
  Switch,
  Button,
  Upload,
  Checkbox,
  Modal,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useGetTermsQuery } from "../../redux/Slices/Term";
import parse from "html-react-parser";

const { Dragger } = Upload;
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

export default function Idea() {
  const { data, isLoading, isSuccess } = useGetTermsQuery();
  const onChange = (e) => {
    setIsModalOpen(true);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout>
      <div style={{ maxWidth: 620, margin: "20px auto" }}>
        <h2 style={{ textAlign: "center", margin: "15px 0 15px 160px" }}>
          IDEA SUBMISSION
        </h2>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item label="Department" name="department">
            <Select
              defaultValue="Please select department"
              options={[
                { value: "Department_A", label: "Department A" },
                { value: "Department_B", label: "Department B" },
                { value: "Department_C", label: "Department C" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Topic" name="topic">
            <Select
              defaultValue="Please select topic"
              options={[
                { value: "Topic_A", label: "Topic A" },
                { value: "Topic_B", label: "Topic B" },
                { value: "Topic_C", label: "Topic C" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Select
              defaultValue="Please select Category"
              options={[
                { value: "CATEGORY_AA", label: "CATEGORY AA" },
                { value: "CATEGORY_BB", label: "CATEGORY BB" },
                { value: "CATEGORY_CC", label: "CATEGORY CC" },
              ]}
            />
          </Form.Item>
          <Form.Item label="Anonymous" name="Anonymous">
            <Switch />
          </Form.Item>
          <Form.Item label="Idea" name="idea">
            <Input.TextArea
              showCount
              maxLength={1000}
              placeholder="Please fill in your idea here!"
              style={{ height: 200 }}
            />
          </Form.Item>
          <Form.Item label="Files" name="files">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Dragger>
          </Form.Item>
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Checkbox onChange={onChange}>I accept Term & Conditions</Checkbox>
          </div>
          <div
            style={{
              textAlign: "right",
              marginTop: 20,
            }}
          >
            <Button type="primary">Submit</Button>
          </div>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            closable={false}
            footer={[
              <Button onClick={handleOk} type={"primary"}>
                OK
              </Button>,
            ]}
          >
            {data && parse(data?.description)}
          </Modal>
        </Form>
      </div>
    </Layout>
  );
}
