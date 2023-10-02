'use client'

import Title from "./Title";
import { useState } from "react";

export default function Submitted() {
    const [ submissions, setSubmissions ] = useState([{
                                                        Name: "Christino",
                                                        IdealLength: 10
                                                      },
                                                      {
                                                        Name: "Lorenzo",
                                                        IdealLength: 20
                                                      }])
    return(
        <>
            <Title title={"Title"}/>

            <h1 className="text-[4.5rem] text-center text-sky-500 mt-[6rem]">Submitted!</h1>

            <div className="grid grid-cols-5 gap-[1rem] border border-blue-500 mt-[5rem] ml-[4rem] mr-[33rem]">
                <div className="grid col-span-2 border border-red-500 mr-[2rem] w-3/4">
                    <h1 className="text-2xl">Submissions</h1>
                    {
                        submissions.map((e) => (
                            <div className="p-2 m-2">
                                <p>Name: {e.Name}</p>
                                <p>Ideal Length: {e.IdealLength}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="grid col-span-3 border border-orange-500">Results</div>

            </div>
        
        </>
    )
}