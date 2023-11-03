function Btn({children, onClick, styles}) {
  return (
    <button
        className={`md:py-2 md:px-4 bg-onahau-500 py-1 px-3 hover:bg-onahau-600  hover:text-white text-black rounded ${styles}`}
        onClick={onClick}
    >{children}</button>
  )
}
export default Btn;