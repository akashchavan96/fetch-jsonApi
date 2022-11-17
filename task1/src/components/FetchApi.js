import React ,{useState,useEffect}from 'react'

function FetchApi() {


const [state,setState] = useState([]);

const apiGet = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    setState(json);
  })
}


useEffect(() => {
    apiGet();
  },[]);


  return (
    <div>
    
    <h1>Todos List</h1>

    <button onClick={apiGet}>Fetch Api</button>
    

    {/* <pre>    {JSON.stringify(state,null,2)} </pre> */}

     <div>

<ul>

{state.map((item) =>(
    <li>{item.title}</li>
))}


</ul>

    </div> 

    </div>
  )
}

export default FetchApi