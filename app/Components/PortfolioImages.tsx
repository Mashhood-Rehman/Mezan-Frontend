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

const PortfolioImages = () => 
{
  const [selectedTab, setSelectedTab] = useState("All");
  const [isFading, setIsFading] = useState(false);

  const renderImages = () => 
  {
    switch (selectedTab) {
      case "All":
        return AllImages.map((image, index) => (
          <div
            key={index}
            className={`fade-in ${isFading ? "fade-out" : ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="rounded-xl"
            />
          </div>
        ));
      case "Carpentry Work":
        return CarpentryWorkImages.map((image, index) => (
          <div
            key={index}
            className={`fade-in ${isFading ? "fade-out" : ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="rounded-xl"
            />
          </div>
        ));
      case "Furniture Repair":
        return FurnitureRepairImages.map((image, index) => (
          <div
            key={index}
            className={`fade-in ${isFading ? "fade-out" : ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="rounded-xl"
            />
          </div>
        ));
      case "Plumbing Work":
        return PlumbingWorkImages.map((image, index) => (
          <div
            key={index}
            className={`fade-in ${isFading ? "fade-out" : ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="rounded-xl"
            />
          </div>
        ));
      case "Wooden Racks":
        return WoodenRacksImages.map((image, index) => (
          <div
            key={index}
            className={`fade-in ${isFading ? "fade-out" : ""}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="rounded-xl"
            />
          </div>
        ));
      default:
        return null;
    }
  };

  const handleTabChange = (tab) => 
  {
    setIsFading(true);
    setTimeout(() => 
    {
      setSelectedTab(tab);
      setIsFading(false);
    }, 300); // Add delay for smooth transition
  };

  return (
    <div className="p-4">
      <div className="lg:flex items-center justify-center grid grid-cols-2 grid-rows-2 gap-4 lg:space-x-4 mb-8">
        {["All", "Carpentry Work", "Furniture Repair", "Plumbing Work", "Wooden Racks"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-xl border ${
              selectedTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black hover:bg-blue-400 hover:text-white"
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {renderImages()}
      </div>
    </div>
  );
};

export default PortfolioImages;
