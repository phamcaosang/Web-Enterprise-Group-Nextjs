import React, { useState } from 'react'
import Layout from "@/components/Layout/Index"
import { Button, Checkbox, Form, Input, Modal, Select, Spin, Switch, Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons';
import { useGetDepartmentsQuery } from '@/redux/slices/Department';
import { useGetTopicsQuery } from '@/redux/slices/Topic';
import { useGetCategoriesQuery } from '@/redux/slices/Category';
import { useGetTermQuery } from '@/redux/slices/Term';
import parse from 'html-react-parser';
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
    const { data: departments } = useGetDepartmentsQuery()
    const { data: topics } = useGetTopicsQuery()
    const { data: categories } = useGetCategoriesQuery()
    const [selectedDepartment, setSelectedDepartment] = useState(null)
    const [agree, setAgree] = useState(false)
    const [modalTerm, setModalTerm] = useState(false)
    const { data: terms } = useGetTermQuery()
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
                            onChange={(dp) => setSelectedDepartment(dp)}
                            options={
                                departments?.map(dp => {
                                    return {
                                        value: dp.id,
                                        label: dp.name
                                    }
                                })

                            }
                        />
                    </Form.Item>
                    <Form.Item label="Topic" name="topic">
                        <Select
                            defaultValue="Please select topic"
                            disabled={!selectedDepartment}
                            options={
                                topics?.filter(i => i.Department.id === selectedDepartment).map(tp => {
                                    return {
                                        value: tp.id,
                                        label: tp.name
                                    }
                                })
                            }
                        />
                    </Form.Item>
                    <Form.Item label="Category" name="category">
                        <Select
                            defaultValue="Please select category"
                            options={
                                categories?.map(ct => {
                                    return {
                                        value: ct.id,
                                        label: ct.name
                                    }
                                })

                            }
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
                    <div style={{ textAlign: "right", marginBottom: 20 }}>
                        <Checkbox checked={agree} name="term" onChange={(e) => {
                            setAgree(e.target.checked)
                            setModalTerm(e.target.checked)
                        }}>
                            I accept the <a>Terms & Conditions</a>
                        </Checkbox>
                        <Modal
                            width={1580} style={{ top: 20 }}
                            closable={false} open={modalTerm} footer={<Button type="primary" onClick={() => setModalTerm(false)}>Accept</Button>}>
                            {!terms ? <Spin spinning={!terms} /> : parse(terms?.description)}
                        </Modal>
                    </div>
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
