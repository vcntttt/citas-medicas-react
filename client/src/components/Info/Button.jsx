import { useState } from "react"

export default function Button({ name, onClick, text }) {




    return (
        <button className="bg-[#C1FFFF] text-[black] text-[larger] mb-8 w-60 h-10 rounded" onClick={onClick}  >
            {text ? text : name}
        </button>


    )
}