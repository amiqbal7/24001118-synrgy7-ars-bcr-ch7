import React, { useEffect, useState } from "react";
import binar from "../assets/binar.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Dropdown, Menu, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token"); // Retrieve the token from local storage
      if (token) {
        try {
          const response = await axios.get(
            "https://sheer-georgeanne-haitech-858a4869.koyeb.app/users/auth/whoami",
            {
              headers: {
                Authorization: `Bearer ${token}`, // Include the token in the headers
              },
            }
          );
          setUser(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  const handleHome = () => {
    navigate("/");
  };

  const items: MenuProps["items"] = [
    {
      label: <button onClick={handleLogout}>Logout</button>,
      key: "logout",
    },
  ];

  const menu = <Menu items={items} />;

  return (
    <nav
      className="fixed w-full z-20 top-0 start-0"
      style={{ backgroundColor: "#F1F3FF" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div
          onClick={handleHome}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={binar} className="h-8" alt="Binar Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap items-center">
            BinarCarRental
          </span>
        </div>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {user ? (
            <div className="flex gap-2">
              <p className="textxl">Hello, {user.username}</p>
              <Dropdown overlay={menu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              type="button"
              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 text-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Why us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
