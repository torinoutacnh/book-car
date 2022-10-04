import React, { useState } from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import moment, { Moment } from "moment";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

function Assessment() {
    const [passportDate, setPassportDate] = useState<Moment | null>(moment());
    const [driverLicenseDate, setDriverLicenseDate] = useState<Moment | null>(moment());
    const [carPickUpTime, setCarPickUpTime] = useState<Moment | null>(moment());
    const [carReturnTime, setCarReturnTime] = useState<Moment | null>(moment());

    const handleChangePassportDate = (newValue: Moment | null) => {
        setPassportDate(newValue);
    };
    const handleChangeDriverLicenseDate = (newValue: Moment | null) => {
        setDriverLicenseDate(newValue);
    };
    const handleChangeCarPickUpTime = (newValue: Moment | null) => {
        setCarPickUpTime(newValue);
    };
    const handleChangeCarReturnTime = (newValue: Moment | null) => {
        setCarReturnTime(newValue);
    };

    return (
        <div className="form-page">
            <div className="container">
                <div className="bs bg-white p-5">
                    <h3 className="title text-center">bảng thẩm định khách hàng</h3>
                    <Box component="form" noValidate autoComplete="off">
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Họ tên khách hàng"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Số điện thoại"
                                variant="outlined"
                            />
                        </div>
                        <div className="mt-5">
                            <FormLabel id="demo-radio-buttons-group-label">
                                Nghề nghiệp hiện tại
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="1"
                                    control={<Radio />}
                                    label="Công chức/Nhân viên văn phòng"
                                />
                                <FormControlLabel
                                    value="2"
                                    control={<Radio />}
                                    label="Chủ doanh nghiệp/Tiểu thương"
                                />
                                <FormControlLabel
                                    value="3"
                                    control={<Radio />}
                                    label="Lao động tự do"
                                />
                                <FormControlLabel value="4" control={<Radio />} label="Mục khác" />
                            </RadioGroup>
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Chỗ ở hiện tại"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Địa chỉ thường trú trên CCCD/ Hộ khẩu"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Số CCCD/Hộ chiếu"
                                variant="outlined"
                            />
                            <DesktopDatePicker
                                label="Ngày cấp CCCD/Hộ chiếu"
                                inputFormat="DD/MM/YYYY"
                                value={passportDate}
                                onChange={handleChangePassportDate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Số GPLX (Chính chủ)"
                                variant="outlined"
                            />
                            <DesktopDatePicker
                                label="Ngày cấp GPLX"
                                inputFormat="DD/MM/YYYY"
                                value={driverLicenseDate}
                                onChange={handleChangeDriverLicenseDate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <DesktopDatePicker
                                label="Thời gian nhận xe"
                                inputFormat="DD/MM/YYYY"
                                value={carPickUpTime}
                                onChange={handleChangeCarPickUpTime}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <DesktopDatePicker
                                label="Thời gian trả xe"
                                inputFormat="DD/MM/YYYY"
                                value={carReturnTime}
                                onChange={handleChangeCarReturnTime}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    Mục đích thuê xe
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="1"
                                        control={<Radio />}
                                        label="[Khách địa phương] Đi về quê, thăm thân"
                                    />
                                    <FormControlLabel
                                        value="2"
                                        control={<Radio />}
                                        label="[Khách địa phương] Đi chơi du lịch"
                                    />
                                    <FormControlLabel
                                        value="3"
                                        control={<Radio />}
                                        label="[Khách địa phương] Đi tiếp khách/ ngoại giao"
                                    />
                                    <FormControlLabel
                                        value="4"
                                        control={<Radio />}
                                        label="[Khách địa phương] Chạy dịch vụ Grab/ Taxi"
                                    />
                                    <FormControlLabel
                                        value="5"
                                        control={<Radio />}
                                        label="[Khách du lịch] Thuê xe đi chơi, thăm thân"
                                    />
                                    <FormControlLabel
                                        value="6"
                                        control={<Radio />}
                                        label="[Khách du lịch] Thuê xe đi công tác"
                                    />
                                    <FormControlLabel
                                        value="7"
                                        control={<Radio />}
                                        label="Mục khác"
                                    />
                                </RadioGroup>
                            </div>
                            <div>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    Mạng xã hội sử dụng
                                </FormLabel>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="Zalo" />
                                    <FormControlLabel control={<Checkbox />} label="Facebook" />
                                    <FormControlLabel control={<Checkbox />} label="Linkedin" />
                                    <FormControlLabel control={<Checkbox />} label="Khác" />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField
                                id="outlined-basic"
                                label="Thông tin tài khoản mạng xã hội (Zalo/ Facebook/ Linkedin)"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Thông tin công ty đang làm việc"
                                variant="outlined"
                                placeholder="(Tên công ty, địa chỉ công ty, website cty nếu có )"
                            />
                        </div>
                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <div>
                                    <FormLabel id="demo-radio-buttons-group-label">
                                        Các loại giấy tờ cơ bản (bản mềm) đã cung cấp
                                    </FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="CMND/CCCD"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Giấy phép lái xe phù hợp"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Đăng ký xe máy đặt cọc (nếu đặt cọc bằng xe máy)"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Hộ chiếu (nếu không có CMND/CCCD hoặc có thêm để tăng uy tín)"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Đăng ký tạm trú (nếu không có hộ khẩu địa phương)"
                                        />
                                        <FormControlLabel control={<Checkbox />} label="Mục khác" />
                                    </FormGroup>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <FormLabel id="demo-radio-buttons-group-label">
                                        Giấy tờ và tài sản đặt cọc:
                                    </FormLabel>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} label="Hộ chiếu" />
                                        <FormControlLabel control={<Checkbox />} label="Hộ khẩu" />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="CMND/CCCD"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Xe máy & Giấy tờ xe máy"
                                        />
                                        <FormControlLabel control={<Checkbox />} label="Tiền cọc" />
                                        <FormControlLabel control={<Checkbox />} label="Mục khác" />
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div>
                                <FormLabel id="demo-radio-buttons-group-label">
                                    Các giấy tờ bố sung (phục vụ việc thẩm định nâng cao)
                                </FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Hợp đồng lao động/ Quyết định công tác/ Sao kê bảng lương/ Thẻ nhân viên"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Hợp đồng thuê nhà/ Thẻ cư dân/ Hoá đơn điện nước"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Đăng ký kết hôn"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Bản chụp thông tin tín dụng (CIC)"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Hợp đồng mua nhà / Sổ đỏ"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Ảnh chụp nơi làm việc, cửa hàng, nhà ở ..."
                                    />
                                    <FormControlLabel control={<Checkbox />} label="Mục khác" />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="text-right">
                            <Link to={"/hop-dong"} className="btn-choose-car">
                                HOÀN TẤT
                            </Link>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Assessment;
