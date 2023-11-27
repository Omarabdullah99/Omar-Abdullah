/* eslint-disable no-unused-vars */
import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";

const Skill = () => {
    const frontend=["Html", "Css", "Sass", "Tailwind Css", "Bootstrap","React"]
    const backend=["Node Js", "Express Js","MongoDB", "Mongoose"]
  return (
    <div className='my-10'>
    <h1 className='text-center m-5 text-2xl font-bold'>Skills</h1>
    <div className='flex flex-col md:flex-row w-full md:w-2/4 mx-auto justify-center gap-10'>
    <div className="fontend shadow-xl rounded-xl w-[300px] h-[300px] py-3 mb-5">
    <h1 className='text-center font-bold text-xl'>Front-end</h1>
    {frontend.map((fon)=>(
        <div key={fon} className='flex  items-center gap-3 w-2/4 mx-auto mt-3'>
        <AiOutlineCheck />
        <p>{fon}</p>
        </div>
    ))}
    </div>

    <div className="backend shadow-xl rounded-xl w-[300px] h-[300px] py-3">
    <h1 className='text-center font-bold text-xl'>Backend</h1>
    {backend.map((back)=>(
        <div key={back} className='flex  items-center gap-3 w-2/4 mx-auto mt-3'>
        <AiOutlineCheck />
        <p>{back}</p>
        </div>
    ))}
    </div>
    </div>
    </div>
  )
}

export default Skill