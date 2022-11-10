import { useState } from 'react';
import './App.css';
import { Details } from './Details';
import { Table } from './Table';

function App() {
  const [fname,setFname] = useState("")
  const [lname,setLname] = useState('')
  const [email,setEmail] = useState('')
  const [number,setNumber] = useState('')
  return (
    <>
        <div className="App">
          <Details 
           fname={fname}
          setFname={setFname}
          // lname={lname}
          // setLname={setLname}
          // email={email}
          // setEmail={setEmail}
          // number={number}
          // setNumber={setNumber}
          /><br/>
          <Table/>
        </div>
          
    </>
  );
}

export default App;
