function Btn({children, onClick, styles}) {
  return (
    <button
        className={` bg-onahau-500 h-3/6 w-2/3 py-2 font hover:bg-onahau-600  hover:text-white text-black rounded ${styles}`}
        onClick={onClick}
    >{children}</button>
  )
}
export default Btn;