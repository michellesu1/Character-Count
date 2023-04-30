import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [paragraph, setParagraph] = useState('');
  const [count, setCount] = useState('');

  const baseURL = "http://localhost:8000/count";
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // make a POST request to the back-end
    const response = await axios.post(baseURL, { text: paragraph });
    setCount(response.data.count); //update the count
  };
 
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          className="textbox"
          placeholder="Please enter a paragraph"
          value={paragraph}
          onChange={(event) => setParagraph(event.target.value)}
        ></textarea>
       
        <button className="submit" type="submit">
          Count Characters
        </button>
      </form>

      {count !== '' && (
        <div className="result">
          Character count:
          <textarea readOnly value= {count} ></textarea> 
        </div>
      )}
      
    </div>  
  );
}

export default App;
