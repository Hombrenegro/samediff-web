import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import ContactImage from "/public/images/manifesto_image_1.15.jpg";
import ContactImageMobile from "/public/images/contact_color_BG4_mobile.png";
import HoveredImage from "/public/images/manifesto_overlay_v05.png";
import HoveredImageMobile from "/public/images/manifesto_overlay_v02_mobile.png";
import { motion } from 'framer-motion';

const Contact = () => {
  // State and refs setup
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const emailContainerRef = useRef(null);
  const marqueeRef = useRef(null);
  const [emailArray, setEmailArray] = useState(['artists', 'brands', 'jobs']);
  
  // Function to determine link styles based on index
  const linkStyle = (linkIndex) => {
    const isOuterLink = linkIndex === 0 || linkIndex === 2;
    return `text-center | font-archivo | font-150 | tracking-tight | transition-colors | hover:underline hover:sd-yellow | ${
      hoveredLink === linkIndex ? 'text-sd-yellow ' : (isOuterLink ? 'text-sd-gray' : 'text-sd-gray')
    } break-words z-20`;
  };
  
  // Variants for container and item animations
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
  
  // Effect to continuously update emailArray with a staggered interval
  useEffect(() => {
    const interval = setInterval(() => {
      setEmailArray(prevArray => {
        const newEmail = ['artists', 'brands', 'jobs'][(prevArray.length) % 3];
        return [...prevArray, newEmail];
      });
    }, 16);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative | bg-sd-black | w-full | min-h-screen"> 
      <Header className='z-20' /> 
      <div className="flex | justify-center | items-center | mt-9 | pt-9 | mx-auto">
        <motion.div                       
          className="image-container | relative | flex | flex-col | items-center"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          {/* Desktop Image */}
          <Image
            src={ContactImage}
            alt="contact"
            className={`z-10 | transition-opacity | easeOut duration-[0.3s] hidden md:block ${
              isImageHovered ? 'opacity-5' : 'opacity-100'
            }`}
            style={{ width: '100%', height: 'auto' }} // Adjust to 100% of the parent container
          />
          
          {/* Desktop Hovered Image */}
          <Image 
            src={HoveredImage} 
            alt="hovered" 
            className={`absolute | top-0 | left-42 | z-20 | transition-opacity duration-1000 easeOut hidden md:block | ${isImageHovered ? 'opacity-100' : 'opacity-0'}`}
            style={{ width: '100%', height: 'auto' }} // Adjust to 100% of the parent container
          />

          {/* Mobile Image */}
          <Image 
            src={ContactImageMobile} 
            alt="contact" 
            className={`z-10 | transition-opacity | easeOut duration-[0.3s] ${isImageHovered ? 'opacity-5' : 'opacity-100'} block md:hidden`}
            style={{ width: '100%', height: 'auto%' }} // Adjust to 100% of the parent container
          />
       
          {/* Mobile Hovered Image */}
          <Image 
            src={HoveredImageMobile} 
            alt="hovered" 
            className={`absolute top-0 left-0 z-20 transition-opacity duration-1000 easeOut ${isImageHovered ? 'opacity-100' : 'opacity-0'} block md:hidden`}
            style={{ width: '100%', height: 'auto%' }} // Adjust to 100% of the parent container
          />

          {/* Email address container with staggering effect */}
          <motion.div
            ref={emailContainerRef}
            className="absolute | bottom-[-10px] | space-x-1 | flex | flex-col | justify-center | transition-opacity duration-200 | z-30"
            style={{ maxWidth: '100%', width: '100%', margin: 'auto' }} // Adjust to match the image container width
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
              scrollamount="1.5" // speed of the scroll
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
                      fontSize: '16px',
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

      <div className='absolute | bottom-6 | w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;