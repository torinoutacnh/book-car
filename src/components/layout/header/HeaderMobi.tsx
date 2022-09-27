import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

type Anchor = "top" | "left" | "bottom" | "right";

export default function HeaderMobi() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 280 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {[
                    "Trang Chủ",
                    "Đăng Nhập / Đăng Ký",
                    "Quản Lý Xe",
                    "Thuê Xe 4 Chỗ",
                    "Thuê Xe 7 Chỗ",
                    "Thuê Xe 16 Chỗ",
                ].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 ? (
                                    <i className="fa-sharp fa-solid fa-house text-[15px] text-main"></i>
                                ) : (
                                    ""
                                )}
                                {index === 1 ? (
                                    <i className="fa-solid fa-user text-[15px] text-main"></i>
                                ) : (
                                    ""
                                )}
                                {index === 2 ? (
                                    <i className="fa-solid fa-list-check text-[15px] text-main"></i>
                                ) : (
                                    ""
                                )}
                                {index === 3 ? (
                                    <i className="fa-sharp fa-solid fa-car text-[15px] text-main"></i>
                                ) : (
                                    ""
                                )}
                                {index === 4 ? (
                                    <i className="fa-sharp fa-solid fa-car text-[15px] text-main"></i>
                                ) : (
                                    ""
                                )}
                                {index === 5 ? (
                                    <i className="fa-sharp fa-solid fa-car text-[15px] text-main"></i>
                                ) : (
                                    ""
                                )}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {[
                    "Chính Sách Bảo Mật",
                    "Chính Sách Thanh Toán",
                    "Câu Hỏi Thường Gặp",
                    "Hỗ Trợ",
                ].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 ? (
                                    <i className="fa-solid fa-lock text-[15px] text-main"></i>
                                ) : (
                                    ""
                                )}
                                {index === 1 ? (
                                    <i className="fa-sharp fa-solid fa-credit-card text-[15px] text-main"></i>
                                ) : (
                                    ""
                                )}
                                {index === 2 ? (
                                    <i className="fa-solid fa-question text-[15px] text-main"></i>
                                ) : (
                                    ""
                                )}
                                {index === 3 ? (
                                    <i className="fa-solid fa-headset text-[15px] text-main"></i>
                                ) : (
                                    ""
                                )}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className="info-mobi">
            {(["left"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
