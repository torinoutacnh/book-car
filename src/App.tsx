import ListCar from "pages/listCar/ListCar";
import Home from "pages/home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Assessment from "pages/assessment/Assessment";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/danh-sach-xe" element={<ListCar />} />
                <Route path="/tham-dinh" element={<Assessment />} />
            </Routes>
        </div>
    );
}

export default App;
