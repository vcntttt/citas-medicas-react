export default function Modal({ isOpen, onClose, children, bgColor }) {
  if (!isOpen) return null;
  console.log(bgColor)
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/80 text-center  ">
        <div className={`bg-${bgColor} w-2/4 h-4/4 rounded-lg`}>
          {children}
          <div className="m-5">
            <button className="bg-cyan-500 rounded-lg w-1/6  h-15" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}