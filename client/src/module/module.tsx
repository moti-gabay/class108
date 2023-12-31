import "./module.css"
type Props = {children:any}

const Module = (props: Props) => {
  return (
    <div>
        <div className="backdrop"/>
        <dialog className="modal">

        {props.children}
        </dialog>
        </div>
  )
}

export default Module