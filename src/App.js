import { useEffect, useState } from "react";
import "./App.css";
const users = [
  { name: "nashe", color: "azul" },
  { name: "mario", color: "verde" },
  { name: "urbo", color: "rojo" },
  { name: "orale", color: "morado" },
  { name: "deply", color: "cafe" },

];



export function CreateUser(){
const [persona, setPersona] = useState([{name: "Alex"},{name: "Roberto"}, {name: "Teresa"}, {name: "Dany"}])
const [value, setValue] = useState("")


  useEffect(()=>{
  console.log(persona)
  },[persona])

return <>
<div>
  <input onChange={(e)=> {
  setValue(e.target.value)
  console.log(value)
}}></input>

<button onClick={()=>{
const newPersona = {name : value}
const addPersona = [...persona, newPersona]
setPersona(addPersona)
}}>
  Save
  </button>

  </div>
                                                              <p></p>
<div>
  
<button onClick={async()=>{

let exclued = []

 await setPersona(persona.map((p) => {

  let random;
  do {
    random = Math.floor(Math.random() * persona.length + 1);
  } while (exclued.includes(random));

   exclued.push(random);
  return { ...p, num: random };

  
}
));
await setPersona(persona.sort((a,b)=>{
    if (a.num > b.num) {
      return 1
    } else {
      return -1
    }
  
  })
)

exclued = []

setPersona(persona.map((p) => {

  let random;
  do {
    random = Math.floor(Math.random() * persona.length + 1);
  } while (exclued.includes(random));

   exclued.push(random);
  return { ...p, num: random };

  
}
));


}}>Generate</button>

{persona.map((u, i)=>{
  return <div key={i}> 
<h1>{u.name}</h1>
  <p>{u.num}</p>
  </div>
})}
</div>
</>
}



  


let excludedN = []


  const usersWithNumero = users.map((user, i) => {
    let randomNumber;
  
    do {
      randomNumber = Math.floor(Math.random() * users.length + 1)
  
    } while (excludedN.includes(randomNumber));
    
    excludedN.push(randomNumber)

    return  { ...user, numero: randomNumber};
  });

console.log(usersWithNumero)

function App() {


  return <div>
    {/* {usersWithNumero.map((u, i) =>(
      <div key={i}>
        <h1>{u.name}</h1>
        <p>{u.numero}</p>
      </div>

    ))} */}

  </div>
  
  
}

export default App;
