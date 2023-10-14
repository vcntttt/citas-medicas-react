
export default function Button({name}) {


    return (
        <div className="flex h-1/4 text-center justify-center mx-0 my-[3.5rem]">
            <button className="bg-[#C1FFFF] text-[black] text-[larger] mb-8 w-40 rounded"><a href="">{name}</a></button>
        </div>
    )
}