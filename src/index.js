import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"


function PasswordGenerator(){
    
     const [password,setPass] = useState("");

     const [length,setLength] = useState(10);

     const [numberchanged,setnumchanged] = useState(false);
     const [charchanged,setcharchanged] = useState(false);


let pass=""
     function generatepass()
     {
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if(numberchanged)
        str+="123456789";
      if(charchanged)
        str+="!@#$%^&*({})+|?><:";

     let pass=""
      for(let i=0;i<length;i++)
      {

        {/* This line randomly picks a character from str and adds it to the password string.*/}
           pass+= str[Math.floor(Math.random()*str.length)]
      }
      setPass(pass);
     };
     

     useEffect(()=>{
      generatepass();
     },[length,numberchanged,charchanged]);
    

    return(

        <>
          <h1>{password}</h1>
          <div id="inner">
            <input type="range" min={5} max={50} value={length} onChange={(event)=>setLength(event.target.value)}></input>
            <label>Length is :{length}</label>

            <input type="checkbox" defaultChecked={numberchanged} onChange={()=>setnumchanged(!numberchanged)}></input>
            <label>Number</label>

            <input type="checkbox" defaultChecked={charchanged} onChange={()=>setcharchanged(!charchanged)}></input>
            <label>Symbols</label>
          </div>
        </>  
        
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);