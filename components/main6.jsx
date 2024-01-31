import React from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import Type from './Title';
import LogoGrayCrop from "/public/sd-gray-crop.png";
import { motion } from 'framer-motion';

const style = {
  mainComp: `overflow-x-hidden overflow-y-hidden bg-sd-black min-h-screen min-w-screen z-0`,
  contentContainer: `flex-1 flex flex-col justify-center items-center overflow-hidden mb-0 z-0`,
  videoLogoContainer: `flex-grow-0 flex items-center justify-center w-full h-screen -mt-24 pb-24 pt-1 -mt-4 z-1`,
  typewriterContainer: `flex-grow-0 flex items-center justify-center w-full`
};

const Main = () => {
  return (
    <div className={style.mainComp}>
      <Header />
      <div className={style.videoLogoContainer}>
        <motion.div
          className="absolute flex items-center justify-center space-x-4"
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          <Image
            src={LogoGrayCrop}
            alt="sd-logo"
            style={{ width: "75%", objectFit: "cover" }}
          />
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <video
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="/images/sd_anim_transparent.webm" type="video/webm" />
          </video>
        </motion.div>
      </div>

      <div className={style.typewriterContainer}>
        <h1 style={{"fontSize": "2.5vw"}} className="font-space-grotesk font-normal text-sd-gray absolute z-10">
          <Type />
        </h1>
      </div>

      <Footer className='bottom-1 w-full' />
    </div>
  );
};

export default Main;
