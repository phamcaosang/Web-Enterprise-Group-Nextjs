import React, { useState } from "react";
import { useGetDepartmentsQuery } from "../../../redux/Slices/Department";
import {
  Button,
  Divider,
  Menu,
  Space,
  Avatar,
  Drawer,
  Form,
  Input,
  Upload,
} from "antd";
import { useRouter } from "next/router";
import { FcIdea } from "react-icons/fc";
import { AiFillHome } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { AiFillDatabase } from "react-icons/ai";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";

const sampleActivities = [
  "You liked the comment lorem is pul...",
  "You disliked the comment lorem is pul...",
  "You responded the comment lorem is pul...",
  "You liked the comment lorem is pul...",
  "You disliked the comment lorem is pul...",
  "You responded the comment lorem is pul...",
  "You liked the comment lorem is pul...",
  "You disliked the comment lorem is pul...",
  "You responded the comment lorem is pul...",
];

// Upload avatar
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export default function Index({ children }) {
  const { data } = useGetDepartmentsQuery();
  const { data: department } = useGetDepartmentsQuery();
  console.log(data);
  const router = useRouter();
  const items = [
    {
      key: 1,
      icon: <AiFillHome />,
      label: <span onClick={() => router.push("/")}>Home</span>,
    },
    {
      key: 2,
      icon: <IoIosPeople />,
      label: <>Department</>,
      children: [
        {
          label: (
            <span onClick={() => router.push("/department")}>
              {/* {department?.map(({ id, name }) => {
                return {
                  value: id,
                  label: name,
                };
              })} */}
            </span>
          ),
        },
      ],
    },
    {
      key: 6,
      icon: <FcIdea />,
      label: <>Your Idea</>,
      children: [
        {
          key: 7,
          label: (
            <span onClick={() => router.push("/idea")}>Submit A New Idea</span>
          ),
        },
        {
          key: 8,
          label: (
            <span onClick={() => router.push("/idea")}>Your Past Ideas</span>
          ),
        },
      ],
    },
    {
      key: 9,
      icon: <AiFillDatabase />,
      label: <span>System</span>,
    },
    {
      key: 10,
      icon: <MdOutlinePrivacyTip />,
      label: <span>Privilege</span>,
      children: [
        {
          key: 11,
          label: <span onClick={() => router.push("/admin")}>Admin</span>,
        },
        {
          key: 12,
          label: (
            <span onClick={() => router.push("/manager")}>Header Manager</span>
          ),
        },
        {
          key: 13,
          label: (
            <span onClick={() => router.push("/department")}>Coordinator</span>
          ),
        },
      ],
    },
  ];
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <header
        style={{
          maxWidth: 1580,
          display: "flex",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "space-between",
          background: "white",
        }}
      >
        <section style={{ display: "flex" }}>
          <img
            src="https://www.gre.ac.uk/__data/assets/image/0035/265688/logo_final_on_white.png"
            style={{ height: 46 }}
          ></img>
          <Menu
            style={{
              width: "100%",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="horizontal"
            items={items}
          />
        </section>
        <Avatar
          style={{ cursor: "pointer", right: 20 }}
          onClick={showDrawer}
          size={40}
          icon={<UserOutlined />}
        />
      </header>
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button danger onClick={onClose}>
              Logout
            </Button>
            <Button type="primary" onClick={onClose}>
              Save Changes
            </Button>
          </Space>
        }
      >
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item label="Email" colon={false}>
            <Input />
          </Form.Item>
          <Form.Item label="Department" colon={false}>
            <Input />
          </Form.Item>
          <Form.Item label="Username" colon={false}>
            <Input />
          </Form.Item>
          <Form.Item label="Avatar" colon={false}>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
        <Divider>Activities</Divider>
        {sampleActivities.map((i) => {
          return (
            <div style={{ color: "black" }} key={i}>
              <a>{i}</a>
              <Divider />
            </div>
          );
        })}
      </Drawer>
      {children}
    </div>
  );
}
