import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import ListCar from "pages/listCar/ListCar";
import Assessment from "pages/assessment/Assessment";
import Contract from "pages/contract/Contract";

export default function Routers() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/danh-sach-xe" element={<ListCar />} />
                <Route path="/tham-dinh" element={<Assessment />} />
                <Route path="/hop-dong" element={<Contract />} />
            </Routes>
        </div>
    );
}

export const MenuRouters = [
    {
        display: "Trang chủ",
        path: "/",
    },
    {
        display: "Thuê xe 4 chỗ",
        path: "/thue-xe-4-cho",
    },
    {
        display: "Thuê xe 7 chỗ",
        path: "/thue-xe-7-cho",
    },
    {
        display: "Thuê xe 16 chỗ",
        path: "/thue-xe-16-cho",
    },
];
