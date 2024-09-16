import * as React from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/components/ui/carousel";

export function CarouselSpacing() {
  return (
    <Carousel className=" max-w-sm  cursor-pointer w-[700px]   ">
      <CarouselContent className="-ml-1 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className=" md:basis-1/2  lg:basis-full rounded-3xl hover:bg-blue-600 duration-300 ease-in-out hover:text-white" >
            <div className="">
              <Card className=" h-72 flex flex-col  justify-center hover:text-white ease-in-out duration-300   items-center ">
             
                 
                  <span className=" text-3xl  mb-1 font-semibold">Licensed Technicians</span>
                  <p className="text-center text-xl mt-1">
                    Aldus Corporation, which later merged Adobe Systems, ushered lorem
                  </p> 
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
