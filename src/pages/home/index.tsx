import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItems from "components/slide/slide1";
import SlideItemsFist from "components/slide/slide";
import "./index.scss";
import IconBus from "../../assets/icons/bus-car-icon.svg";
import IconTicket from "../../assets/icons/yellow-ticket-icon.svg";
import IconCheck from "../../assets/icons/completement-icon.svg";
import IconBonus from "../../assets/icons/coupon-icon.svg";
import DatePicker from "components/datePicker/DatePicker";

function Home() {
    return (
        <div className="home">
            <div className="banner">
                <div className="relative top-[20%] lg:top-[50%] mx-5">
                    <DatePicker />
                </div>
            </div>

            <div className="mt-[60px]">
                <div className="container">
                    <section className="mb-[50px]">
                        <h3 className="title pt-[20px]">các loại xe</h3>
                        <SlideItemsFist />
                    </section>
                    <section className="mb-[50px]">
                        <h3 className="title">Ưu đãi nổi bật</h3>
                        <SlideItems />
                    </section>
                    <section className="mb-[50px]">
                        <h3 className="title">Dịch vụ</h3>
                        <SlideItems />
                    </section>
                    <section className="mb-[50px]">
                        <h3 className="title">Dịch vụ nổi bậc</h3>
                        <div className="gird-layout">
                            <div className="scroll-snap-start">
                                <div className="bg-white rounded-md">
                                    <img
                                        src="https://storage.googleapis.com/vex-config/cms-tool/post/images/42/img_card.png"
                                        alt=""
                                        className="w-full h-full object-cover rounded-t-md"
                                    />
                                    <h3 className="px-3 pt-2 text-[1rem] font-bold two-line h-[60px] md:h-[65px]">
                                        Dành cho KH mới - Giảm 25% khi đặt Dành cho KH mới - Giảm
                                        25% khi đặt
                                    </h3>
                                </div>
                            </div>
                            <div className="scroll-snap-start">
                                <div className="bg-white rounded-md">
                                    <img
                                        src="https://storage.googleapis.com/vex-config/cms-tool/post/images/147/img_card.png"
                                        alt=""
                                        className="w-full h-full object-cover rounded-t-md"
                                    />
                                    <h3 className="px-3 pt-2 text-[1rem] font-bold two-line h-[60px] md:h-[65px]">
                                        Dành cho KH mới - Giảm 25% khi đặt
                                    </h3>
                                </div>
                            </div>
                            <div className="scroll-snap-start">
                                <div className="bg-white rounded-md">
                                    <img
                                        src="https://storage.googleapis.com/vex-config/cms-tool/post/images/150/img_card.png"
                                        alt=""
                                        className="w-full h-full object-cover rounded-t-md"
                                    />
                                    <h3 className="px-3 pt-2 text-[1rem] font-bold two-line h-[60px] md:h-[65px]">
                                        Dành cho KH mới - Giảm 25% khi đặt
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mb-[50px]">
                        <h3 className="title">Dành cho đối tác</h3>
                        <div className="gird-layout">
                            <div className="scroll-snap-start">
                                <div className="bg-white rounded-md">
                                    <img
                                        src="https://storage.googleapis.com/vex-config/cms-tool/post/images/159/img_card.png"
                                        alt=""
                                        className="w-full h-full object-cover rounded-t-md"
                                    />
                                    <h3 className="px-3 pt-2 text-[1rem] font-bold two-line h-[60px] md:h-[65px]">
                                        Dành cho KH mới - Giảm 25% khi đặt Dành cho KH mới - Giảm
                                        25% khi đặt
                                    </h3>
                                </div>
                            </div>
                            <div className="scroll-snap-start">
                                <div className="bg-white rounded-md">
                                    <img
                                        src="https://storage.googleapis.com/vex-config/cms-tool/post/images/157/img_card.png"
                                        alt=""
                                        className="w-full h-full object-cover rounded-t-md"
                                    />
                                    <h3 className="px-3 pt-2 text-[1rem] font-bold two-line h-[60px] md:h-[65px]">
                                        Dành cho KH mới - Giảm 25% khi đặt
                                    </h3>
                                </div>
                            </div>
                            <div className="scroll-snap-start">
                                <div className="bg-white rounded-md">
                                    <img
                                        src="https://storage.googleapis.com/vex-config/cms-tool/post/images/123/img_card.png"
                                        alt=""
                                        className="w-full h-full object-cover rounded-t-md"
                                    />
                                    <h3 className="px-3 pt-2 text-[1rem] font-bold two-line h-[60px] md:h-[65px]">
                                        Dành cho KH mới - Giảm 25% khi đặt
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mb-[50px]">
                        <h3 className="title">Nền tảng kết nối người dùng và nhà xe</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4 mt-[20px]">
                            <div className="flex justify-between items-start flex-nowrap mb-5 border-[1px] border-[#8d99ae] rounded-md p-4 bg-white">
                                <div>
                                    <img src={IconBus} alt="" className="w-[100px]" />
                                </div>
                                <div className="pl-5">
                                    <h3 className="text-[1.1rem] font-bold text-black capitalize mb-2">
                                        xe chất lượng cao
                                    </h3>
                                    <p className="text-[0.8rem] text-[#555]">
                                        5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa
                                        chọn.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-start flex-nowrap mb-5 border-[1px] border-[#8d99ae] rounded-md p-4 bg-white">
                                <div>
                                    <img src={IconTicket} alt="" className="w-[100px]" />
                                </div>
                                <div className="pl-5">
                                    <h3 className="text-[1.1rem] font-bold text-black capitalize mb-2">
                                        đặt xe dễ dàng
                                    </h3>
                                    <p className="text-[0.8rem] text-[#555]">
                                        5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa
                                        chọn.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-start flex-nowrap mb-5 border-[1px] border-[#8d99ae] rounded-md p-4 bg-white">
                                <div>
                                    <img src={IconCheck} alt="" className="w-[100px]" />
                                </div>
                                <div className="pl-5">
                                    <h3 className="text-[1.1rem] font-bold text-black capitalize mb-2">
                                        đảm bảo có xe
                                    </h3>
                                    <p className="text-[0.8rem] text-[#555]">
                                        5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa
                                        chọn.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-start flex-nowrap mb-5 border-[1px] border-[#8d99ae] rounded-md p-4 bg-white">
                                <div>
                                    <img src={IconBonus} alt="" className="w-[100px]" />
                                </div>
                                <div className="pl-5">
                                    <h3 className="text-[1.1rem] font-bold text-black capitalize mb-2">
                                        nhiều ưu đãi
                                    </h3>
                                    <p className="text-[0.8rem] text-[#444]">
                                        5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa
                                        chọn.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mb-[50px] pb-[20px]">
                        <h3 className="title">Bãi đổ xe</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <div className="relative after:content-[''] after:bg-rgbaBlack after:top-0 after:bottom-0 after:left-0 after:right-0 after:absolute">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Nh%C3%A0_ga_b%E1%BA%BFn_xe_mi%E1%BB%81n_%C4%90%C3%B4ng.JPG"
                                        alt=""
                                        className="w-full h-[200px] object-cover"
                                    />
                                    <h3 className="text-white text-[1.3rem] absolute z-50 bottom-0 left-0 right-0 text-center">
                                        Bến xe Miền Đông
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <div className="relative after:content-[''] after:bg-rgbaBlack after:top-0 after:bottom-0 after:left-0 after:right-0 after:absolute">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Nh%C3%A0_ga_b%E1%BA%BFn_xe_mi%E1%BB%81n_%C4%90%C3%B4ng.JPG"
                                        alt=""
                                        className="w-full h-[200px] object-cover"
                                    />
                                    <h3 className="text-white text-[1.3rem] absolute z-50 bottom-0 left-0 right-0 text-center">
                                        Bến xe Miền Đông
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <div className="relative after:content-[''] after:bg-rgbaBlack after:top-0 after:bottom-0 after:left-0 after:right-0 after:absolute">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Nh%C3%A0_ga_b%E1%BA%BFn_xe_mi%E1%BB%81n_%C4%90%C3%B4ng.JPG"
                                        alt=""
                                        className="w-full h-[200px] object-cover"
                                    />
                                    <h3 className="text-white text-[1.3rem] absolute z-50 bottom-0 left-0 right-0 text-center">
                                        Bến xe Miền Đông
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <div className="relative after:content-[''] after:bg-rgbaBlack after:top-0 after:bottom-0 after:left-0 after:right-0 after:absolute">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Nh%C3%A0_ga_b%E1%BA%BFn_xe_mi%E1%BB%81n_%C4%90%C3%B4ng.JPG"
                                        alt=""
                                        className="w-full h-[200px] object-cover"
                                    />
                                    <h3 className="text-white text-[1.3rem] absolute z-50 bottom-0 left-0 right-0 text-center">
                                        Bến xe Miền Đông
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Home;
