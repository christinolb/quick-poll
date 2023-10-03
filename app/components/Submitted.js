'use client'

import Table from "./Table";
import Title from "./Title";
import { useState } from "react";

export default function Submitted() {
    const color = "text-sky-600"
    const [ submissions, setSubmissions ] = useState([{
                                                        Name: "Christino",
                                                        start: "11am",
                                                        end: "1:30pm",
                                                        IdealLength: 10,
                                                      },
                                                      {
                                                        Name: "Lorenzo",
                                                        start: "5pm",
                                                        end: "6:30pm",
                                                        IdealLength: 20,
                                                      }])
    return(
        <>
            <Title title={"Title"}/>

            <h1 className="text-[4.5rem] text-center text-sky-500 mt-[6rem]">Submitted!</h1>

            <div className="flex justify-center border border-blue-500 mt-[5rem] mx-[4rem] ">
                
                <div className="w-1/2  border border-orange-500">
                    <h1 className="text-2xl">Results</h1>
                    {/**{
                        submissions.map((e) => (
                            <div key={e} className="p-2 m-2">
                                <p key={e.Name}>Name: {e.Name}</p>
                                <p key={e.IdealLength}>Ideal Length: {e.IdealLength}</p>
                            </div>
                        ))
                    }*/}
                    <Table/>
                </div>

            </div>
        
        </>
    )
}