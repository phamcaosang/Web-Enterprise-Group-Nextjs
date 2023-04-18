import React, { useState } from "react";
import Layout from "../components/Layout/Index";
import {Select,Input,Form,Switch,Button,Upload,Checkbox,Modal,} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useGetTermsQuery } from "../../redux/Slices/Term";
import { useGetDepartmentsQuery } from "../../redux/Slices/Department";
import { useGetTopicsQuery } from "../../redux/Slices/Topic";
import { useGetCategoriesQuery } from "../../redux/Slices/Category";
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
  const { data } = useGetTermsQuery();
  const { data: departments } = useGetDepartmentsQuery();
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const { data: topics } = useGetTopicsQuery();
  const { data: categories } = useGetCategoriesQuery();
  const [agree, setAgree] = useState(false);
  // const [modalTerm, setModalTerm] = useState(false);
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
          <Form.Item label="Deparment" name="department">
            <Select
              defaultValue="Please select department"
              // style={{ width: 250 }}
              onChange={(dp) => setSelectedDepartment(dp)}
              options={departments?.map((dp) => {
                return {
                  value: dp.id,
                  label: dp.name,
                };
              })}
            />
          </Form.Item>
          <Form.Item label="Topic" name="topic" rules={[{ required: true }]}>
            <Select
              defaultValue="Please select topic"
              disabled={!selectedDepartment}
              options={topics
                ?.filter((i) => i.Department.id === selectedDepartment)
                .map((tp) => {
                  return {
                    value: tp.id,
                    label: tp.name,
                  };
                })}
            />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true }]}
          >
            <Select
              defaultValue="Please select category"
              options={categories?.map((ct) => {
                return {
                  value: ct.id,
                  label: ct.name,
                };
              })}
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
            <Checkbox
              checked={agree}
              name="term"
              onChange={(e) => {
                setAgree(e.target.checked);
                setIsModalOpen(e.target.checked);
              }}
            >
              I accept the <a>Terms & Conditions</a>
            </Checkbox>
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
          >
            {data && parse(data?.description)}
          </Modal>
        </Form>
      </div>
    </Layout>
  );
}
