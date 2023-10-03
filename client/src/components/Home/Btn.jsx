
export default function Btn({name, onClick}) {
  return (
    <button
        className="bg-cyan-200 hover:bg-cyan-400 text-black py-2 px-4 rounded"
    >{name}</button>
  )
}
