import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

// Footer component
const style = {
  footer: `mt-20 | bg-sd-black | absolute | bottom-8 | w-full | flex | justify-center | items-center | px-8 | z-0`,
  contentWrapper: `flex | flex-col | items-center`,
  footerIcon: `text-sd-gray | scale-[110%] | hover:text-sd-yellow | cursor-pointer | transition duration-150 | ease-in-out | `,
  footerText: `opacity-78 font-space-grotesk text-[8px] text-sd-gray mt-[12px] -mb-[1px]`,
};


const footerTxt = '©2024 SAME DIFFERENCE';

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 100, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className={`${style.footer} absolute -bottom-[30px]`}>
      <motion.div
        className={style.contentWrapper}
        initial={{ opacity: 0, y: 2 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0 }}
      >
        <Link
          href="https://www.instagram.com/samedifference.tv/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.footerIcon}>
          <FaInstagram className='text-2xl'/>
        </Link>
        <div className={style.footerText}>
          {footerTxt}
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
