/* eslint-disable react/prop-types */
function Btn({children, onClick}) {
  return (
    <button
        className="bg-cyan-200 hover:bg-cyan-400 text-black py-2 px-4 rounded"
        onClick={onClick}
    >{children}</button>
  )
}
export default Btn;