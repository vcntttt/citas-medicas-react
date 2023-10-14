
export default function Form({children}) {
  return (
    <div>
        <form className="flex flex-col gap-4 m-4">
        {children}
        </form>
    </div>
  )
}
