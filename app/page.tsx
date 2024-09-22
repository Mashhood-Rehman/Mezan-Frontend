"use client"
import Header from "./Header/page"
import Navbar from "./Navbar/page"
import Components from "./components/page"
import AboutUs from "./components/AboutUs"
import Service1 from "./Services/Service1"
import ServiceGallery from "./Services/ServiceGallery"
import ScrollToTop from "./components/ScrollToTop"
import MainService from "./Services/page"
import Porfolio from "./components/Porfolio"
import QuoteRequest from "./components/QuoteRequest"
export default function Home() {
  return (
    <>
    
    <Header/>
    <div className="bg-[url('/bgpic.jpg')] lg:h-[100vh]  bg-blend-darken bg-blue-950  inset-0 bg-center bg-cover ">
    <Navbar/>
      <Components />
    </div>
    <AboutUs/>
    
    <MainService />
      <Porfolio  />
    <ScrollToTop/>
    <QuoteRequest />




    </>
  )
}