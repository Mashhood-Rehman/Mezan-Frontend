import { useState } from 'react';
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [homeHover, setHomeHover] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [shopHover, setShopHover] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar for desktop */}
      <div className="hidden md:flex justify-between items-center p-4 bg-transparent">
        {/* Logo */}
        <div>
          <Image src={'/light-logo.svg'} width={100} height={100} alt="Logo" />
        </div>

        {/* Tabs */}
        <div>
          <ul className="flex space-x-10">
            {/* Home link */}
            <li className="relative group" 
                onMouseEnter={() => setHomeHover(true)}
                onMouseLeave={() => setHomeHover(false)}>
              <button className={`text-white ${homeHover ? 'text-yellow-500' : 'hover:text-gray-300'} transition duration-300 ease-in-out`}>
                Home
              </button>
              <AnimatePresence>
                {homeHover && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">
                    <li><Link href="/" className="block text-sm px-4 py-1 hover:text-yellow-400">i- Default Home</Link></li>
                    <li><Link href="/" className="block text-sm px-4 py-1 hover:text-yellow-400">ii- Handyman Service</Link></li>
                    <li><Link href="/" className="block text-sm px-4 py-1 hover:text-yellow-400">iii- Hardware Store</Link></li>
                    <li><Link href="/" className="block text-sm px-4 py-1 hover:text-yellow-400">iv- Installation</Link></li>
                    <li><Link href="/" className="block text-sm px-4 py-1 hover:text-yellow-400">v- Maintenance</Link></li>
                    <li><Link href="/" className="block text-sm px-4 py-1 hover:text-yellow-400">RTL-Version</Link></li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Services link */}
            <li className="relative group" 
                onMouseEnter={() => setServicesHover(true)}
                onMouseLeave={() => setServicesHover(false)}>
              <button className={`text-white ${servicesHover ? 'text-yellow-500' : 'hover:text-gray-300'} transition duration-300 ease-in-out`}>
                Services
              </button>
              <AnimatePresence>
                {servicesHover && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">
                    <li><Link href="/" className="block text-sm px-4 py-1 hover:text-yellow-400">Service 1</Link></li>
                    <li><Link href="/" className="block text-sm px-4 py-1 hover:text-yellow-400">Service 2</Link></li>
                    <li><Link href="/" className="block text-sm px-4 py-1 hover:text-yellow-400">Service 3</Link></li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* About Us link */}
            <li className="text-white hover:text-yellow-500 transition duration-300 ease-in-out">
              About Us
            </li>

            {/* Shop link */}
            <li className="relative group" 
                onMouseEnter={() => setShopHover(true)}
                onMouseLeave={() => setShopHover(false)}>
              <button className={`text-white ${shopHover ? 'text-yellow-500' : 'hover:text-gray-300'} transition duration-300 ease-in-out`}>
                Shop
              </button>
              <AnimatePresence>
                {shopHover && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">
                    <li><Link href="/" className="block text-sm px-4 py-1 hover:text-yellow-400">Shop-Listing</Link></li>
                    <li><Link href="/" className="block text-sm px-4 py-1 hover:text-yellow-400">Shop-Single</Link></li>
                    <li><Link href="/" className="block text-sm px-4 py-1 hover:text-yellow-400">Cart</Link></li>
                    <li><Link href="/" className="block text-sm px-4 py-1 hover:text-yellow-400">Checkout</Link></li>
                    <li><Link href="/" className="block text-sm px-4 py-1 hover:text-yellow-400">Wishlist</Link></li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* Contact link */}
            <li className="text-white hover:text-yellow-500 transition duration-300 ease-in-out">
              Contact
            </li>
          </ul>
        </div>

        {/* Button */}
        <div className="mt-4 flex space-x-2">
          <div className="text-white flex space-x-2">
            <Icon icon="solar:phone-calling-linear" className="font-semibold border rounded-full p-1 h-7 w-7 hover:text-yellow-300 duration-300 ease-in-out hover:border-yellow-300" />
            <p>
              Need Help? Talk to an expert <br />
              <span className="hover:text-yellow-300 duration-500 font-semibold ease-in-out">
                (+00) 123 456789
              </span>
            </p>
          </div>

          <button className="p-2 rounded-3xl bg-yellow-400 hover:text-white text-sm hover:bg-black duration-300 ease-in-out">
            Get a Quote
          </button>
        </div>
      </div>

      {/* Navbar for mobile */}
      <div className="md:hidden flex items-center justify-between p-4 bg-transparent">
        {/* Logo */}
        <div>
          <Image src={'/light-logo.svg'} width={100} height={100} alt="Logo" />
        </div>

        {/* Sidebar Toggle Button */}
        <button 
          className="text-white p-2 rounded-md hover:bg-gray-700" 
          onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Icon icon="mdi:menu" className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 z-20 left-0 w-3/4 h-full bg-gray-900 text-white p-4 shadow-lg">
            <button 
              className="text-white absolute top-4 right-4 text-2xl" 
              onClick={() => setSidebarOpen(false)}>
              <Icon icon="mdi:close" />
            </button>
            <ul className="space-y-4">
              {/* Home link */}
              <li><Link href="/" className="block text-xl hover:text-yellow-500">Home</Link></li>

              {/* Services link */}
              <li><Link href="/" className="block text-xl hover:text-yellow-500">Services</Link></li>

              {/* About Us link */}
              <li><Link href="/" className="block text-xl hover:text-yellow-500">About Us</Link></li>

              {/* Shop link */}
              <li><Link href="/" className="block text-xl hover:text-yellow-500">Shop</Link></li>

              {/* Contact link */}
              <li><Link href="/" className="block text-xl hover:text-yellow-500">Contact</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
