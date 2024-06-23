import { Button, Card, DatePicker, Form, Input, TimePicker } from "antd";
import { Moment } from "moment";
import { useEffect, useState } from "react";
import axios from "axios";
import carImage from "../assets/header.png";

interface Car {
  id: number;
  type: string;
  availableDate: string;
  availableTime: string;
  passengerCount: number;
  name: string;
}

interface FormValues {
  driverType: string;
  date: Moment;
  time: Moment;
  passengerCount: number;
}

export const SearchCars: React.FC = () => {
  const [form] = Form.useForm();
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [carData, setCarData] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get<Car[]>('https://your-api-endpoint.com/cars');
        setCarData(response.data);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCarData();
  }, []);

  const handleSubmit = (values: FormValues) => {
    const { driverType, date, time, passengerCount } = values;
    const filtered = carData.filter((car) => {
      return (
        car.type === driverType &&
        car.availableDate <= date.format("YYYY-MM-DD") &&
        car.availableTime <= time.format("HH:mm") &&
        car.passengerCount >= passengerCount
      );
    });
    setFilteredCars(filtered);
  };

  return (
    <div className="">
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
      <section className="m-3">
        <Form form={form} onFinish={handleSubmit}>
          <div className="flex gap-2">
            <Form.Item
              label="Jenis Driver"
              name="driverType"
              rules={[{ required: true, message: "Please select driver type!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Tanggal"
              name="date"
              rules={[{ required: true, message: "Please select date!" }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="Waktu"
              name="time"
              rules={[{ required: true, message: "Please select time!" }]}
            >
              <TimePicker />
            </Form.Item>
            <Form.Item
              label="Jumlah Penumpang"
              name="passengerCount"
              rules={[{ required: true, message: "Please input passenger count!" }]}
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
        <div>
          {filteredCars.map((car) => (
            <Card key={car.id} title={car.name}>
              <p>Type: {car.type}</p>
              <p>Available Date: {car.availableDate}</p>
              <p>Available Time: {car.availableTime}</p>
              <p>Passenger Count: {car.passengerCount}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
