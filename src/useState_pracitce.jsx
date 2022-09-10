import React,{useState} from "react"

function App() {

  const [input,setInput] = useState('monica')

  let onChange = (e) => {
    const newValue = e.target.value
    setInput(newValue)
  }
  
  return (
    <>
    <div>
      <input placeholder="输入" onChange={onChange} />
      {input}
    </div>
    </>
  )
}


export default App