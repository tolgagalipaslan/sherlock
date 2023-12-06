import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Discover = () => {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          720: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide p-2">
            <div className="aspect-square  rounded-md flex flex-col justify-center gap-5 items-center text-center py-2 relative px-10 bg-mainLightGreen  ">
              <div className="aspect-square relative h-24">
                <Image
                  alt="s"
                  fill
                  src={"/assets/money.png"}
                  className="object-cover"
                />
              </div>
              <div className="text-lg text-black font-bold">Real Estae</div>
              <div className="text-sm text-black/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, reiciendis!
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide p-2">
            <div className="aspect-square  rounded-md flex flex-col justify-center gap-5 items-center text-center py-2 relative px-10 bg-[#cedefb]  ">
              <div className="aspect-square relative h-24">
                <Image
                  alt="s"
                  fill
                  src={"/assets/house.png"}
                  className="object-cover"
                />
              </div>
              <div className="text-lg text-black font-bold">Houses</div>
              <div className="text-sm text-black/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, reiciendis!
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide p-2">
            <div className="aspect-square  rounded-md flex flex-col justify-center gap-5 items-center text-center py-2 relative px-10 bg-[#fcecbe] ">
              <div className="aspect-square relative h-24">
                <Image
                  alt="s"
                  fill
                  src={"/assets/cart.png"}
                  className="object-cover"
                />
              </div>
              <div className="text-lg text-black font-bold">Grocery</div>
              <div className="text-sm text-black/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, reiciendis!
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide p-2">
            <div className="aspect-square  rounded-md flex flex-col justify-center gap-5 items-center text-center py-2 relative px-10 bg-[#fcdad7]  ">
              <div className="aspect-square relative h-24">
                <Image
                  alt="s"
                  fill
                  src={"/assets/kargo.png"}
                  className="object-cover"
                />
              </div>
              <div className="text-lg text-black font-bold ">
                Fast Transport
              </div>
              <div className="text-sm text-black/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, reiciendis!
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide p-2">
            <div className="aspect-square  rounded-md flex flex-col justify-center gap-5 items-center text-center py-2 relative px-10 bg-mainLightGreen  ">
              <div className="aspect-square relative h-24">
                <Image alt="s" fill src={"/assets/pharmacy.png"} />
              </div>
              <div className="text-lg text-black font-bold">Pharmacy</div>
              <div className="text-sm text-black/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, reiciendis!
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide p-2">
            <div className="aspect-square  rounded-md flex flex-col justify-center gap-5 items-center text-center py-2 relative px-10 bg-[#cedefb]  ">
              <div className="aspect-square relative h-24">
                <Image
                  alt="s"
                  fill
                  src={"/assets/house.png"}
                  className="object-cover"
                />
              </div>
              <div className="text-lg text-black font-bold">Houses</div>
              <div className="text-sm text-black/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, reiciendis!
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide p-2">
            <div className="aspect-square  rounded-md flex flex-col justify-center gap-5 items-center text-center py-2 relative px-10 bg-[#fcecbe] ">
              <div className="aspect-square relative h-24">
                <Image
                  alt="s"
                  fill
                  src={"/assets/cart.png"}
                  className="object-cover"
                />
              </div>
              <div className="text-lg text-black font-bold">Grocery</div>
              <div className="text-sm text-black/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, reiciendis!
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide p-2">
            <div className="aspect-square  rounded-md flex flex-col justify-center gap-5 items-center text-center py-2 relative px-10 bg-[#fcdad7]  ">
              <div className="aspect-square relative h-24">
                <Image
                  alt="s"
                  fill
                  src={"/assets/kargo.png"}
                  className="object-cover"
                />
              </div>
              <div className="text-lg text-black font-bold ">
                Fast Transport
              </div>
              <div className="text-sm text-black/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, reiciendis!
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Discover;
