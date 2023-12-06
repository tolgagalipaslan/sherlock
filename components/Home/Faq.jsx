import Image from "next/image";
import React from "react";
import FancyLine from "../Extension/FancyLine";
import { Collapse } from "antd";
const text = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo officia blanditiis aut, quisquam, laudantium natus quos voluptas debitis sequi, delectus ad excepturi non quas voluptate a rem alias amet deleniti? 
`;
const items = [
  {
    key: "1",
    label: (
      <h1 className="text-lg font-bold italic">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        odio provident alias!
      </h1>
    ),
    children: <p className="text-sm text-black/60">{text}</p>,
  },
  {
    key: "2",
    label: (
      <h1 className="text-lg font-bold italic">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        odio provident alias! Lorem, ipsum dolor.
      </h1>
    ),
    children: <p className="text-sm text-black/60">{text}</p>,
  },
  {
    key: "3",
    label: (
      <h1 className="text-lg font-bold italic">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
    ),
    children: <p className="text-sm text-black/60">{text}</p>,
  },
  {
    key: "4",
    label: (
      <h1 className="text-lg font-bold italic">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        odio provident alias! Lorem ipsum dolor sit amet.
      </h1>
    ),
    children: <p className="text-sm text-black/60">{text}</p>,
  },
];
const Faq = () => {
  return (
    <div className=" container flex flex-col text-center items-center  mt-20 gap-5">
      <div className="relative px-2 py-2 ">
        <h1 className="font-bold text-2xl flex items-center gap-1  ">
          <div className="relative aspect-square h-5">
            <Image fill alt src={"/assets/trophy.png"} />
          </div>
          FAQ{" "}
        </h1>
        <FancyLine />
      </div>
      <h5 className="text-center text-sm max-w-[700px] text-black/50">
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cumque
        distinctio impedit numquam itaque sit?Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Veniam, similique.
      </h5>
      <div className="w-full ">
        <Collapse
          size="large"
          items={items}
          className="w-full bg-white text-start border mt-10 mb-20 "
        />
      </div>
    </div>
  );
};

export default Faq;
