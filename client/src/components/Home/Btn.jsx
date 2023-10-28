function Btn({children, onClick, styles}) {
  return (
    <button
        className={`bg-onahau-500 hover:bg-onahau-600 hover:text-white text-black py-2 px-4 rounded ${styles}`}
        onClick={onClick}
    >{children}</button>
  )
}
export default Btn;