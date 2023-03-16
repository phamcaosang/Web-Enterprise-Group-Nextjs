import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Select,
  Table,
  Tag,
  message,
  Spin,
} from "antd";
import React, { useState, useEffect } from "react";
import { validateMessages } from "../../..//utils/requireMessage";
import { parseDate } from "../../../utils/parseDate";
import {
  useAddDepartmentMutation,
  useDeleteDepartmentMutation,
  useEditDepartmentMutation,
  useGetDepartmentsQuery,
} from "../../../redux/Slices/Department";

export default function Index() {
  const { data } = useGetDepartmentsQuery();
  const [addDepartment, { isLoading }] = useAddDepartmentMutation();
  const [deleteDepartment, { isLoading: isLoadingDelete }] =
    useDeleteDepartmentMutation();
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState(null);
  const [form] = Form.useForm();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const HandleDelete = (id) => {
    console.log(id);
    deleteDepartment(id)
      .unwrap()
      .then((res) => {
        message.success("Department deleted");
      })
      .catch((err) => {
        message.error("Failed to update department");
      });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: "35%",
    },
    {
      title: "Created Date",
      dataIndex: "createdDate",
      width: "15%",
      render: (value) => {
        return <>{parseDate(value)}</>;
      },
    },
    {
      title: "Updated Date",
      dataIndex: "updatedDate",
      width: "15%",
    },
    {
      title: "Status",
      dataIndex: "status",
      width: "15%",
      render: (value) => {
        return (
          <>
            {value ? (
              <Tag color="blue">ENABLED</Tag>
            ) : (
              <Tag color="red">DISABLED</Tag>
            )}
          </>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "20%",
      render: (value, record) => {
        return (
          <a>
            <Tag
              color="cyan"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setDataEdit(record);
                setIsModalEdit(true);
              }}
            >
              Edit
            </Tag>
            <Tag
              color="red"
              style={{ cursor: "pointer" }}
              onClick={() => HandleDelete(record.id)}
            >
              Delete
            </Tag>
          </a>
        );
      },
    },
  ];
  const handleFinish = (values) => {
    addDepartment(values)
      .unwrap()
      .then((res) => {
        message.success("Department added");
        form.resetFields();
      })
      .catch((err) => {
        console.log(err);
        message.error("Failed to add department");
      });
    setIsOpenForm(false);
    console.log(values);
  };
  return (
    <div>
      <div style={{ textAlign: "right", marginBottom: 20 }}>
        <Button type="primary" onClick={() => setIsOpenForm(true)}>
          ADD NEW
        </Button>
      </div>
      <Divider>
        <span style={{ fontSize: 32 }}>TABLE OF FACULTIES AND DEPARTMENT</span>
      </Divider>
      <Spin spinning={isLoadingDelete}>
        <Table
          dataSource={data}
          columns={columns}
          loading={isLoading}
          pagination={{ pageSize: 10 }}
        ></Table>
      </Spin>
      <Modal
        title="ADD DEPARTMENT / FACULTY"
        width={700}
        open={isOpenForm}
        closable={false}
        footer={[
          <Button key="close" onClick={() => setIsOpenForm(false)}>
            Close
          </Button>,
          <Button key="add" type="primary" onClick={() => form.submit()}>
            Add new
          </Button>,
        ]}
      >
        <Form
          validateMessages={validateMessages}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          form={form}
          onFinish={handleFinish}
        >
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Status" name="status" rules={[{ required: true }]}>
            <Select
              options={[
                {
                  value: true,
                  label: "ENABLED",
                },
                {
                  value: false,
                  label: "DISABLED",
                },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
      {dataEdit && (
        <ModalEditDepartment
          setIsModalEdit={setIsModalEdit}
          isModalEdit={isModalEdit}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}
    </div>
  );
}

function ModalEditDepartment({
  setIsModalEdit,
  isModalEdit,
  dataEdit,
  setDataEdit,
}) {
  const [form] = Form.useForm();
  const [editDepartment, { isLoading }] = useEditDepartmentMutation();

  useEffect(() => {
    if (dataEdit) {
      form.setFieldsValue({
        ...dataEdit,
      });
    }
  }, [JSON.stringify(dataEdit)]);
  const handleFinish = (values) => {
    console.log(values);
    editDepartment({
      ...values,
      id: dataEdit?.id,
    })
      .unwrap()
      .then((res) => {
        message.success("Department edited");
        form.resetFields();
        setDataEdit(null);
        setIsModalEdit(false);
      })
      .catch((err) => {
        console.log(err);
        message.error("Failed to edit department");
      });
  };

  return (
    <Modal
      title="Edit Department / Faculty"
      closable={false}
      onOk={() => {
        form.submit();
      }}
      onCancel={() => {
        setDataEdit(null);
        setIsModalEdit(false);
      }}
      open={isModalEdit}
    >
      <Spin spinning={isLoading}>
        <Form
          style={{ width: 400, margin: "0 auto" }}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          form={form}
          onFinish={handleFinish}
          validateMessages={validateMessages}
          loading={isLoading}
        >
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Status" name="status" rules={[{ required: true }]}>
            <Select
              options={[
                {
                  value: true,
                  label: "ENABLED",
                },
                {
                  value: false,
                  label: "DISABLED",
                },
              ]}
            />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
}
