import React, { useEffect, useState } from 'react'

 const Use = () => {
 
  const[data,setData] = useState(0)
  const[data2,setData2] = useState(100)

  useEffect(()=>{
    console.log(data)
  }) //(componentDidMount and componentDidupdate)

  useEffect(()=>{
    console.log("useEffect")
  },[]) //(componentDidUpdate)

  useEffect(()=>{

  },[data2]) //(useEffect will work like componentDidMount and componentDidUpdate for "data" state variable only)
  
//   //componentWillUnmount : Clean function in useEffect
  useEffect(()=>{
   
     return function cleanup(){
     console.log('data deleted')
     }
  }) 

  
  return (
   <>
   <center>
   <h1>useEffect Hook</h1>
   <p>state value is : {data}</p>
   <p>state value is : {data2}</p>
   <button onClick={()=>setData(data+1)}>update first state value</button>
   <button onClick={()=>setData2(data2+100)}>update second state value</button>
  
   </center>
   </>
  )
}
export default Use

// 1.Alternative of lifeCYcle methods.
// 2.which accepts first parameter as a callback function,and second is dependency array.
// 3.if you do not want that useEffect should run like a componentDidUpdate then : pass an empty dependency array.
// 4.which is used to make server calls.
// 5. clean up function : this function gets executed when you want to update the component will be executed when the component is unmounted from the screen this is used when memory leaks.