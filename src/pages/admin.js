import React from "react";
import Layout from "@/components/Layout/Index";
import { Tabs } from "antd";
import TermCondition from "../components/TermCondition";
import Department from "../components/Department";
import Category from "../components/Category";
import TopicsIdeas from "../components/TopicsIdeas";

export default function Admin() {
  const items = [
    {
      key: "1",
      label: `STAFF`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `FACULTIES & DEPARTMENT`,
      children: <Department />,
    },
    {
      key: "3",
      label: `TOPIC & IDEA`,
      children: <TopicsIdeas />,
    },
    {
      key: "4",
      label: `CATEGORIES`,
      children: <Category />,
    },
    {
      key: "5",
      label: `TERMS AND CONDITIONS`,
      children: <TermCondition />,
    },
    {
      key: "6",
      label: `STATISTIC`,
      children: `Content of Tab Pane 4`,
    },
  ];

  return (
    <Layout>
      <div style={{ maxWidth: 1580, margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", fontSize: 34, margin: 20 }}>
          ADMIN PANEL
        </h1>
        <Tabs items={items} />
      </div>
    </Layout>
  );
}
