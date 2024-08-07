import React from "react";
import logo from "./../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlus,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";

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
    <div>
      <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
    </div>
  );
};

export default Header;
