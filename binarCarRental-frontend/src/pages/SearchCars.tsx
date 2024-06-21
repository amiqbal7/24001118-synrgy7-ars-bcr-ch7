import { Button, Form, Input } from "antd";
import React from "react";
import car from "../assets/header.png"

export const SearchCars: React.FC = () => {
  return (
    <div className="">
      {" "}
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
            <img src={car} />
          </div>
        </div>
      </section>
      <section>
        <Form>
            <Form.Item label="">
                <Input />
            </Form.Item>

        </Form>
      </section>
    </div>
  );
};
