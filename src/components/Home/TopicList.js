import React from "react";
import { Avatar, List, Space, Tooltip } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { HiPencilAlt } from "react-icons/hi";
import { BsListUl } from "react-icons/bs";
import { FcInfo } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `Department ${i}`,
  avatar: "https://en.wikipedia.org/wiki/File:Sunflower_sky_backdrop.jpg",
  description: "Idea for event arrangement in 2024. Deadline: 20/12/2023.",
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function TopicList() {
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={FcIdea} text="20 ideas available" key="1" />,
              <IconText icon={AiOutlineEye} text="1000 total views" key="2" />,
              <IconText icon={AiFillLike} text="150 total likes" key="3" />,
              <IconText
                icon={AiFillDislike}
                text="30 total dislikes"
                key="4"
              />,
              <IconText
                icon={AiOutlineComment}
                text="500 total comments"
                key="5"
              />,
            ]}
            extra={
              <div
                style={{
                  width: 30,
                  display: "flex",
                  flexDirection: "column",
                  gap: 5,
                  justifyContent: "flex-end",
                }}
              >
                <Tooltip placement="leftTop" title="Submit Idea To Topic">
                  <HiPencilAlt size={32} style={{ cursor: "pointer" }} />
                </Tooltip>
                <Tooltip placement="leftTop" title="View Idea Of Topic">
                  <BsListUl size={32} style={{ cursor: "pointer" }} />
                </Tooltip>
                <Tooltip
                  placement="leftTop"
                  color="cyan"
                  title={
                    <>
                      <p>Date Created: 20/10/2022</p>
                      <p>Date Close Idea: 10/05/2023</p>
                      <p>Date Close Topic: 15/05/2023</p>
                      <p>Creator: Anderson Marley</p>
                    </>
                  }
                >
                  <FcInfo size={32} style={{ cursor: "pointer" }} />
                </Tooltip>
              </div>
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={
                <>
                  {item.title}
                  <span style={{ fontWeight: 8, marginLeft: 20, fontSize: 12 }}>
                    {" "}
                    a few second ago
                  </span>
                </>
              }
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
