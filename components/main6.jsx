
import React from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import Type from './Title';
import LogoGrayCrop from "/public/sd-gray-crop.png";
import { motion } from 'framer-motion';

const style = {
  mainComp: `overflow-x-hidden | overflow-y-hidden | bg-sd-black | min-h-screen | min-w-screen | z-0`,
  contentContainer: `flex-1 | flex | flex-col | justify-center | items-center | overflow-hidden | mb-0 | z-0`,
  videoLogoContainer: `flex-grow-0 | flex | items-center | justify-center | w-full h-screen | -mt-20 | pb-10 | z-1`,
  typewriterContainer: ` text-center | pt-80 | ,`
};

const Main = () => {
  return (
    <div className={style.mainComp}>
      {/* Header */}
      <Header />
      {/* Video and Logo Container */}
      <div className= {style.videoLogoContainer}>
        {/* SD BG Logo */}
        <motion.div 
          className="absolute | flex | items-center | justify-center | space-between-4"
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          <Image
            src={LogoGrayCrop}
            alt="sd-logo"
            style={{ width: "75%", objectFit: "cover" }}
          />
        </motion.div>

        {/* Video Component */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 75, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ width: '90%', display: 'fixed', alignItems: 'center', justifyContent: 'center' }} 
        >
          <video
            autoPlay
            loop
            muted
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="/images/sd_anim_transparent.webm" type="video/webm" />  {/* Might need to rerender the codec of the webm to be VP8, since it freaks out on Safari */}
          </video>
        </motion.div>

         {/* Typewriter Container */}
        <div className={`${style.typewriterContainer}`}>
          <h1 style={{"font-size": "2.5vw"}} className="font-space-grotesk | font-normal | text-sd-gray | absolute | z-10">
          <Type />
        </h1>
        </div>
      </div>
     
      {/* Footer */}
      <Footer className='bottom-1 | w-full' />
    </div>
  );
};

export default Main;