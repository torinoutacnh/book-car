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

function VehicleHanding(props: any) {
    const [representative, setRepresentative] = React.useState("");
    const [pickupTime, setPickupTime] = useState<Moment | null>(moment());
    const [returnTime, setReturnTime] = useState<Moment | null>(moment());

    const handleChangeRepresentative = (event: SelectChangeEvent) => {
        setRepresentative(event.target.value as string);
    };

    const handleChangePickupTime = (newValue: Moment | null) => {
        setPickupTime(newValue);
    };

    return (
        <div className="form-page">
            <div className="container">
                <div className="bs bg-white p-5">
                    <h3 className="title text-center">Hợp đồng giao xe</h3>
                    <Box component="form" noValidate autoComplete="off">
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Số công tơ mét (Km)"
                                variant="outlined"
                            />
                            <DateTimePicker
                                label="Thời gian giao xe thực tế"
                                value={pickupTime}
                                onChange={handleChangePickupTime}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Mức nhiên liệu"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Số tiền còn lại trong tài khoản ETC"
                                variant="outlined"
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Người giao xe</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={representative}
                                    label="Người giao xe"
                                    onChange={handleChangeRepresentative}
                                >
                                    <MenuItem value={10}>Hoàng Hồng Minh</MenuItem>
                                    <MenuItem value={20}>Lê Nam Hưng</MenuItem>
                                    <MenuItem value={30}>Trần Minh Khoa</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                id="outlined-basic"
                                label="Số điện thoại người giao"
                                variant="outlined"
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Tình trạng xe giao (ngoại thất, nội thất, giấy tờ...)"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Giấy tờ cọc lại"
                                variant="outlined"
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Tài sản cọc"
                                variant="outlined"
                                placeholder="Nếu cọc bằng tiền thì ghi rõ số tiền, nếu cọc bằng xe máy thì ghi thông tin xe máy"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Thông tin tài sản cọc ( nếu có - bao gồm Nhãn hiệu, BKS xe) "
                                variant="outlined"
                            />
                        </div>
                        <div className="text-right mt-5">
                            <Link to={"/nhan-xe"} className="btn-choose-car">
                                HOÀN TẤT
                            </Link>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default VehicleHanding;
