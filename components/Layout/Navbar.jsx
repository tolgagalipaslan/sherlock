import React, { useEffect, useState } from "react";
import { FaFlag } from "react-icons/fa";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { TiVendorAndroid } from "react-icons/ti";
import { FaApple } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Drawer, Dropdown, Space, message } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import { CiLogout } from "react-icons/ci";
import { AiFillProfile } from "react-icons/ai";
const Navbar = () => {
  const { width } = useWindowSize();
  const isSmallScreen = width <= 767;
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(false);
  const [validLocation, setValidLocation] = useState(false);
  const [logOut, setLogOut] = useState(false);
  const [sessionData, setSessionData] = useState();
  const router = useRouter();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const drawerStyles = {
    mask: {
      backdropFilter: "blur(10px)",
    },
    header: {
      fontSize: `70px`,
    },
    content: {
      boxShadow: "-10px 0 10px #666",
    },
    body: {
      padding: "0",
    },
  };
  useEffect(() => {
    if (localStorage.getItem("session")) {
      setSession(true);
      setSessionData(JSON.parse(localStorage.getItem("session")));
    }
    if (
      router.pathname.startsWith("/profile") ||
      router.pathname.startsWith("/login") ||
      router.pathname.startsWith("/register")
    ) {
      setValidLocation(true);
    } else {
      setValidLocation(false);
    }
  }, [router.pathname]);
  const onClick = ({ key }) => {
    if (key === `3`) {
      localStorage.removeItem("session");
      setSession(false);
      setSessionData(null);
      router.push("/");
      onClose();
    }
    if (key === `1`) {
      router.push(`/profile/${sessionData.id}`);
      onClose();
    }
  };
  const items = [
    {
      label: (
        <div className="flex text-sm  font-bold items-center justify-start gap-2 ">
          <AiFillProfile /> Profile
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="flex text-sm  font-bold items-center justify-start gap-2 ">
          <IoSettingsSharp /> Settings
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className="flex text-sm  font-bold items-center justify-start gap-2 underline ">
          <CiLogout /> Log Out
        </div>
      ),
      key: "3",
    },
  ];
  return (
    <div>
      {isSmallScreen ? (
        <div className="">
          <div className="container  flex justify-between items-center  ">
            <Link
              href={`/`}
              className="flex items-center justify-between gap-2"
            >
              <div className="relative    w-[70px] h-[70px] px-0">
                <Image
                  alt=""
                  fill
                  src={"/assets/logo.png"}
                  className="object-cover  "
                />
              </div>{" "}
              <div className="font-bold text-2xl font-mono">
                Sher<span className="text-green-500">Lock </span>
              </div>
            </Link>
            {validLocation ? null : (
              <div className="flex justify-between">
                <div
                  className="py-3 px-3  rounded-md text-black text-2xl"
                  onClick={showDrawer}
                >
                  <GiHamburgerMenu />
                </div>
              </div>
            )}
            {validLocation ? null : (
              <Drawer
                title={
                  <div className=" text-xl text-center mr-4">Sherlock</div>
                }
                placement="right"
                onClose={onClose}
                open={open}
                styles={drawerStyles}
              >
                <div className="flex flex-col items-center gap-0 w-full ">
                  {session ? (
                    validLocation ? null : (
                      <Dropdown
                        menu={{
                          items,
                          onClick,
                        }}
                      >
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="flex text-lg gap-2 items-center"
                        >
                          <FaUserAlt className="text-orange-400 text-sm" />{" "}
                          {sessionData.name} {sessionData.surname}
                        </a>
                      </Dropdown>
                    )
                  ) : (
                    <div className="flex gap-2">
                      <Link
                        href={"/login"}
                        onClick={onclose}
                        className="text-xs flex gap-1 items-center hover:underline duration-400"
                      >
                        {" "}
                        <IoLogIn className="text-orange-400 text-xl" /> Login{" "}
                      </Link>{" "}
                      <div className="h-full w-[1px] bg-black"></div>
                      <Link
                        href={`/register`}
                        onClick={onclose}
                        className="text-xs flex gap-1 items-center hover:underline duration-400"
                      >
                        {" "}
                        <FaUserPlus className="text-orange-400 text-xl" />{" "}
                        Register{" "}
                      </Link>
                    </div>
                  )}
                  <div
                    onClick={onclose}
                    className="hover:bg-mainButton  h-full   text-center text-lg font-bold hover:text-white w-full px-3 duration-300 py-6"
                  >
                    Home
                  </div>
                  <div
                    onClick={onclose}
                    className="hover:bg-mainButton  h-full  text-center  text-lg font-bold hover:text-white  w-full px-3 duration-300 py-6"
                  >
                    About
                  </div>
                  <div
                    onClick={onclose}
                    className="hover:bg-mainButton  h-full  text-center text-lg font-bold hover:text-white w-full  px-3 duration-300 py-6"
                  >
                    Services
                  </div>
                  <div
                    onClick={onclose}
                    className="hover:bg-mainButton  h-full  text-center  text-lg font-bold hover:text-white w-full   px-3 duration-300 py-6"
                  >
                    FAQ
                  </div>
                </div>
              </Drawer>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white   flex flex-col gap-0">
          <div className="border-b py-2">
            <div className="container flex justify-between items-center">
              <div className="text-xs flex gap-1 items-center">
                {" "}
                <FaFlag className="text-orange-400" /> English{" "}
                <MdOutlineArrowBackIos className="rotate-180 text-orange-400 text-[8px]" />
              </div>
              <div className="flex gap-4">
                {" "}
                <div className="text-xs flex gap-1 items-center">
                  {" "}
                  <TiVendorAndroid className="text-orange-400 text-sm" />{" "}
                  Android App{" "}
                </div>{" "}
                <div className="text-xs flex gap-1 items-center">
                  {" "}
                  <FaApple className="text-orange-400 text-sm" /> IOS App{" "}
                </div>{" "}
                {session ? (
                  <Dropdown
                    menu={{
                      items,
                      onClick,
                    }}
                  >
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="flex text-xs gap-2 items-center"
                    >
                      <FaUserAlt className="text-orange-400 text-sm" />{" "}
                      {sessionData.name} {sessionData.surname}
                    </a>
                  </Dropdown>
                ) : (
                  <div className="flex gap-2">
                    <Link
                      href={"/login"}
                      className="text-xs flex gap-1 items-center hover:underline duration-400"
                    >
                      {" "}
                      <IoLogIn className="text-orange-400 text-xs" /> Login{" "}
                    </Link>{" "}
                    <div className="h-full w-[1px] bg-black"></div>
                    <Link
                      href={`/register`}
                      className="text-xs flex gap-1 items-center hover:underline duration-400"
                    >
                      {" "}
                      <FaUserPlus className="text-orange-400 text-sm" />{" "}
                      Register{" "}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="">
            <div className="container  flex justify-between items-center  ">
              <Link
                href={`/`}
                className="flex items-center justify-between gap-2"
              >
                <div className="relative    w-[70px] h-[70px] px-0">
                  <Image
                    alt=""
                    fill
                    src={"/assets/logo.png"}
                    className="object-cover  "
                  />
                </div>{" "}
                <div className="font-bold text-2xl font-mono">
                  Sher<span className="text-green-500">Lock </span>
                </div>
              </Link>
              {validLocation ? null : (
                <div className="flex items-center gap-0 h-full ">
                  <div className="hover:bg-mainButton  h-full   px-3 duration-300 py-6">
                    Home
                  </div>
                  <div className="hover:bg-mainButton  h-full   px-3 duration-300 py-6">
                    About
                  </div>
                  <div className="hover:bg-mainButton  h-full   px-3 duration-300 py-6">
                    Services
                  </div>
                  <div className="hover:bg-mainButton  h-full   px-3 duration-300 py-6">
                    FAQ
                  </div>
                </div>
              )}
              {validLocation ? null : (
                <div className="flex justify-between">
                  <div className="py-3 px-5 bg-[#00cb84] rounded-md text-white">
                    Post Free Products
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
