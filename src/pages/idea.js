import Layout from '@/component/layout/Index'
import { Button, Form, Input, Select, Switch } from 'antd'
import Dragger from 'antd/es/upload/Dragger'
import { InboxOutlined } from '@ant-design/icons';
import React from 'react'

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};



export default function Idea() {
  return (
    <Layout>
      <div style={{maxWidth: 720 , margin: "auto"}}>
        <h1 style={{textAlign:"center"}}>
          Idea Submition
        </h1>
        <Form labelCol={{span: 6}} wrapperCol={{ span: 18}}>
          <Form.Item label= "Department">
            <Select
              defaultValue="Please select department"
              style={{width:250}}
              //style={{ width: 120 }}
              options={[
                { value: 'Department_A', label: 'Department A' },
                { value: 'Department_B', label: 'Department B' },
                { value: 'Department_C', label: 'Department C' },
              ]}
            />
          </Form.Item>
          <Form.Item label = " topic " name="topic">
            <Select
              defaultValue = "Please select topic"
              options = {[
                { value: "Topic_A", label: "Topic_A" },
                { value: "Topic_B", label: "Topic_B" },
                { value: "Topic_C", label: "Topic_C" },
              ]}    
            />
          </Form.Item>
          <Form.Item label = "Anonyous" name= "anonyous">
            <Switch/>
          </Form.Item>
          <Form.Item label = "Idea" name = "idea">
            <Input.TextArea
            showCount
            maxLength={1000}
            placeholder=  "please show your idea here "
            style={{
              height:200
            }}
            />
          </Form.Item>
          <Form.Item label="Files" name="files">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
              </p>
            </Dragger>
          </Form.Item>
          <div style={{textAlign:"right"}}>
            <Button type='primary'>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Layout>
  )
}
