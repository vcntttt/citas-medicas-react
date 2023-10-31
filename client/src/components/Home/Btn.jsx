function Btn({children, onClick, styles}) {
  return (
    <button
        className={`bg-onahau-500 w-full py-2 px-4 my-8  hover:bg-onahau-600  hover:text-white text-black  rounded ${styles}`}
        onClick={onClick}
    >{children}</button>
  )
}
export default Btn;