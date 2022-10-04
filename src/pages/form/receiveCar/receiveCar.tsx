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

function ReceiveCar() {
    const [representative, setRepresentative] = React.useState("");
    const [returnTime, setReturnTime] = useState<Moment | null>(moment());

    const handleChangeRepresentative = (event: SelectChangeEvent) => {
        setRepresentative(event.target.value as string);
    };

    const handleChangeReturnTime = (newValue: Moment | null) => {
        setReturnTime(newValue);
    };

    return (
        <div className="form-page">
            <div className="container">
                <div className="bs bg-white p-5">
                    <h3 className="title text-center">Hợp đồng nhận xe</h3>
                    <Box component="form" noValidate autoComplete="off">
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Người nhận xe</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={representative}
                                    label="Người nhận xe"
                                    onChange={handleChangeRepresentative}
                                >
                                    <MenuItem value={10}>Hoàng Hồng Minh</MenuItem>
                                    <MenuItem value={20}>Lê Nam Hưng</MenuItem>
                                    <MenuItem value={30}>Trần Minh Khoa</MenuItem>
                                </Select>
                            </FormControl>
                            <DateTimePicker
                                label="Thời gian nhận xe thực tế"
                                value={returnTime}
                                onChange={handleChangeReturnTime}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Số công tơ mét (Km)"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Mức nhiên liệu"
                                variant="outlined"
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Số tiền còn lại trong tài khoản ETC"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Tình trạng nhận xe (ngoại thất, nội thất, giấy tờ...)"
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

export default ReceiveCar;
