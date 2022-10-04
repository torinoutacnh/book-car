import DatePicker from "components/datePicker/DatePicker";
import React from "react";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./index.scss";
// import CurrencyFormat from "react-currency-format";

function Detail(props: any) {
    const listCar = [
        {
            name: "xe bmw",
            thumbnail:
                "https://tuvanmuaxe.vn/upload/upload_img/images/BMW-330i-m-sport-2019-viet-nam-tuvanmuaxe-2(1).jpg",
            life: 2019,
            seat: 4,
            color: "đen",
            class: "A",
            price: 768000,
        },
        {
            name: "xe toyota",
            thumbnail:
                "https://i1-vnexpress.vnecdn.net/2021/09/18/ToyotaViosWhite4jpg-1631940387.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=_n7l0jmOvmQFektHWNvndA&t=image",
            life: 2022,
            seat: 4,
            color: "trắng",
            class: "B",
            price: 1024000,
        },
        {
            name: "xe mazda",
            thumbnail: "https://mazdaphumyhung.vn/media/ukijzqey/new-mazda-cx-5_4.jpg",
            life: 2019,
            seat: 4,
            color: "đỏ",
            class: "C",
            price: 1920000,
        },
        {
            name: "xe toyota",
            thumbnail:
                "https://i1-vnexpress.vnecdn.net/2021/09/18/ToyotaViosWhite4jpg-1631940387.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=_n7l0jmOvmQFektHWNvndA&t=image",
            life: 2022,
            seat: 4,
            color: "trắng",
            class: "B",
            price: 1024000,
        },
        {
            name: "xe mazda",
            thumbnail: "https://mazdaphumyhung.vn/media/ukijzqey/new-mazda-cx-5_4.jpg",
            life: 2019,
            seat: 4,
            color: "đỏ",
            class: "C",
            price: 1920000,
        },
    ];

    return (
        <div className="form-page">
            <div className="detail">
                <div className="container">
                    <div className="bg-white rounded-md bs">
                        <DatePicker />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
                        <section className="md:mt-[50px] order-2 md:order-1">
                            <div className="bg-white rounded-md bs p-5 mb-5">
                                <h3 className="title">thương hiệu</h3>
                                <FormGroup>
                                    {/* <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Tất Cả"
                                /> */}
                                    <FormControlLabel control={<Checkbox />} label="BMW" />
                                    <FormControlLabel control={<Checkbox />} label="Lamborghini" />
                                    <FormControlLabel control={<Checkbox />} label="Mazda" />
                                    <FormControlLabel control={<Checkbox />} label="Toyota" />
                                    <FormControlLabel control={<Checkbox />} label="Suzuki" />
                                </FormGroup>
                            </div>
                            <div className="bg-white rounded-md bs p-5 mb-5">
                                <h3 className="title">chỗ ngồi</h3>
                                <FormGroup>
                                    {/* <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Tất Cả"
                                /> */}
                                    <FormControlLabel control={<Checkbox />} label="4 Chỗ" />
                                    <FormControlLabel control={<Checkbox />} label="7 Chỗ" />
                                    <FormControlLabel control={<Checkbox />} label="16 Chỗ" />
                                </FormGroup>
                            </div>
                            <div className="bg-white rounded-md bs p-5 mb-5">
                                <h3 className="title">phân khúc</h3>
                                <FormGroup>
                                    {/* <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Tất Cả"
                                /> */}
                                    <FormControlLabel control={<Checkbox />} label="A" />
                                    <FormControlLabel control={<Checkbox />} label="B" />
                                    <FormControlLabel control={<Checkbox />} label="C" />
                                    <FormControlLabel control={<Checkbox />} label="D" />
                                </FormGroup>
                            </div>
                            <div className="bg-white rounded-md bs p-5">
                                <h3 className="title">đời xe</h3>
                                <FormGroup>
                                    {/* <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Tất Cả"
                                /> */}
                                    <FormControlLabel control={<Checkbox />} label="2018" />
                                    <FormControlLabel control={<Checkbox />} label="2019" />
                                    <FormControlLabel control={<Checkbox />} label="2020" />
                                    <FormControlLabel control={<Checkbox />} label="2021" />
                                    <FormControlLabel control={<Checkbox />} label="2022" />
                                </FormGroup>
                            </div>
                        </section>
                        <section className="mt-[50px] col-span-3 order-1 md:order-2">
                            {listCar.map((car, i) => {
                                return (
                                    <div key={i} className="rounded-md p-5 mb-5 bs bg-white">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
                                            <div className="w-full h-auto">
                                                <img
                                                    src={car.thumbnail}
                                                    alt=""
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-[1.5rem] uppercase font-bold text-center md:text-left">
                                                    {car.name}
                                                </h3>
                                                <p>Đời: {car.life}</p>
                                                <p>Chỗ ngồi: {car.seat}</p>
                                                <p>Màu: {car.color}</p>
                                                <p>Class: {car.class}</p>
                                                <p className="mt-3 font-bold">
                                                    Giá Thuê:
                                                    {/* <CurrencyFormat
                                                        value={car.price}
                                                        displayType={"text"}
                                                        thousandSeparator={true}
                                                    /> */}
                                                    {car.price}
                                                    <span className="ml-3">đ/ngày</span>
                                                </p>
                                            </div>
                                            <div className="flex justify-between items-end md:flex-col">
                                                <p>
                                                    <Link
                                                        to="/"
                                                        className="text-main hover:opacity-90 text-[1.1rem] underline"
                                                    >
                                                        Thông tin chi tiết xe
                                                    </Link>
                                                </p>
                                                <p>
                                                    <Link
                                                        to="/tham-dinh"
                                                        className="btn-choose-car"
                                                    >
                                                        CHỌN XE
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </section>
                    </div>
                    <section className="mt-[50px]">
                        <h3 className="title">Thuê xe chất lượng cao và ưu đãi nhất</h3>
                        <div>
                            <div className="gird-layout scroll-custom">
                                <div className="scroll-snap-start">
                                    <div className="bg-white rounded-md">
                                        <img
                                            src="https://storage.googleapis.com/vex-config/cms-tool/post/images/159/img_card.png"
                                            alt=""
                                            className="w-full h-full object-cover rounded-t-md"
                                        />
                                        <h3 className="px-3 pt-2 text-[1rem] font-bold two-line h-[60px] md:h-[65px]">
                                            Dành cho KH mới - Giảm 25% khi đặt Dành cho KH mới -
                                            Giảm 25% khi đặt
                                        </h3>
                                    </div>
                                </div>
                                <div className="scroll-snap-start">
                                    <div className="bg-white rounded-md">
                                        <img
                                            src="https://storage.googleapis.com/vex-config/cms-tool/post/images/157/img_card.png"
                                            alt=""
                                            className="w-full h-full object-cover rounded-t-md"
                                        />
                                        <h3 className="px-3 pt-2 text-[1rem] font-bold two-line h-[60px] md:h-[65px]">
                                            Dành cho KH mới - Giảm 25% khi đặt
                                        </h3>
                                    </div>
                                </div>
                                <div className="scroll-snap-start">
                                    <div className="bg-white rounded-md">
                                        <img
                                            src="https://storage.googleapis.com/vex-config/cms-tool/post/images/123/img_card.png"
                                            alt=""
                                            className="w-full h-full object-cover rounded-t-md"
                                        />
                                        <h3 className="px-3 pt-2 text-[1rem] font-bold two-line h-[60px] md:h-[65px]">
                                            Dành cho KH mới - Giảm 25% khi đặt
                                        </h3>
                                    </div>
                                </div>
                                <div className="scroll-snap-start">
                                    <div className="bg-white rounded-md">
                                        <img
                                            src="https://storage.googleapis.com/vex-config/cms-tool/post/images/123/img_card.png"
                                            alt=""
                                            className="w-full h-full object-cover rounded-t-md"
                                        />
                                        <h3 className="px-3 pt-2 text-[1rem] font-bold two-line h-[60px] md:h-[65px]">
                                            Dành cho KH mới - Giảm 25% khi đặt
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Detail;
