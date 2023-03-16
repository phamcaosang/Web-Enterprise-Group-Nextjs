import {
  DatePicker,
  Form,
  Input,
  Select,
  Button,
  Table,
  Tag,
  Divider,
} from "antd";
import React from "react";
import { validateMessages } from "@/utils/requireMessage";

export default function Index() {
  const columns = [
    {
      title: "Topic",
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: "Creator",
      dataIndex: "creator",
      key: "creator",
    },
    {
      title: "Open Date",
      dataIndex: "openDate",
      key: "openDate",
    },
    {
      title: "Open Date Idea",
      dataIndex: "openIdea",
      key: "openIdea",
    },
    {
      title: "Close Date Idea",
      dataIndex: "closeIdea",
      key: "closeIdea",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <a>
          <Tag color="blue" style={{ cursor: "pointer" }}>
            Edit
          </Tag>
          <Tag color="blue" style={{ cursor: "pointer" }}>
            Download
          </Tag>
        </a>
      ),
    },
  ];
  const columns2 = [
    {
      title: "Topic",
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Idea",
      dataIndex: "idea",
      key: "idea",
    },
    {
      title: "Submitor",
      dataIndex: "submitor",
      key: "submitor",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => (
        <a>
          <Tag color="cyan" style={{ cursor: "pointer" }}>
            View
          </Tag>
          <Tag color="blue" style={{ cursor: "pointer" }}>
            Accept
          </Tag>
          <Tag color="red" style={{ cursor: "pointer" }}>
            Reject
          </Tag>
        </a>
      ),
    },
  ];
  const data = [
    {
      key: 1,
      topic: "New Topic",
      creator: "Thinh Nguyen",
      openDate: "11/03/23 22:03:31",
      openIdea: "14/04/23 22:04:31",
      closeIdea: "05/03/23 00:03:00",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 2,
      topic: "New Topic",
      creator: "Thinh Nguyen",
      openDate: "11/03/23 22:03:31",
      openIdea: "14/04/23 22:04:31",
      closeIdea: "05/03/23 00:03:00",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
  ];
  const data2 = [
    {
      key: 1,
      topic: "New Topic",
      category: "CATEGORY AA",
      idea: "AAAAAAAAAAAAAAAAA",
      submitor: "ANOMYOUS",
      createdAt: "06/03/23 12:03:40",
    },
  ];
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };
  const { RangePicker } = DatePicker;
  return (
    <div>
      <div style={{ maxWidth: 620, margin: "20px auto" }}>
        <h2 style={{ textAlign: "center", margin: "15px 0 15px 160px" }}>
          Create New Topic
        </h2>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="Department"
            name="department"
            rules={[{ required: true }]}
          >
            <Select
              defaultValue="Please select department"
              options={[
                { value: "Department_HR", label: "Department HR" },
                { value: "Department_QC", label: "Department QC" },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Topic name"
            name="topic"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              showCount
              maxLength={1000}
              placeholder="Please fill in your topic name here!"
              style={{ height: 150 }}
            />
          </Form.Item>
          <Form.Item
            label="Idea Dates"
            name="dates"
            rules={[{ required: true }]}
          >
            <RangePicker disabledDate={disabledDate} />
          </Form.Item>
          <Form.Item
            label="Close Date Topic"
            name="closeTopic"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
        </Form>
        <div style={{ textAlign: "right" }}>
          <Button type="primary">Submit</Button>
        </div>
      </div>
      <Divider>
        <span style={{ fontSize: 22 }}>
          Table Of Available Topics And Ideas
        </span>
      </Divider>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
      />
      <Divider>
        <span style={{ fontSize: 22 }}>Table Of Waiting Ideas</span>
      </Divider>
      <Table
        columns={columns2}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data2}
      />
    </div>
  );
}
