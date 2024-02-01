import React from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import Type from './Title';
import LogoGrayCrop from "/public/sd-gray-crop.png";
import { motion } from 'framer-motion';

const style = {
  mainComp: `overflow-x-hidden overflow-y-hidden bg-sd-black min-h-screen min-w-screen z-0`,
  contentContainer: `flex-1 flex flex-col justify-center items-center overflow-hidden mb-0 z-1`,
  videoLogoContainer: `flex-grow-0 flex items-center justify-center w-full h-screen pb-0 pt-0 -mt-24 mb-0 z-3`,
  typewriterContainer: `flex justify-center mt-auto md:flex-row `
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
          className="relative w-full" // Ensure this container is relative for the child absolute elements
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <video
            autoPlay
            loop
            muted
            style={{ width: '90%', height: '100%', objectFit: 'cover' }}
          >
            <source src="images/website_bg_video_crop.mp4" type="video/mp4" />
          </video>

          {/* Adjusted for centering within the relative container */}
          <div className={style.typewriterContainer} style={{ position: 'absolute', bottom: '-45px', width: '100%' }}>
            <h1 style={{"fontSize": "2.8vw"}} className="font-space-grotesk font-normal text-sd-gray">
              <Type />
            </h1>
          </div>
        </motion.div>
      </div>

      <Footer className='bottom-1 w-full' />
    </div>
  );
};


export default Main;
