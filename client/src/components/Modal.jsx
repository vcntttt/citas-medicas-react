
export default function Modal({isOpen, onClose, children}) {
    if (!isOpen) return null;
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/80 text-center">
        <div className="bg-white rounded-lg w-3/4 ">
          {children}
          <div className="flex justify-center p-4">
          <button className="bg-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
