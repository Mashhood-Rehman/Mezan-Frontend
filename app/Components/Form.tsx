import React from 'react'

const Contact = () => {
  return (
    <div>

<div className="p-10 mt-4 rounded-lg mx-auto max-w-4xl  bg-blue-600 lg:mr-10 font-[sans-serif]">
            <h1 className="text-3xl text-white font-serif text-left flex">Contact us</h1>
            <form className="mt-8 space-y-4">
                <input type='text' placeholder='Name'
                    className="w-full rounded-md py-3 px-4 text-gray-800 border-b-2 outline-none  bg-transparent text-sm " />
                <input type='text' placeholder='Name'
                    className="w-full rounded-md py-3 px-4 text-gray-800 border-b-2 outline-none  bg-transparent text-sm " />     <input type='text' placeholder='Name'
                    className="w-full rounded-md py-3 px-4 text-gray-800 border-b-2 outline-none  bg-transparent text-sm " />
                <textarea placeholder='Problems ' 
                    className="w-full rounded-md py-3 px-4 text-gray-800 border-b-2 outline-none  bg-transparent text-sm " />
                <button type='button'
                    className="text-white bg-yellow-500 hover:bg-black duration-300 ease-in-out tracking-wide rounded-md text-sm px-4 py-3 w-32 items-center flex justify-center">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact