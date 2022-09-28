import React from "react";
import Slider from "react-slick";
import "./slide.scss";

export default function SlideItemsFist() {
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
                        src="https://storage.googleapis.com/vex-config/cms-tool/destination/images/3/img_hero.png"
                        alt=""
                        className="rounded-t-lg w-[275px] h-[175px]"
                    />
                    <h3 className="text-center py-2 text-[1rem] font-bold bg-main text-white max-w-[275px] rounded-b-md">
                        Toyota
                    </h3>
                </div>
                <div className="pr-5">
                    <img
                        src="https://storage.googleapis.com/vex-config/cms-tool/destination/images/5/img_hero.png?v1"
                        alt=""
                        className="rounded-t-lg w-[275px] h-[175px]"
                    />
                    <h3 className="text-center py-2 text-[1rem] font-bold bg-main text-white max-w-[275px] rounded-b-md">
                        Hyundai
                    </h3>
                </div>
                <div className="pr-5">
                    <img
                        src="https://storage.googleapis.com/vex-config/cms-tool/destination/images/22/img_hero.png"
                        alt=""
                        className="rounded-t-lg w-[275px] h-[175px]"
                    />
                    <h3 className="text-center py-2 text-[1rem] font-bold bg-main text-white max-w-[275px] rounded-b-md">
                        Mazda
                    </h3>
                </div>
                <div className="pr-5">
                    <img
                        src="https://storage.googleapis.com/vex-config/cms-tool/destination/images/21/img_card.png"
                        alt=""
                        className="rounded-t-lg w-[275px] h-[175px]"
                    />
                    <h3 className="text-center py-2 text-[1rem] font-bold bg-main text-white max-w-[275px] rounded-b-md">
                        BMW
                    </h3>
                </div>
                <div className="pr-5">
                    <img
                        src="https://storage.googleapis.com/vex-config/cms-tool/destination/images/27/img_hero.png"
                        alt=""
                        className="rounded-t-lg w-[275px] h-[175px]"
                    />
                    <h3 className="text-center py-2 text-[1rem] font-bold bg-main text-white max-w-[275px] rounded-b-md">
                        Suzuki
                    </h3>
                </div>
                <div className="pr-5">
                    <img
                        src="https://storage.googleapis.com/vex-config/cms-tool/destination/images/20/img_card.png"
                        alt=""
                        className="rounded-t-lg w-[275px] h-[175px]"
                    />
                    <h3 className="text-center py-2 text-[1rem] font-bold bg-main text-white max-w-[275px] rounded-b-md">
                        Vinfast
                    </h3>
                </div>
            </Slider>
        </div>
    );
}
