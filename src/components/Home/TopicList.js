import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space, Tooltip } from 'antd';
import { HiPencilAlt } from "react-icons/hi"
import { TbListDetails } from "react-icons/tb"
import { FcInfo } from "react-icons/fc"
import { FcIdea } from 'react-icons/fc';
import { AiOutlineComment } from "react-icons/ai"
import {
    GrView
} from 'react-icons/gr';
import { BiLike, BiDislike } from 'react-icons/bi';
import React from "react"
const data = Array.from({
    length: 20,
}).map((_, i) => ({
    title: `Department ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description: 'Idea for event arrangement in 2024. Deadline: 20/12/2023',
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
                            <IconText icon={GrView} text="1000 total views" key="2" />,
                            <IconText icon={BiLike} text="150 total likes" key="3" />,
                            <IconText icon={BiDislike} text="30 total dislikes" key="4" />,

                        ]}
                        extra={
                            <div style={{ width: 30, display: "flex", flexDirection: "column", gap: 5, justifyContent: "flex-end" }}>
                                <Tooltip placement='leftTop' title="Submit Idea To Topic" style={{ cursor: "pointer" }}>
                                    <HiPencilAlt size={32} />
                                </Tooltip>
                                <Tooltip placement='leftTop' title="View Ideas Of Topic" style={{ cursor: "pointer" }}>
                                    <TbListDetails size={32} />
                                </Tooltip>
                                <Tooltip placement='leftTop' color="cyan" title={
                                    <>
                                        <p>Date Created: 20/10/2022</p>
                                        <p>Date Close Idea: 10/05/2023</p>
                                        <p>Date Close Topic: 15/05/2023</p>
                                        <p>Creator: Anderson Marley</p>
                                    </>
                                } style={{ cursor: "pointer" }}>
                                    <FcInfo size={32} />
                                </Tooltip>

                            </div>
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<>
                                {item.title}
                                <span style={{ fontWeight: 400, marginLeft: 15, fontSize: 14, color: "#5b6678" }}>a few seconds ago</span>
                            </>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
}
