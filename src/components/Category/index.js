import {
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Table,
  Tag,
  message,
  Spin,
} from "antd";
import React, { useState, useEffect } from "react";
import { validateMessages } from "../../../utils/requireMessage";
import { parseDate } from "../../../utils/parseDate";
import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useGetCategoriesQuery,
} from "../../../redux/Slices/Category";

export default function Index() {
  const { data } = useGetCategoriesQuery();
  const [addCategory, { isLoading }] = useAddCategoryMutation();
  const [deleteCategory, { isLoading: isLoadingCategory }] =
    useDeleteCategoryMutation();
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState(null);
  const [form] = Form.useForm();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleDelete = (id) => {
    console.log(id);
    deleteCategory(id)
      .unwrap()
      .then((res) => {
        message.success("Category deleted");
      })
      .catch((err) => {
        message.error("Failed to delete Category");
      });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: "40%",
    },
    {
      title: "Created Date",
      dataIndex: "createdDate",
      width: "20%",
      render: (value) => {
        return <>{parseDate(value)}</>;
      },
    },
    {
      title: "Updated Date",
      dataIndex: "updatedDate",
      width: "20%",
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
              onClick={() => handleDelete(record.id)}
            >
              Delete
            </Tag>
          </a>
        );
      },
    },
  ];
  const handleFinish = (values) => {
    addCategory(values)
      .unwrap()
      .then((res) => {
        message.success("Category added");
        form.resetFields();
      })
      .catch((err) => {
        console.log(err);
        message.error("Failed to add category");
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
        <span style={{ fontSize: 32 }}>TABLE OF CATEGORY</span>
      </Divider>
      <Spin spinning={isLoadingCategory}>
        <Table
          dataSource={data}
          columns={columns}
          loading={isLoading}
          pagination={{ pageSize: 10 }}
        ></Table>
      </Spin>
      <Modal
        title="ADD CATEGORY"
        width={700}
        open={isOpenForm}
        closable={false}
        footer={[
          <Button key="close" onClick={() => setIsOpenForm(false)}>
            Close
          </Button>,
          <Button key="add" type="primary" onClick={() => form.submit()}>
            Save Changes
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
        </Form>
      </Modal>
      {dataEdit && (
        <ModalEditCategory
          setIsModalEdit={setIsModalEdit}
          isModalEdit={isModalEdit}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}
    </div>
  );
}

function ModalEditCategory({
  setIsModalEdit,
  isModalEdit,
  dataEdit,
  setDataEdit,
}) {
  const [form] = Form.useForm();
  const [editCategory, { isLoading }] = useEditCategoryMutation();

  useEffect(() => {
    if (dataEdit) {
      form.setFieldsValue({
        ...dataEdit,
      });
    }
  }, [JSON.stringify(dataEdit)]);
  const handleFinish = (values) => {
    console.log(values);
    editCategory({
      ...values,
      id: dataEdit?.id,
    })
      .unwrap()
      .then((res) => {
        message.success("Category edited");
        form.resetFields();
        setDataEdit(null);
        setIsModalEdit(false);
      })
      .catch((err) => {
        console.log(err);
        message.error("Failed to edit Category");
      });
  };
  return (
    <Modal
      title="CATEGORY"
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
        >
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
}
