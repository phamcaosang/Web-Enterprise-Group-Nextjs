import { useGetDepartmentsQuery } from '@/redux/slices/Department'
import { validateMessages } from '@/ultils/requireMessage'
import { Button, Divider, Form, Input, Modal, Select, Table, Tag } from 'antd'
import React, { useState } from 'react'

export default function Index() {
  const{ data, isLoading} = useGetDepartmentsQuery()
  const [form] = Form.useForm()
    const [isOpenForm, setIsOpenForm] = useState(false)
    const  columns = [
        {
          title: "Name",
          dataIndex: "name",
          width:"30%"
        },
        {
          title: "Create Date",
          dataIndex: "createdDate",
          width:"15%"
        },
        {
          title: "Update Date",
          dataIndex: "updatedDate",
          width:"15%"
        },
        {
            title: "Status",
            dataIndex: "status",
            width:"15%",
            render: (value) =>{
                return <>
                {value ? <Tag color={'blue'}>ENABLE</Tag> :<Tag color={'red'}>DISABLE</Tag>}
                </>
            }
        },
        {
          title: "Action",
          dataIndex: "action",
          width:"20%",
          render: (value, record) =>{
            return <a>
              <Tag color={'cyan'}>EDIT</Tag>
              <Tag color={'red'}>DELETE</Tag>
            </a>
          }
        }
      ]
  // const data = Array(20).fill({
  //   name: "Department of QC",
  //   createdDate: "22-1-2023 12:51:26",
  //   updatedDate: "22-1-2023 12:51:26",
  //   status: true
  // })
  const handleFinish =(value) =>{
    console.log(value)
    form.resetFields()
    setIsOpenForm(false)
  }
  return (
    <div>
        <div style={{textAlign:"right", marginBottom:20}}>
            <Button type='primary' onClick={()=> setIsOpenForm(true)}>ADD NEW</Button>
        </div>
        <Divider>
            <span style={{fontSize:28}}>TABLE OF FACULTIES AND DEPARTMENTS</span>
        </Divider>
        <Table dataSource={data} columns={columns} pagination={{pageSize: 10}}/>
        <Modal title="ADD DEPARTMENTS / FACULTY"
            closable={false}
            width={700}
            open = {isOpenForm}
            footer ={[
          <Button ket = "close" onClick={() => setIsOpenForm(false)}>Close</Button>,
          <Button ket = "add" type='primary' onClick={() =>form.submit()}>Add new</Button>
        ]}
        >
          <Form validateMessages={validateMessages} labelCol={{span:4}} wrapperCol={{span:20}}
            form={form}
            onFinish={handleFinish}
          >
            <Form.Item label="Name" name="name" rules={[{ required: true}]}>
              <Input/>
            </Form.Item>
            <Form.Item label="Status" name="status" rules={[{ required: true}]}>
              <Select
               options={[
                {
                  value: true,
                  label: "ENABLED"
                },
                {
                  value: false,
                  label: "DISABLED"
                }
               ]}
              />
            </Form.Item>
          </Form>

        </Modal>
    </div>
  )
}
