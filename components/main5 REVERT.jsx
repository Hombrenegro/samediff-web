import React from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import Type from './Title';
import LogoGrayCrop from "/public/sd-gray-crop.png";
import { motion } from 'framer-motion';

const style = {
  mainComp: `overflow-x-hidden overflow-y-hidden bg-sd-black min-h-screen min-w-screen`,
  contentContainer: `flex-1 flex flex-col justify-center items-center min-h-screen overflow-hidden`,
  videoLogoContainer: `flex-grow-0 flex items-center justify-center w-full h-screen -mt-12 pb-48`,
  typewriterContainer: `flex-grow-0 text-center -mt-[420px] z-16`,
};

const Main = () => {
  return (
    <div className={style.mainComp}>
      {/* Header */}
      <Header />

      {/* Video and Logo Container */}
      <div className={style.videoLogoContainer}>
        {/* SD BG Logo */}
        <motion.div 
          className="absolute z-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          <Image
            src={LogoGrayCrop}
            alt="sd-logo"
            style={{ width: "80%", objectFit: "cover" }}
          />
        </motion.div>

        {/* Video Component */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 75, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ width: '93%', display: 'fixed', alignItems: 'center', justifyContent: 'center' }} 
        >
          <video
            autoPlay
            loop
            muted
            style={{ width: '125%', height: '125%', objectFit: 'cover' }}
          >
            <source src="/images/sd_anim_transparent.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>

      {/* Typewriter Container */}
      <div className={style.typewriterContainer}>
  <h1 className="font-space-grotesk font-bold text-sd-gray mt-20 text-2xl sm:text-3xl md:text-1xl lg:text-4xl xl:text-5xl xxl:text-6xl">
    <Type />
  </h1>
</div>
     

      {/* Footer */}
      <Footer className='absolute bottom-0 w-full z-[-1]' />
    </div>
  );
};

export default Main;
