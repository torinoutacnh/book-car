import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: "id", headerName: "STT", width: 50, sortable: false },
    { field: "nameCar", headerName: "Tên xe", width: 160, sortable: false },
    { field: "status", headerName: "Trạng thái", width: 140, sortable: false },
    { field: "sign", headerName: "Ký bản khai", width: 140, sortable: false },
    { field: "board", headerName: "Bản cứng", width: 100, sortable: false },
    { field: "date", headerName: "Ngày ký", width: 100, sortable: false },
    { field: "note", headerName: "Ghi chú", width: 330, sortable: false },
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
        note: "Đã nhận cọc, nhưng chưa ký tên Đã nhận cọc",
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

function ContractManagement() {
    return (
        <div className="form-page">
            <div className="contract-management">
                <div className="container">
                    <div className="bg-white bs p-5">
                        <h3 className="title">hợp đồng thuê xe</h3>
                        <div className="flex justify-start items-start flex-wrap gap-x-3 mb-3">
                            <p>Sắp xếp theo: </p>
                            <p>
                                Tất cả (<span className="text-main">9</span>)
                            </p>
                            <p>
                                Chưa nộp (<span className="text-main">1</span>)
                            </p>
                            <p>
                                Chờ duyệt (<span className="text-main">2</span>)
                            </p>
                            <p>
                                Từ chối duyệt (<span className="text-main">0</span>)
                            </p>
                            <p>
                                Đã duyệt (<span className="text-main">6</span>)
                            </p>
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
        </div>
    );
}

export default ContractManagement;
