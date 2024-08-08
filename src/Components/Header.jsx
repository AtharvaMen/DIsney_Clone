import React from "react";
import logo from "./../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical} from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      name: "Watch List",
      icon: HiPlus,
    },
    {
      name: "Originals",
      icon: HiStar,
    },
    {
      name: "Movies",
      icon: HiPlayCircle,
    },
    {
      name: "Series",
      icon: HiTv,
    }
  ];
  return (
    <div className="flex items-center justify-between">
      <div className="flex  gap-8">
      <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
      {menu.map((item) => (
        <HeaderItem name={item.name} Icon = {item.icon} />
      ))}
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEMAdBlaRt3h9qWKq7Gy06igBGQwpFM2VEA&s"  className="w-[40px] rounded-full"/>
    </div>
  );
};

export default Header;
