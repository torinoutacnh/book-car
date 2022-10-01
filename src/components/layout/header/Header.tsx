import React from "react";
import Login from "components/login/Login";
import Logout from "components/login/Logout";
import { Link } from "react-router-dom";
import "./header.scss";
import HeaderMobi from "./HeaderMobi";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

function Header() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <header className="bg-white h-[80px] shadow-lg">
            <div className="header-desktop">
                <div className="container">
                    <div className="flex justify-between items-center py-5">
                        <Link to={"/"} className="text-2xl font-bold">
                            Logo
                        </Link>

                        <ul className="flex justify-between items-center leading-[40px]">
                            <li>
                                <Link
                                    to={"/"}
                                    className="text-[16px] text-[#333] font-medium hover:text-main"
                                >
                                    Thuê Xe 4 cCỗ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="text-[16px] text-[#333] ml-[30px] font-medium hover:text-main"
                                >
                                    Thuê Xe 7 cCỗ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="text-[16px] text-[#333] ml-[30px] font-medium hover:text-main"
                                >
                                    Thuê Xe 16 Chỗ
                                </Link>
                            </li>
                            <li>
                                <Stack direction="row" spacing={2}>
                                    <div className="w-[90px] pl-3">
                                        <Button
                                            ref={anchorRef}
                                            id="composition-button"
                                            aria-controls={open ? "composition-menu" : undefined}
                                            aria-expanded={open ? "true" : undefined}
                                            aria-haspopup="true"
                                            onClick={handleToggle}
                                        >
                                            <span className="text-[16px] text-[#333] font-medium hover:text-main capitalize">
                                                Quản lý <i className="fa-solid fa-caret-down"></i>
                                            </span>
                                        </Button>
                                        <Popper
                                            open={open}
                                            anchorEl={anchorRef.current}
                                            role={undefined}
                                            placement="bottom-start"
                                            transition
                                            disablePortal
                                        >
                                            {({ TransitionProps, placement }) => (
                                                <Grow
                                                    {...TransitionProps}
                                                    style={{
                                                        transformOrigin:
                                                            placement === "bottom-start"
                                                                ? "left top"
                                                                : "left bottom",
                                                    }}
                                                >
                                                    <Paper>
                                                        <ClickAwayListener
                                                            onClickAway={handleClose}
                                                        >
                                                            <MenuList
                                                                autoFocusItem={open}
                                                                id="composition-menu"
                                                                aria-labelledby="composition-button"
                                                                onKeyDown={handleListKeyDown}
                                                            >
                                                                <MenuItem onClick={handleClose}>
                                                                    Quản lý đơn hàng
                                                                </MenuItem>
                                                                <MenuItem onClick={handleClose}>
                                                                    Quản lý hợp đồng
                                                                </MenuItem>
                                                                <hr />
                                                                <MenuItem onClick={handleClose}>
                                                                    Đăng xuất
                                                                </MenuItem>
                                                            </MenuList>
                                                        </ClickAwayListener>
                                                    </Paper>
                                                </Grow>
                                            )}
                                        </Popper>
                                    </div>
                                </Stack>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    className="text-[16px] text-main font-medium ml-[30px] border-[1.8px] border-main px-[25px] py-[6px] rounded-[5px] hover:opacity-90"
                                >
                                    <i className="fa-solid fa-phone mr-3 text-[15px]"></i>
                                    <span>Hotline</span>
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    to={"/"}
                                    className="text-[16px] text-white ml-[30px] font-medium bg-main px-[25px] py-[9px] rounded-[5px] hover:opacity-90"
                                >
                                    <i className="fa-solid fa-user mr-3 text-[15px]"></i>
                                    <span>Đăng nhập</span>
                                </Link>
                            </li> */}
                            <li>
                                <Login />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-mobi">
                <HeaderMobi />
                <Link
                    to={"/"}
                    className="text-3xl font-bold text-right w-full block pr-[10px] leading-[7rem]"
                >
                    Logo
                </Link>
            </div>
        </header>
    );
}

export default Header;
