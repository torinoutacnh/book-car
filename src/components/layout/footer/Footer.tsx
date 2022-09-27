import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-white pt-[50px] pb-[30px]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-[20px]">
                    <div>
                        <h1 className="text-main text-[2.5rem] mb-5">Về chúng tôi</h1>
                        <ul className="leading-[3rem]">
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    Giới thiệu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    Phầm mềm đại lý
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    Tuyển dụng
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    Tin tức
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-main text-[2.5rem] mb-5">Hỗ trợ</h1>
                        <ul className="leading-[3rem]">
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    Hướng dẫn thanh toán
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    Quy chế
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    Chính sách bảo mật thông tin
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    Chính sách bảo mật thanh toán
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    Chính sách và quy trình giải quyết tranh chấp, khiếu nại
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    Câu hỏi thường gặp
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    Tra cứu đơn hàng
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-main text-[2.5rem] mb-5">Chứng nhận</h1>
                        <ul className="leading-[3rem]">
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    <img
                                        src="https://storage.googleapis.com/fe-production/images/Home/certificate0.png"
                                        alt=""
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    <img
                                        src="https://storage.googleapis.com/fe-production/images/Home/certificate1.png"
                                        alt=""
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    <img
                                        src="https://storage.googleapis.com/fe-production/images/dangkybocongthuong.png"
                                        alt=""
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="cursor-pointer text-[1.8rem] font-semibold text-black hover:text-main"
                                >
                                    <img
                                        src="https://storage.googleapis.com/fe-production/images/dangkybocongthuong.png"
                                        alt=""
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-main text-[2.5rem] mb-5">Ứng dụng</h1>
                        <ul className="leading-[3rem]">
                            <li className="mb-3">
                                <Link to={"/"}>
                                    <img
                                        src="https://storage.googleapis.com/fe-production/images/landingpagetet2018/AP-icon.png?v=2"
                                        alt=""
                                        className="max-w-[200px]"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to={"/"}>
                                    <img
                                        src="https://storage.googleapis.com/fe-production/images/landingpagetet2018/GP-icon.png?v=2"
                                        alt=""
                                        className="max-w-[200px]"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />

            <div className="container">
                <div className="m-auto text-center">
                    <h2 className="text-[2.4rem] font-bold mt-[20px] mb-[10px]">
                        Công ty TNHH Thương Mại Dịch Vụ Cho Thuê Xe
                    </h2>
                    <p className="text-[1.8rem] text-#999">
                        Địa chỉ đăng ký kinh doanh: 8C Chữ Đồng Tử, Phường 7, Quận Tân Bình, Thành
                        Phố Hồ Chí Minh, Việt Nam
                    </p>
                    <p className="text-[1.8rem] text-#999">
                        Địa chỉ: Lầu 8 Tòa nhà CirCO, 222 Điện Biên Phủ, Quận 3, TP. Hồ Chí Minh,
                        Việt Nam
                    </p>
                    <p className="text-[1.8rem] text-#999">Bản quyền © 2020 thuộc về chúng tôi</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
