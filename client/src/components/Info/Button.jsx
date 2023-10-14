import { useState } from "react"

export default function Button({name,onClick,text}) {




    return (
        <div className="flex h-1/4 text-center justify-center mx-0 my-[3.5rem]">
            <button className="bg-[#C1FFFF] text-[black] text-[larger] mb-8 w-40 rounded" onClick={onClick}  >
                {text ? text : name}
                </button>
        </div>
    )
}