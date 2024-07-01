import {
  Button,
  Card,
  DatePicker,
  Dropdown,
  Form,
  Input,
  MenuProps,
  notification,
  Space,
} from "antd";
import { Moment } from "moment";
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import carImage from "../assets/header.png";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Dengan Driver
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        Tanpa Driver
      </a>
    ),
  },
];

interface Car {
  id: number;
  name: string;
  finishRent: string;
  capacity: number;
  image_url: string;
  price: string;
}

interface FormValues {
  dateTime: Moment;
  passengerCount: number;
}

export const SearchCars: React.FC = () => {
  const [form] = Form.useForm();
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [carData, setCarData] = useState<Car[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://sheer-georgeanne-haitech-858a4869.koyeb.app/cars/list");
        console.log(response.data.data);
        setCarData(response.data.data); // Set the car data correctly
      } catch (error) {
        console.error("Error fetching car data:", error);
        notification.error({
          message: "Error",
          description:
            "Failed to fetch car data. Please check your network connection or try again later.",
        });
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (values: FormValues) => {
    const { dateTime, passengerCount } = values;
    const combinedDateTime = dateTime.toISOString();

    const filtered = carData.filter((car) => {
      return (
        moment(combinedDateTime).isAfter(car.finishRent) &&
        car.capacity >= passengerCount
      );
    });

    setFilteredCars(filtered);
  };

  return (
    <div>
      <section
        id="hero"
        className="container-lg mt-16 pb-5"
        style={{ backgroundColor: "#F1F3FF" }}
      >
        <div className="md:grid grid-cols-2 gap-3 justify-items-end items-center">
          <div className="px-4 pl-5 col">
            <div className="m-8">
              <h1 className="text-5xl font-bold pt-10">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h1>
              <div>
                <p className="font-medium mb-10 mt-4 leading-relaxed">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
              </div>
              <Button type="primary" className="bg-success">
                <a href="#" className="bg-success text-white">
                  Mulai Sewa Mobil
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full mt-10 col">
            <img src={carImage} alt="Car" />
          </div>
        </div>
      </section>
      <div className="flex justify-center my-8">
        <Form form={form} onFinish={handleSubmit} className="w-full max-w-4xl">
          <div className="flex gap-2 shadow-md py-3 z-20 bg-white justify-center rounded-md px-8">
            <Form.Item
              label="Tipe Driver"
              name="typedriver"
              rules={[
                { required: false, message: "Please select date and time!" },
              ]}
            >
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Hover me
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Form.Item>
            <Form.Item
              label="Tanggal & Waktu"
              name="dateTime"
              rules={[
                { required: true, message: "Please select date and time!" },
              ]}
            >
              <DatePicker showTime format="YYYY-MM-DDTHH:mm:ss.SSS[Z]" />
            </Form.Item>
            <Form.Item
              label="Jumlah Penumpang"
              name="passengerCount"
              rules={[
                { required: true, message: "Please input passenger count!" },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
      <section className="m-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCars.length === 0 ? (
            <p className="text-center text-xl">
              Tidak ada mobil yang tersedia setelah tanggal yang dipilih.
            </p>
          ) : (
            filteredCars.map((car) => (
              <Card key={car.id} title={car.name} className="w-full">
                <img
                  src={car.image_url}
                  alt={car.name}
                  className="object-cover h-48 w-full"
                />
                <p className="mt-2">
                  Finish Rent:{" "}
                  {moment(car.finishRent).format("YYYY-MM-DD HH:mm:ss")}
                </p>
                <p>Capacity: {car.capacity}</p>
                <p>Price: {car.price}</p>
              </Card>
            ))
          )}
        </div>
      </section>
    </div>
  );
};
