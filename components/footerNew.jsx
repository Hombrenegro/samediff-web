import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const style = {
  footer: `mt-20 z-0 bg-transparent py-16 w-full flex justify-center items-center padding-0 margin-0`,
  contentWrapper: `flex flex-col items-center`,
  footerIcon: `text-sd-gray text-3xl hover:text-sd-yellow cursor-pointer`,
  footerText: `opacity-25 text-[10px] text-sd-gray mt-4`,
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
    <div ref={ref} className={style.footer}>
      <motion.div
        className={style.contentWrapper}
        initial={{ opacity: 0, y: 10 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <Link
          href="https://www.instagram.com/samedifference.tv/"
          target="_blank"
          rel="noopener noreferrer"
          className={style.footerIcon}>
          <FaInstagram className='text-4xl'/>
        </Link>
        <div className={style.footerText}>
          {footerTxt}
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
