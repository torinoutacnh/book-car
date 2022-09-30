import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: "id", headerName: "STT", width: 70, sortable: false },
    { field: "nameCar", headerName: "Tên xe", width: 160, sortable: false },
    { field: "status", headerName: "Trạng thái", width: 160, sortable: false },
    { field: "sign", headerName: "Ký bản khai", width: 160, sortable: false },
    { field: "board", headerName: "Bản cứng", width: 160, sortable: false },
    { field: "date", headerName: "Ngày ký", width: 160, sortable: false },
    { field: "note", headerName: "Ghi chú", width: 160, sortable: false },
];

const rows = [
    {
        id: 1,
        nameCar: "BMW",
        status: "Chờ xét duyệt",
        sign: "Đã ký tên",
        board: "...",
        date: "30/09/2022",
        note: "",
    },
    {
        id: 2,
        nameCar: "Mazda",
        status: "Chờ xét duyệt",
        sign: "Chưa ký tên",
        board: "...",
        date: "30/09/2022",
        note: "Đã nhận cọc, nhưng chưa ký tên",
    },
    {
        id: 3,
        nameCar: "Toyota",
        status: "Chờ xét duyệt",
        sign: "Chưa ký tên",
        board: "...",
        date: "30/09/2022",
        note: "",
    },
    {
        id: 4,
        nameCar: "Suzuki",
        status: "Chờ xét duyệt",
        sign: "Đã ký tên",
        board: "...",
        date: "30/09/2022",
        note: "",
    },
    {
        id: 5,
        nameCar: "Honda",
        status: "Chờ xét duyệt",
        sign: "Đã ký tên",
        board: "...",
        date: "30/09/2022",
        note: "",
    },
    {
        id: 6,
        nameCar: "Huyundai",
        status: "Chờ xét duyệt",
        sign: "Đã ký tên",
        board: "...",
        date: "30/09/2022",
        note: "",
    },
];

function Contract() {
    return (
        <div className="contract">
            <div className="container">
                <div className="bg-white mt-[50px] p-5">
                    <h3 className="title">hợp đồng thuê xe</h3>
                    <div className="flex justify-start items-start flex-wrap gap-x-3">
                        <p>Sắp xếp theo: </p>
                        <p>Tất cả (1)</p>
                        <p>Chưa nộp (1)</p>
                        <p>Chờ duyệt (1)</p>
                        <p>Từ chối duyệt (1)</p>
                        <p>Đã duyệt (1)</p>
                    </div>
                    <div style={{ height: 400, width: "100%" }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contract;
