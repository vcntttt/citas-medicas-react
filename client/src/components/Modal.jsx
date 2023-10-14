
export default function Modal({isOpen, onClose, children}) {
    if (!isOpen) return null;
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/80">
        <div className="bg-white rounded-lg w-3/4">
          {children}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}
