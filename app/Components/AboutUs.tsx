import { EmblaOptionsType } from 'embla-carousel';
import React from 'react';
import EmblaCarousel from './EmblaCarousel';

const OPTIONS: EmblaOptionsType = { loop: true };

// Updated slides with a heading for each
const SLIDES = [
  { id: 1, heading: 'Licensed Technicians' , para: "Melus Apanfa akfubfas  oafoubaf fonafj afafoaf kjjfika jabfhif akhfbia" },
  { id: 2, heading: 'Top Rated Service' , para: "Melus Apanfa akfubfas  oafoubaf fonafj afafoaf kjjfika jabfhif akhfbia" },
  { id: 3, heading: 'Timely Services'  , para: "Melus Apanfa akfubfas  oafoubaf fonafj afafoaf kjjfika jabfhif akhfbia"},
  { id: 4, heading: 'Quality Services'  , para: "Melus Apanfa akfubfas  oafoubaf fonafj afafoaf kjjfika jabfhif akhfbia"},
  { id: 5, heading: 'Affordable Prices'  , para: "Melus Apanfa akfubfas  oafoubaf fonafj afafoaf kjjfika jabfhif akhfbia"},
];

const AboutUs = () => {
  return (
    <div>
      <h1 className="tracking-wider font-semibold flex items-center justify-center mt-[5%]">ABOUT US</h1>

      <div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default AboutUs;
