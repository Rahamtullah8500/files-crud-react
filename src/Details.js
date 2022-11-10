import React from 'react';
import './Details.css'

export const Details = ({fname,setFname,lname,email,number,country,state,city,pincode}) => {
  
  
const  onFnameChange = (event) => {
    setFname(event.target.value);
    
  }


 const onFormSubmit= (event)=>{
    event.preventDefault();
    alert(fname)
  }

  return (
    <>
        <div className='details'>
          <h1>
            Student Details
          </h1><hr/>
            <form className='form' >
                <span>
                <label htmlFor='fname' >First Name:</label><br/>
                <input type='text' id='fname'value={fname} onChange={onFnameChange} ></input>
                </span>
                <span>
                <label htmlFor='lname'>Last Name:</label><br/>
                <input type="text" name='lname' value={lname}></input>
                </span><br/>
                <h3>Address:</h3>
                <span>
                <label htmlFor='country'>Country:</label><br/>
                <input type="text" name='country'country value={country}></input>
                </span>
                <span>
                <label htmlFor='state'>State:</label><br/>
                <input type="text" name='state'country value={state}></input>
                </span>
                <span>
                <label htmlFor='city'>City:</label><br/>
                <input type="text" name='city'country value={city}></input>
                </span>
               

            </form>
            <div className='submit'>
              <button type='submit' onClick={onFormSubmit}>Submit</button>
            </div>

        </div>
    </>
  )
}
