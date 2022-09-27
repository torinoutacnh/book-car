import React from "react";
import Slider from "react-slick";
import "./slide.scss";

export default function SlideItems() {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            <Slider {...settings}>
                <div className="pr-5">
                    <img
                        src="https://storage.googleapis.com/vex-config/cms-tool/post/images/163/img_card.png"
                        alt=""
                        className="rounded-t-lg w-[275px]"
                    />
                    <h3 className="px-3 pt-2 two-line text-[1rem] font-bold bg-white h-[60px] max-w-[275px] rounded-b-md">
                        Ưu đãi các tuyến đường HOT lên đến 50% Ưu đãi các tuyến đường HOT lên đến
                        50%
                    </h3>
                </div>
                <div className="pr-5">
                    <img
                        src="https://storage.googleapis.com/vex-config/cms-tool/post/images/161/img_card.png"
                        alt=""
                        className="rounded-t-lg w-[275px]"
                    />
                    <h3 className="px-3 pt-2 two-line text-[1rem] font-bold bg-white h-[60px] max-w-[275px] rounded-b-md">
                        Tổng hợp chương trình khuyến mãi trong tháng
                    </h3>
                </div>
                <div className="pr-5">
                    <img
                        src="https://storage.googleapis.com/vex-config/cms-tool/post/images/137/img_card.png"
                        alt=""
                        className="rounded-t-lg w-[275px]"
                    />
                    <h3 className="px-3 pt-2 two-line text-[1rem] font-bold bg-white h-[60px] max-w-[275px] rounded-b-md">
                        Chuyến xe tựu trường - 6000 vé xe miễn phí tặng sinh viên
                    </h3>
                </div>
                <div className="pr-5">
                    <img
                        src="https://storage.googleapis.com/vex-config/cms-tool/post/images/168/img_card.png"
                        alt=""
                        className="rounded-t-lg w-[275px]"
                    />
                    <h3 className="px-3 pt-2 two-line text-[1rem] font-bold bg-white h-[60px] max-w-[275px] rounded-b-md">
                        Ưu đãi bất ngờ khi đặt xe
                    </h3>
                </div>
                <div className="pr-5">
                    <img
                        src="https://storage.googleapis.com/vex-config/cms-tool/post/images/152/img_card.png"
                        alt=""
                        className="rounded-t-lg w-[275px]"
                    />
                    <h3 className="px-3 pt-2 two-line text-[1rem] font-bold bg-white h-[60px] max-w-[275px] rounded-b-md">
                        Ưu đãi bất ngờ khi đặt xe
                    </h3>
                </div>
                <div className="pr-5">
                    <img
                        src="https://storage.googleapis.com/vex-config/cms-tool/post/images/152/img_card.png"
                        alt=""
                        className="rounded-t-lg w-[275px]"
                    />
                    <h3 className="px-3 pt-2 two-line text-[1rem] font-bold bg-white h-[60px] max-w-[275px] rounded-b-md">
                        Dành cho KH mới - Giảm 25% khi đặt
                    </h3>
                </div>
            </Slider>
        </div>
    );
}
