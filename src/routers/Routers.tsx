import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import ListCar from "pages/listCar/ListCar";
import ContractManagement from "pages/contractManagement/ContractManagement";
import Assessment from "pages/form/assessment/Assessment";
import Contract from "pages/form/contract/Contract";
import VehicleHanding from "pages/form/vehicleHanding/VehicleHanding";
import ReceiveCar from "pages/form/receiveCar/receiveCar";

export default function Routers() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/danh-sach-xe" element={<ListCar />} />
                <Route path="/tham-dinh" element={<Assessment />} />
                <Route path="/quan-ly-don-hang" element={<ContractManagement />} />
                <Route path="/quan-ly-hop-dong" element={<ContractManagement />} />
                <Route path="/hop-dong" element={<Contract />} />
                <Route path="/giao-xe" element={<VehicleHanding />} />
                <Route path="/nhan-xe" element={<ReceiveCar />} />
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
        path: "/danh-sach-xe",
    },
    {
        display: "Thuê xe 7 chỗ",
        path: "/danh-sach-xe",
    },
    {
        display: "Thuê xe 16 chỗ",
        path: "/danh-sach-xe",
    },
];
