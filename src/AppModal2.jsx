import React,{useState} from "react"
import Modal from './Modal'

const btn = {
  position:'relative',
  zIndex:1,
}

const other = {
  position:'relative',
  zIndex:2,
  backgroundColor:'red',
  padding:'10px',
}

function App() {
  const [isOpen,setIsopen] = useState(false)
  return (
    <>
    <div style={btn} onClick={()=>{console.log('click');}}>
      <button onClick={ ()=>setIsopen(true) }>Open Modal</button>
      <Modal open={isOpen} onClose={()=>setIsopen(false)}>
        Fancy Modal
      </Modal>
    </div>
    <div style={other}>Other Content</div>
    </>
  )
}


export default App