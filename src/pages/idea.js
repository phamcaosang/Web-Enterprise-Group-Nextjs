import React from 'react'
import Layout from "@/components/Layout/Index"
import { Button, Form, Input, Select, Switch, Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons';

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
            <div style={{ maxWidth: 720, margin: "0 auto" }}>
                <h3 style={{ textAlign: "center" }}>
                    IDEA SUBMISSION
                </h3>
                <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
                    <Form.Item label="Deparment" name="department">
                        <Select
                            defaultValue="Please select department"
                            // style={{ width: 250 }}
                            options={[
                                { value: 'Department_A', label: 'Department A' },
                                { value: 'Department_B', label: 'Department B' },
                                { value: 'Department_C', label: 'Department C' },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Topic" name="topic">
                        <Select
                            defaultValue="Please select topic"
                            options={[
                                { value: "Topic_A", label: "Topic A" },
                                { value: "Topic_B", label: "Topic B" },
                                { value: "Topic_C", label: "Topic C" },

                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Anomyous" name="anomyous">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="Idea" name="idea">
                        <Input.TextArea
                            showCount
                            maxLength={1000}
                            placeholder="Please fill your idea here!"
                            style={{
                                height: 200
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="Files" name="files">
                        <Upload.Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                band files
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                    <div style={{ textAlign: "right" }}>
                        <Button type='primary'>
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>

        </Layout>
    )
}
