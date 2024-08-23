import { useState } from 'react'
function App() {

  const [color, setColor] = useState("lavender")
  return (
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor:color}}
    >
      <div className='flex flex-wrap fixed justify-center bottom-20 inset-x-0 px-2'>
        <div className='flex flex-wrap fixed justify-center gap-5 shadow-lg  px-2 py-2 rounded-2xl bg-sky-950'>
          <button onClick={()=>setColor("red")} className='outline-none px-3 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-3 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>setColor("green")}className='outline-none px-3 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>setColor("yellow")}className='outline-none px-3 py-1 rounded-full text-black shadow-xl' style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>setColor("white")}className='outline-none px-3 py-1 rounded-full text-black shadow-xl' style={{backgroundColor:"white"}}>White</button>
          <button onClick={()=>setColor("gray")}className='outline-none px-3 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"gray"}}>Grey</button>
          <button onClick={()=>setColor("black")}className='outline-none px-3 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=>setColor("olive")}className='outline-none px-3 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"olive"}}>Olive</button>
          <button onClick={()=>setColor("purple")}className='outline-none px-3 py-1 rounded-full text-white shadow-xl' style={{backgroundColor:"purple"}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
