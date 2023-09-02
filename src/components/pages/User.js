import React, {useState} from 'react'
import LogIn from '../LogIn'
import SignUp from '../SignUp';
function User() {
    const [currentForm,setCurrentForm] = useState('login');
    const toggleForm = (name) =>{
        setCurrentForm(name);
    }

  return (
    <>
        {
            currentForm === "login" ? <LogIn onFormSwitch={toggleForm}></LogIn> : <SignUp onFormSwitch={toggleForm}></SignUp>
        }
    </>
  )
}

export default User