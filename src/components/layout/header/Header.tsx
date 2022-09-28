import Login from "components/login/Login";
import Logout from "components/login/Logout";
import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import HeaderMobi from "./HeaderMobi";

function Header() {
    return (
        <header className="bg-white h-[80px] shadow-lg">
            <div className="header-desktop">
                <div className="container">
                    <div className="flex justify-between items-center py-5">
                        <Link to={"/"} className="text-2xl font-bold">
                            Logo
                        </Link>

                        <ul className="flex justify-between items-center leading-[40px]">
                            <li>
                                <Link
                                    to={"/"}
                                    className="text-[16px] text-[#333] font-medium hover:text-main"
                                >
                                    Thuê xe 4 chỗ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="text-[16px] text-[#333] ml-[30px] font-medium hover:text-main"
                                >
                                    Thuê xe 7 chỗ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="text-[16px] text-[#333] ml-[30px] font-medium hover:text-main"
                                >
                                    Thuê xe 16 chỗ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="text-[16px] ml-[30px] font-medium text-[#333] hover:text-main"
                                >
                                    Quản lý đơn hàng
                                </Link>
                            </li>
                            <li></li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="text-[16px] text-main font-medium ml-[30px] border-[1.8px] border-main px-[25px] py-[6px] rounded-[5px] hover:opacity-90"
                                >
                                    <i className="fa-solid fa-phone mr-3 text-[15px]"></i>
                                    <span>Hotline</span>
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    to={"/"}
                                    className="text-[16px] text-white ml-[30px] font-medium bg-main px-[25px] py-[9px] rounded-[5px] hover:opacity-90"
                                >
                                    <i className="fa-solid fa-user mr-3 text-[15px]"></i>
                                    <span>Đăng nhập</span>
                                </Link>
                            </li> */}
                            <li>
                                <Login />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-mobi">
                <HeaderMobi />
                <Link
                    to={"/"}
                    className="text-3xl font-bold text-right w-full block pr-[10px] leading-[7rem]"
                >
                    Logo
                </Link>
            </div>
        </header>
    );
}

export default Header;
