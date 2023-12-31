import axios from 'axios';
import './App.css';
import React, {useState, useEffect} from 'react';

   

function App() {
  const [data, setData] = useState();
  
 
  useEffect(() => {
    async function getData(){
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=harry+potter`
    );
    
    console.log(response.data.items)
    setData(response.data.items)
    }
     getData();
  }, [])
  
  
  return (
    <div className="App">
      <h1>hello</h1>
     
      {data &&
          data.map(( data ) => (
            
              // <h3>{data.volumeInfo.title}</h3>

               <img className="style" src={data.volumeInfo.imageLinks?.thumbnail}/>
               
            
          ))}
    
      {/* <button onClick={displayData}>hello</button>
      {
        <h1>{data.volumeInfo.title}</h1>
      } */}
          
    </div>
  );
}

export default App;
