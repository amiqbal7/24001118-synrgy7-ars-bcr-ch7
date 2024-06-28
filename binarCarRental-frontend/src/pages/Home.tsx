import React from "react";
import { Button, Collapse, CollapseProps, theme } from "antd";
import car from "../assets/header.png";
import girl from "../assets/girl.png";
import checklist from "../assets/ceklist.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CSSProperties } from "react";
import rating from "../assets/Star 3.png";
import img from "../assets/photo1.png";
import { useNavigate } from "react-router-dom";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

export const Home: React.FC = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const handleClickSearch = () => {
    navigate('/search');
  }
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
                <a onClick={handleClickSearch} className="bg-success text-white">
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

      <section className="pt-12">
        <div
          id="service"
          className="container max-w-6xl mx-auto grid md:grid-cols-2 w-full justify-items-center"
        >
          <div className="mt-10">
            <img src={girl} />
          </div>
          <div className="w-full px-4 m-auto text-justify">
            <h1 className="text-3xl font-bold">
              Best Car Rental for any kind
              <span className="block mt-1"> of trip in (Lokasimu)! </span>
            </h1>
            <p className="mb-10 mt-4 leading-relaxed">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="">
              <p className="flex gap-2 py-1">
                <img src={checklist} />
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
              <p className="flex gap-2 py-1">
                <img src={checklist} />
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
              <p className="flex gap-2 py-1">
                <img src={checklist} />
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
              <p className="flex gap-1">
                <img src={checklist} />
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="py-16">
        <h1 className="font-bold text-3xl pb-5 text-center">Why Us ?</h1>
        <p className="text-center pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aperiam,
          perspiciatis placeat exercitationem.
        </p>
        <div className="w-full max-w-6xl mx-auto justify-center md:grid-cols-4 grid gap-3">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <img className="pb-1" src="./images/oke.png" />
            <h1 className="font-bold pb-1">Layanan 24 Jam</h1>
            <p className="mb-3 font-normal text-gray-600">
              Go to this step by step guideline process on how to certify for
              your weekly benefits.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <img src="./images/price.png" />
            <h1 className="font-bold py-1">Layanan 24 Jam</h1>
            <p className="mb-3 font-normal text-gray-600">
              Go to this step by step guideline process on how to certify for
              your weekly benefits.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <img src="./images/jam.png" />
            <h1 className="font-bold py-1">Layanan 24 Jam</h1>
            <p className="mb-3 font-normal text-gray-600">
              Go to this step by step guideline process on how to certify for
              your weekly benefits.
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
            <img src="./images/award.png" />
            <h1 className="font-bold py-1">Layanan 24 Jam</h1>
            <p className="mb-3 font-normal text-gray-600">
              Go to this step by step guideline process on how to certify for
              your weekly benefits.
            </p>
          </div>
        </div>
      </section>

      <section id="testi" className="">
        <div className="mx-auto text-center pt-16">
          <h2 className="mb-4 text-3xl font-bold">Testimonial</h2>
          <p className="mb-4 pb-2 md:mb-12 md:pb-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={32}
            modules={[Autoplay, Navigation]}
            centeredSlides={true}
            autoplay={{
              delay: 8000,
            }}
            navigation={{
              nextEl: ".next-button",
              prevEl: ".prev-button",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                centeredSlides: true,
              },
              1024: {
                centeredSlides: true,
                slidesPerView: 2.25,
              },
            }}
          >
            <SwiperSlide>
              <div className="flex h-full flex-col justify-between bg-[#F1F3FF] p-12">
                <div className="grid grid-cols-1 mx-auto justify-items-center">
                  <div className="">
                    <img className="" src={img} alt="Testimonial" />
                  </div>
                  <div className="mt-4 grid mx-auto justify-items-center">
                    <img src={rating} alt="Rating" />
                    <p className="mt-4 text-center text-lg text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam cumque recusandae dolorum porro, quasi sunt
                      necessitatibus dolorem ab laudantium veli.
                    </p>
                  </div>
                </div>
                <div className="mt-8 font-bold text-center">
                  John Doe 32, Bromo
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full flex-col justify-between bg-[#F1F3FF] p-12">
                <div className="grid grid-cols-1 mx-auto justify-items-center">
                  <div className="">
                    <img className="" src={img} alt="Testimonial" />
                  </div>
                  <div className="mt-4 grid mx-auto justify-items-center">
                    <img src={rating} alt="Rating" />
                    <p className="mt-4 text-center text-lg text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam cumque recusandae dolorum porro, quasi sunt
                      necessitatibus dolorem ab laudantium veli.
                    </p>
                  </div>
                </div>
                <div className="mt-8 font-bold text-center">
                  John Doe 32, Bromo
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full flex-col justify-between bg-[#F1F3FF] p-12">
                <div className="grid grid-cols-1 mx-auto justify-items-center">
                  <div className="">
                    <img className="" src={img} alt="Testimonial" />
                  </div>
                  <div className="mt-4 grid mx-auto justify-items-center">
                    <img src={rating} alt="Rating" />
                    <p className="mt-4 text-center text-lg text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam cumque recusandae dolorum porro, quasi sunt
                      necessitatibus dolorem ab laudantium veli.
                    </p>
                  </div>
                </div>
                <div className="mt-8 font-bold text-center">
                  John Doe 32, Bromo
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-8 gap-2 lg:mt-6 items-center text-center flex justify-center">
          <button className="prev-button rounded-full border border-current p-3 text-green-400 transition-colors focus:bg-green-400 focus:text-white focus:outline-none">
            <span className="sr-only">Previous Slide</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 -rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <button className="next-button rounded-full border border-current p-3 text-green-400 focus:bg-green-400 focus:text-white focus:outline-none">
            <span className="sr-only">Next Slide</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>

      <section className="p-7">
        <div className="container grid mx-auto justify-center text-center bg-blue-800 py-10 rounded-lg">
          <h1 className="font-bold text-2xl text-white px-20">
            Sewa Mobil di (Lokasimu) Sekarang
          </h1>
          <p className="text-white px-14 pt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            expedita perspiciatis quis delectus dolorem repudiandae optio alias
            excepturi corporis cumque aspernatur harum, quidem labore esse, illo
            ducimus exercitationem laboriosam accusamus!
          </p>
          <div className="py-10">
            <button className="py-3 bg-green-400 hover:opacity-80 rounded-md px-5 font-bold text-white">
              Mulai Sewa Mobil
            </button>
          </div>
        </div>
      </section>

      <section className="my-10 p-5 max-w-7xl items-center mx-auto">
        <div className="md:grid grid-cols-2 gap-5 ">
          <div className="items-center text-center md:text-start my-3">
            <h1 className="text-xl font-bold">Frequently Asked Question</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            style={{ background: token.colorBgContainer }}
            items={getItems(panelStyle)}
          />
        </div>
      </section>

    </div>
  );
};
