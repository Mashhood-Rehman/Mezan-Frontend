"use client"

import Video from "./Video"
import Crousel from "./Crousel"
import Form from "./Form"
export default function Components() {


    return (
        <>
        <div className="flex flex-col lg:flex-row lg:h-[100vh]  justify-evenly items-center  ">

          <Video />   
            <Crousel />
            <Form />
        </div>
        </>
    )
}