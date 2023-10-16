function Btn({children, onClick}) {
  return (
    <button
        className="bg-onahau-500 hover:bg-onahau-600 hover:text-white text-black py-2 px-4 rounded"
        onClick={onClick}
    >{children}</button>
  )
}
export default Btn;