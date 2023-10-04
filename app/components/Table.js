'use client'

import { useState, useEffect } from 'react'
import { userData1 } from "./userData";


export default function Table(){
    const [ data, setData ] = useState([])

    useEffect(() => {
        setData(userData1)
    } ,[])
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday']

    return (
    <div className="grid grid-flow-col border border-black m-2 p2">
        <div className='grid grid-row-7'>
            {
                days.map((day, index) =>
                        <div className="col-span-1 min-h-[2rem] even:bg-sky-400 odd:bg-white" key={index}>
                            {day}
                        </div>
                )
            }
        </div>

        <div className="col-span-4 min-h-[2rem]">
            {data.map((data, index) =>
                <p className='even:bg-sky-400 odd:bg-white min-h-[4rem]' key={index}> {data[0]} <br/> {data[1]} - {data[1]} <br/> Ideal Length: {data[2]} </p>
            )}
        </div>
    </div>
    )
}