import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import type { FormProps } from "antd";
import { useNavigate } from "react-router-dom";

// Tipe untuk field dalam form
type FieldType = {
  email: string;
  password: string;
};

// // Fungsi yang akan dijalankan saat form berhasil disubmit
// const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
//   console.log("Success:", values);
//   try {
//     const response = await fetch("http://localhost:3000/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(values),
//     });

//     if (!response.ok) {
//       throw new Error("Login failed");
//     }

//     const data = await response.json();
//     localStorage.setItem("token", data.token); // Simpan token di localStorage
//     message.success("Login successful!");

//     // Arahkan pengguna ke halaman beranda atau halaman lain
//     navigate("/");
//   } catch (error) {
//     message.error("Login failed. Please check your credentials.");
//   }
// };

// // Fungsi yang akan dijalankan saat form gagal disubmit
// const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

// Komponen Login
export const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/users/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token); // Simpan token di localStorage
      message.success("Login successful!");

      // Arahkan pengguna ke halaman beranda atau halaman lain
      navigate("/");
    } catch (error) {
      message.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-10">
      <div>
        <h1 className="font-bold text-xl pb-5">Welcome Back!</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={handleFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
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

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
