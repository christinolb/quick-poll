'use client'

import { useState } from 'react'

export default function Table(){
    const [ day, setDay ] = useState([
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ])

    return (
    <div className="grid grid-flow-row border border-black m-2 p2  ">
        {
            day.map((data, index) =>
            <div className="even:bg-sky-400 odd:bg-white" key={index}>{data}</div>
            )
        }
    </div>
    )
}