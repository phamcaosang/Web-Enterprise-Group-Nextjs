import TopicList from "@/components/Home/TopicList"
import Layout from "@/components/Layout/Index"
import { Form, Input, Select } from "antd"



export default function Home() {
  return (
    <>
      <Layout>
        <div style={{
          maxWidth: 920,
          margin: "0 auto"
        }}>
          <div style={{ textAlign: "center", paddingTop: 20 }}>
            <Input.Search
              style={{
                width: 500
              }}
              placeholder="Search For Topic"
              allowClear
              enterButton="Search"
              size="large"
            />
          </div>
          <TopicList />
        </div>

      </Layout>
    </>
  )
}
