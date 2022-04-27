import React, { useState } from 'react'
import Use from './Use';

 const App = () => {

  const[compo , showCompo] = useState(true);
  return (
    <>
    {compo ? <Use/> : null}
    <center>
    <button onClick={()=>showCompo(false)}>unmount</button>
    </center>
    </>
  )
}
export default App