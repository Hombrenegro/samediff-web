import React from 'react';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
import Type from './Title';
import LogoGrayCrop from "/public/sd-gray-crop.png";
import { motion } from 'framer-motion';

const style = {
  mainComp: `overflow-x-hidden | overflow-y-hidden | bg-sd-black | min-h-screen | min-w-screen | z-0`,
  mainNew:  ``,
  contentContainer: `flex-1 | flex | flex-col | justify-center | items-center | overflow-hidden | mb-14 | z-1`,
  videoLogoContainer: `flex-grow-0 | flex | items-center | justify-center | w-full h-screen | -mt-20 | pb-16 | mb-2 | z-2`,
  typewriterContainer: `flex-grow-0 | space-evenly | text-center | pt-90 | -mt-80 | z-3 `, 
};

const Main = () => {
  return (
    /* <div class="flex items-center justify-center h-screen">
      <div class="w-3/5 relative" style={{"padding-top": "30%", "background-color": "white"}}>
      Video and Logo Container 
       <div className="upper" style={{"border": "3px solid red", "height": "00%", "width": "100%"}}>

        </div>
        <div className="lower" style={{"border": "3px solid green", "height": "1vh", "width": "100%"}}>
          
        </div>
        </div>
      </div>  
   */
      <div class="flex items-center justify-center h-screen">
      <div class="w-3/5 relative" style={{"padding-top": "30%"}}>
        <div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col h-full">
          <div class="flex-1" style={{"flex-grow": "9"}}>
          </div>
          <div class="flex-1" style={{"flex-grow": "1"}}>
          </div>
        </div>
      </div>
    </div>

 ); 
};


export default Main;  