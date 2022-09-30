import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "pages/home";
import ListCar from "pages/listCar/ListCar";
import Assessment from "pages/assessment/Assessment";
import Contract from "pages/contract/Contract";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/danh-sach-xe" element={<ListCar />} />
                <Route path="/tham-dinh" element={<Assessment />} />
                <Route path="/thong-tin-ca-nhan" element={<Contract />} />
            </Routes>
        </div>
    );
}

export default App;
