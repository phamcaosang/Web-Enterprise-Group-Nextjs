import { Button, DatePicker, Form, Input, Select, Tabs } from "antd";
import React from "react";
import Layout from "@/components/Layout/Index";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import TopicsIdeas from "@/components/TopicsIdeas";
import Announcements from "@/components/Announcements";

export default function Manager() {
  const items = [
    {
      key: "1",
      label: `STAFF`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `TOPIC & IDEA`,
      children: <TopicsIdeas />,
    },
    {
      key: "3",
      label: `ANNOUNCEMENTS`,
      children: <Announcements />,
    },
    {
      key: "4",
      label: `TAGS`,
      children: `Content of Tab Pane 4`,
    },
  ];

  return (
    <div>
      <Layout>
        <div style={{ maxWidth: 1580, margin: "0 auto" }}>
          <h1 style={{ textAlign: "center", fontSize: 34, margin: 20 }}>
            MANAGER PANEL
          </h1>
          <Tabs items={items} />
        </div>
      </Layout>
    </div>
  );
}
