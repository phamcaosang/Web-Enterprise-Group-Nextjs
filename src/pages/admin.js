import React from 'react'
import Layout from "@/components/Layout/Index"
import { Tabs } from 'antd'
import TermCondition from "../components/TermCondition"
import Department from "../components/Department"

export default function Amin() {
    const items = [
        {
            key: '1',
            label: `STAFF`,
            children: `Content of Tab Pane 1`,
        },
        {
            key: '2',
            label: `FACULTIES & DEPARTMENT`,
            children: <Department />,
        },
        {
            key: '3',
            label: `TOPICS & IDEAS`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '4',
            label: `TERMS & CONDITIONS`,
            children: <TermCondition />,
        },
        {
            key: '5',
            label: `STATISTICS`,
            children: `Content of Tab Pane 3`,
        },
    ];
    return (
        <Layout>
            <div style={{ maxWidth: 1580, margin: "0 auto" }}>
                <h1 style={{ textAlign: "center", fontSize: 34, margin: 20 }}>ADMIN PANEL</h1>
                <Tabs items={items} />
            </div>
        </Layout>
    )
}
