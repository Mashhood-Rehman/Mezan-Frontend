"use client";

import React, { useState } from "react";
import {
  AllImages,
  CarpentryWorkImages,
  FurnitureRepairImages,
  PlumbingWorkImages,
  WoodenRacksImages,
} from "../../Helper/Data"; 
import Image from "next/image";

const PortfolioImages = () => {
  const [selectedTab, setSelectedTab] = useState("All");


  const renderImages = () => {
    switch (selectedTab) {
      case "All":
        return AllImages.map((image, index) => (
         

       

          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={300}
            height={200}
            className="rounded-xl  "
            
            />
          
          
        ))
        
        ;
      case "Carpentry Work":
        return CarpentryWorkImages.map((image, index) =>  {
          return (


          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={300}
            height={200}
            
            />
          )
    });
      case "Furniture Repair":
        return FurnitureRepairImages.map((image, index) => {
          return (


          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={300}
            height={200}
            
            />
          )
    });
      case "Plumbing Work":
        return PlumbingWorkImages.map((image, index) => {
          return (

          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={300}
            height={200}
            
            />
          )
    });
      case "Wooden Racks":
        return WoodenRacksImages.map((image, index) => {
          return (


          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={300}
            height={200}
            
            />
          )
    });
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
     
      <div className="flex items-center justify-center space-x-4 mb-8">
        {["All", "Carpentry Work", "Furniture Repair", "Plumbing Work", "Wooden Racks"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-xl border  ${
              selectedTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black hover:bg-blue-400 hover:text-white"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="griD p-10  " >
        {renderImages()}
      </div>
    </div>
  );
};

export default PortfolioImages;
