import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DateTimePicker } from "@mui/x-date-pickers";
import moment, { Moment } from "moment";
import { Link } from "react-router-dom";

function Contract(props: any) {
    const [representative, setRepresentative] = React.useState("");
    const [pickupTime, setPickupTime] = useState<Moment | null>(moment());
    const [returnTime, setReturnTime] = useState<Moment | null>(moment());

    const handleChangeRepresentative = (event: SelectChangeEvent) => {
        setRepresentative(event.target.value as string);
    };

    const handleChangePickupTime = (newValue: Moment | null) => {
        setPickupTime(newValue);
    };
    const handleChangeReturnTime = (newValue: Moment | null) => {
        setReturnTime(newValue);
    };

    return (
        <div className="form-page">
            <div className="container">
                <div className="bs bg-white p-5">
                    <h3 className="title text-center">Hợp đồng</h3>
                    <Box component="form" noValidate autoComplete="off">
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Số ID hợp đồng"
                                variant="outlined"
                            />
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Người đại diện làm hợp đồng
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={representative}
                                    label="Người đại diện làm hợp đồng"
                                    onChange={handleChangeRepresentative}
                                >
                                    <MenuItem value={10}>Hoàng Hồng Minh</MenuItem>
                                    <MenuItem value={20}>Lê Nam Hưng</MenuItem>
                                    <MenuItem value={30}>Trần Minh Khoa</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Số điện thoại"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Số CCCD người làm hợp đồng"
                                variant="outlined"
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Biển số xe cho thuê
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={representative}
                                    label="Biển số xe cho thuê"
                                    onChange={handleChangeRepresentative}
                                >
                                    <MenuItem value={10}>Hoàng Hồng Minh</MenuItem>
                                    <MenuItem value={20}>Lê Nam Hưng</MenuItem>
                                    <MenuItem value={30}>Trần Minh Khoa</MenuItem>
                                </Select>
                            </FormControl>
                            <DateTimePicker
                                label="Ngày bắt đầu"
                                value={pickupTime}
                                onChange={handleChangePickupTime}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <DateTimePicker
                                label="Ngày kết thúc"
                                value={returnTime}
                                onChange={handleChangeReturnTime}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Đơn cho thuê xe một ngày"
                                variant="outlined"
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Số Km tối đa một ngày"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Phí vượt trên 1km"
                                variant="outlined"
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Phí giao nhận xe"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Phí khác (rửa xe,  ETC...)"
                                variant="outlined"
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Khuyến mãi (%  nếu có)"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Khuyến mãi (số tiền nếu có)"
                                variant="outlined"
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Tiền VAT - Nếu khách yêu cầu xuất VAT"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Số tiền đã đặt cọc giữ xe:"
                                variant="outlined"
                            />
                        </div>
                        <div className="text-right mt-5">
                            <Link to={"/giao-xe"} className="btn-choose-car">
                                HOÀN TẤT
                            </Link>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Contract;
