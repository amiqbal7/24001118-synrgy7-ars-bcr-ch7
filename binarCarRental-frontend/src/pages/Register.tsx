import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import type { FormProps } from "antd";
import { useNavigate } from "react-router-dom";
import image from "../assets/image 2.png";

type FieldType = {
  email: string;
  username: string;
  password: string;
  role?: string;
};

export const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    try {
      // memasukkan secara otomatis field role
      const formData = { ...values, role: "client" };

      const response = await fetch("https://sheer-georgeanne-haitech-858a4869.koyeb.app/users/auth/register_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      message.success("Login successful!");
      navigate("/login");
    } catch (error) {
      message.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-[2900px] hidden lg:block">
        <img src={image} className="object-cover w-full h-full" />
      </div>
      <div className="w-full md:w-7/10 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h1 className="font-bold text-xl pb-5">Welcome Back!</h1>
          <Form
            initialValues={{ role: "client" }}
            onFinish={handleFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
