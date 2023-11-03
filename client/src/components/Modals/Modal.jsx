export default function Modal({ isOpen, onClose, children, bgColor }) {
  if (!isOpen) return null;
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/80 text-center  ">
        <div className={`bg-${bgColor} w-full md:w-2/3 lg:w-2/6 rounded-lg`}>
          {children}
          <div className="m-5">
            <button className="bg-cyan-500 hover:bg-cyan-700 text-white rounded-lg h-15 p-1 w-1/2" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}