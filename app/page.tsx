"use client"
import Header from "./Header/page"
import Navbar from "./Navbar/page"
import Components from "./Components/page"
import AboutUs from "./Components/AboutUs"
export default function Home() {
  return (
    <>
    
    <Header/>
    <div className="bg-[url('/bgpic.jpg')]  bg-blend-darken bg-blue-950  inset-0 bg-center bg-cover ">
    <Navbar/>
      <Components />
    </div>
    <AboutUs/>

    </>
  )
}