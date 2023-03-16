import Layout from "../components/Layout/Index";
import { Input } from "antd";
import TopicList from "@/components/Home/TopicList";
export default function Home() {
  return (
    <>
      <Layout>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", paddingTop: 20 }}>
            <Input.Search
              style={{ width: 400 }}
              placeholder="Search For Topic"
              allowClear
              enterButton="Search"
              size="large"
            />
          </div>
          <div>
            <TopicList />
          </div>
        </div>
      </Layout>
    </>
  );
}
