import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoGray from "/public/sd-gray.png";
import LogoYellow from "/public/sd-yellow.png";

const style = {
  header: `relative z-20 flex items-center bg-transparent mr-3 px-8 max-h-[90px]`,
  headerItem: `flex px-200 font-archivo text-sd-gray hover:text-sd-yellow cursor-pointer`,
  headerLogoSize: 119,
  hoverEffect: `transition duration-150 ease-in-out transform hover:scale-105`
};

const Header = () => {
  return (
    <nav className={style.header}>
      {/* HeaderLogo */}
      <Link href="/">
        <div className={`flex items-center cursor-pointer group ${style.hoverEffect}`}>
          <Image
            src={LogoGray}
            alt="sd-logo"
            height={style.headerLogoSize}
            width={style.headerLogoSize}
            className="group-hover:hidden"
          />
          <Image
            src={LogoYellow}
            alt="sd-logo"
            height={style.headerLogoSize}
            width={style.headerLogoSize}
            className="hidden group-hover:inline-block"
          />
        </div>
      </Link>

      {/* Header Items */}
      <ul className={`${style.headerItem} text-lg ml-auto pr-1.5 ${style.hoverEffect}`}>
        <li>
          <Link href="/contact">LET'S TALK</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
