import React,{useEffect, useRef, useState} from 'react';
import './App.css';

function App() {

  // const initialValue =""
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  })

  const focusBack = () => {
    setValue(inputRef.current.focus())
  }

  const [value, setValue] = useState("")
  const [allValue,setAllValue] =useState([])

  const change = (e) => {
    // e.preventDefault()
    setValue(e.target.value)
  }

  const showCase = (e) => {
    if(e){
    setAllValue(prevS=>[...prevS,value])
    setValue("")
    }
  }

  const changeText = (alt,id ) => {
    if(document.getElementById(`${id}`).innerHTML===alt){
      document.getElementById(`${id}`).innerHTML="Text is Private"
      document.getElementById(`${id}`).style.color="white"

      console.log(alt)

    }
    else{
      document.getElementById(`${id}`).innerHTML=alt;
      document.getElementById(`${id}`).style.color = "black"
      console.log(alt + "anmol")

    }
  }

  


  return (
    <div className="App">
      <h1>My Activities</h1>
      <input ref={inputRef} type='text' value={value} onChange={(e)=>change(e)}></input>
      <button onClick={()=>showCase(value)} >Add</button>
      <div>
        {
        allValue.map((alt,index) => {
          return (
            <div>
              <ul style={{backgroundColor:'peachpuff'}}>
                <li id={`${index}`} style={{color:'black'}}>
                  {alt}
                </li>
                <button onClick={() => changeText(alt,index) } >toggle</button>
              </ul>
            </div>
          )
        })
        }
      </div>
      <button onClick={focusBack}> Focus</button>
    </div>
  );

}

export default App;



// const reducer = (state, action) => {
  //   switch (action) {
  //     case 'add' :
  //       return state
  //   }
  // }

  // const [sentence,dispatch] = useReducer(reducer,initialValue)