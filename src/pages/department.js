import React from 'react'
import Layout from "@/components/Layout/Index"
import { Divider, Table } from 'antd'


export default function Department() {
    const dataSource = [
        {
            id: 1,
            title: "ANNOUNCEMENT OF COLLECTING STUDENTS’ OPINION ON SUBJECTS 2ND SEMESTER / 2017-2018",
            createDate: "2014-12-24 23:12:00",
            creator: "pcs@gmail.com"
        },
        {
            id: 2,
            title: "ANNOUNCEMENT OF COLLECTING STUDENTS’ OPINION ON SUBJECTS 2ND SEMESTER / 2017-2018",
            createDate: "2014-12-24 23:12:00",
            creator: "pcs@gmail.com"
        },
        {
            id: 3,
            title: "ANNOUNCEMENT OF COLLECTING STUDENTS’ OPINION ON SUBJECTS 2ND SEMESTER / 2017-2018",
            createDate: "2014-12-24 23:12:00",
            creator: "pcs@gmail.com"
        },
        {
            id: 4,
            title: "ANNOUNCEMENT OF COLLECTING STUDENTS’ OPINION ON SUBJECTS 2ND SEMESTER / 2017-2018",
            createDate: "2014-12-24 23:12:00",
            creator: "pcs@gmail.com",
            action: "5"
        },
        {
            id: 5,
            title: "ANNOUNCEMENT OF COLLECTING STUDENTS’ OPINION ON SUBJECTS 2ND SEMESTER / 2017-2018",
            createDate: "2014-12-24 23:12:00",
            creator: "pcs@gmail.com"
        }
    ]
    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            width: "50%"
        },
        {
            title: "Create Date",
            dataIndex: "createDate",
            width: "15%"
        },
        {
            title: "Creator",
            dataIndex: "creator",
            width: "15%"
        },
        {
            title: "Action",
            dataIndex: "action",
            width: "20%",
            render: (value, record) => {
                return <a>
                    View Detail
                </a>
            }
        }
    ]
    return (
        <Layout>
            <div style={{ maxWidth: 1580, margin: "0 auto" }}>
                <h1 style={{ textAlign: "center" }}>
                    Department Of Human Resource
                </h1>
                <Divider><span style={{ fontSize: 24 }}>Accouncments</span></Divider>

                <Table
                    dataSource={dataSource} columns={columns} pagination={{ pageSize: 3 }}
                />
            </div>

        </Layout>
    )
}
