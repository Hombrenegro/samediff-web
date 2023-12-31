import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import ContactImage from "/public/images/contact_color_BG3.jpg";
import ContactImageMobile from "/public/contact_color_BG3_mobile.jpg";
import HoveredImage from "/public/manifesto_overlay_v03.png";
import HoveredImageMobile from "/public/manifesto_overlay_v01_mobile.png";
import { motion } from 'framer-motion';

const Contact = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const emailContainerRef = useRef(null);
  const marqueeRef = useRef(null);
  const [emailArray, setEmailArray] = useState(['artists', 'brands', 'jobs']);

  const linkStyle = (linkIndex) => {
    const isOuterLink = linkIndex === 0 || linkIndex === 2;
    return `text-center font-archivo font-150 tracking-tight transition-colors hover:underline hover:sd-yellow ${
      hoveredLink === linkIndex ? 'text-sd-yellow ' : (isOuterLink ? 'text-sd-gray' : 'text-sd-gray')
    } break-words z-20`;
  };

  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 0, opacity: 1 },
    visible: { y: 0, opacity: 1, transition: { duration: 0 } },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEmailArray(prevArray => {
        const newEmail = ['artists', 'brands', 'jobs'][(prevArray.length) % 3];
        return [...prevArray, newEmail];
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-sd-black w-full h-screen overflow-y-hidden overflow-x-hidden"> 
      <Header className='z-20' />
      
      <div className="relative flex justify-center items-center mt-8 mb-16"> 
        <motion.div                       
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, y: 0}}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          onMouseEnter={(e) => {
            if (e.target.tagName === 'IMG') {
              setIsImageHovered(true);
            }
          }}
          onMouseLeave={() => setIsImageHovered(false)}
          
        >
          {/* Desktop Image */}
          <Image
            src={ContactImage}
            alt="contact"
            className={`z-10 transition-opacity easeOut duration-[1.2s] ${
              isImageHovered ? 'opacity-20' : 'opacity-100'
            }`}
            style={{ width: '50%', height: 'auto' }}
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          
          {/* Mobile Image */}
          <Image 
            src={ContactImageMobile} 
            alt="contact" 
            className={`z-10 transition-opacity duration-[1.5s] easeOut ${isImageHovered ? 'opacity-90' : 'opacity-100'} block md:hidden`}
          />
          
          {/* Desktop Hovered Image */}
          <Image 
            src={HoveredImage} 
            alt="hovered" 
            className={`absolute top-0 left-42 z-20 transition-opacity duration-1000 easeOut ${isImageHovered ? 'opacity-100' : 'opacity-0'}`}
            style={{ width: '50%', height: 'auto' }}
          />

          {/* Mobile Hovered Image */}
          <Image 
            src={HoveredImageMobile} 
            alt="hovered" 
            className={`absolute top-0 left-0 z-20 transition-opacity duration-1000 easeOut ${isImageHovered ? 'opacity-100' : 'opacity-0'} block md:hidden`}
          />

          {/* Email address container with staggering effect */}
          <motion.div
            ref={emailContainerRef}
            className="absolute bottom-[-10px] space-x-1 absolute flex flex-col lg:flex-row justify-center transition-opacity duration-300 z-30"
            style={{ maxWidth: '50%', margin: 'auto' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Scrolling Marquee Effect Area */}
            <marquee
              ref={marqueeRef} 
              behavior="marquee scroll" 
              direction="left"
              animation="marquee"
              scrollamount="1.7"
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                width: '100%',
                textIndent: '-98%',
              }}
            >
              {emailArray.map((type, typeIndex) => (
                <React.Fragment key={`${type}-${typeIndex}`}>
                  <motion.a
                    href={`mailto:${type}@samedifference.tv`}
                    className={linkStyle(typeIndex)}
                    onMouseEnter={() => setHoveredLink(typeIndex)}
                    onMouseLeave={() => setHoveredLink(null)}
                    variants={itemVariants}
                    style={{
                      fontSize: '28px',
                    }}
                  >
                    {`${type}@samedifference.tv`}
                  </motion.a>
                  &nbsp; &nbsp; 
                </React.Fragment>
              ))}
            </marquee>
          </motion.div>
        </motion.div>
      </div>

      <Footer className='absolute bottom-0 w-full z-[-1]' />
    </div>
  );
};

export default Contact;
