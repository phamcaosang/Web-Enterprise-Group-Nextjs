import { Button, Divider, Form, Input, Table, Tag } from "antd";
import React from "react";
import dynamic from "next/dynamic";
import validateMessages from "@/utils/requireMessage";

export default function Index() {
  const Editor = dynamic(() => import("./Editor"), { ssr: false });
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "50%",
    },
    {
      title: "Create Date",
      dataIndex: "createDate",
      key: "createDate",
    },
    {
      title: "Update Date",
      dataIndex: "updateDate",
      key: "updateDate",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <a>
          <Tag color="blue" style={{ cursor: "pointer" }}>
            View Detail
          </Tag>
          <Tag color="cyan" style={{ cursor: "pointer" }}>
            Detail
          </Tag>
        </a>
      ),
    },
  ];
  const data = [
    {
      key: 1,
      title: "Test Title 003",
      createDate: "22/02/23 14:02:17",
      updateDate: "	25/02/23 19:02:55",
    },
    {
      key: 2,
      title: "Test Title 003",
      createDate: "22/02/23 14:02:17",
      updateDate: "	25/02/23 19:02:55",
    },
  ];
  return (
    <div>
      <Divider>
        <span style={{ fontSize: 22 }}>Create New Announcement</span>
      </Divider>
      <div style={{ maxWidth: 1580, margin: "20px auto" }}>
        <Form
          validateMessages={validateMessages}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
        >
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true }]}
          >
            <Editor value="foo" onChange={(v) => (editorData.current = v)} />
          </Form.Item>
          <div style={{ textAlign: "right", marginTop: 20 }}>
            <Button type="primary">Submit</Button>
          </div>
        </Form>
        <Divider>
          <span style={{ fontSize: 22 }}>Announcements</span>
        </Divider>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}
