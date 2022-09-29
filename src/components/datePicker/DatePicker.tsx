import React, { useState } from "react";
import { TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import moment, { Moment } from "moment";
import "./datePicker.scss";

function DatePicker() {
    const [value, setValue] = useState<Moment | null>(moment("2014-08-18T21:11:54"));

    const handleChange = (newValue: Moment | null) => {
        setValue(newValue);
    };
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 bg-white p-[20px] max-w-[750px] m-auto rounded-md ">
                <div className="lg:mr-3 mb-[30px] lg:mb-0">
                    <DateTimePicker
                        label="Ngày bắt đầu"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </div>
                <div className="lg:mr-3 mb-[30px] lg:mb-0">
                    <DateTimePicker
                        label="Ngày kết thúc"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </div>

                <div className="btn-book-car text-right">
                    <button>ĐẶT NGÀY</button>
                </div>
            </div>
        </div>
    );
}

export default DatePicker;
