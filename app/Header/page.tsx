"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function Header() {
    return (
        <>
                <div className="bg-blue-600 h-8 max-w-screen lg:flex justify-between hidden  ">
                    
                    {/* child-1 */}
                    <div className="flex items-center space-x-2 ml-[1%]">
                    <Icon icon="bi:facebook" className="  border border-white h-7 w-7 rounded-full p-1 bg-white hover:text-blue-700 duration-300 ease-in-out  "   />
                    <Icon icon="bi:pinterest" className=" border border-white h-7 w-7 rounded-full p-1 bg-white hover:text-red-700 duration-300 ease-in-out  "  />
                    <Icon icon="bi:youtube" className=" border border-white h-7 w-7 rounded-full p-1 bg-white hover:text-red-800 duration-300 ease-in-out  "  />
                    <Icon icon="bi:twitter" className="  border-white h-7 w-7 rounded-full p-1 bg-white hover:text-white hover:bg-transparent duration-300 ease-in-out   "  />
                    </div> 

                    {/* child-2 */}
                    

                    <div className="flex space-x-4 mr-[1%]">
                        <div className="flex items-center space-x-1">
                             <Icon icon="fluent:location-16-regular" className="h-5 w-5"/>
                        <p className="font-serif text-sm">376 Branson Oval Suite 200, South Lon, Mexico</p>
                        </div>


                        <div  className="flex items-center space-x-1" >
                        <Icon icon="fluent:mail-16-regular" className="h-5 w-5"/>

                            <Link href="mailto: mashhoodbutt47@gmail.com">mashhoodbutt47@gmail.com</Link>
                        </div>


                    </div>


                </div>
        </>
    )
}