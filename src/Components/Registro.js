import { useEffect, useRef, useState} from 'react'
import Router from '../Routes/Routes'
import './Registro.css'
function RegistroApi(){
const name=useRef()
const email=useRef()
const password=useRef()

const[showHome,setShowHome]=useState(false)
const[show,setShow]=useState(false)

const localName=localStorage.getItem("name");
const localEmail=localStorage.getItem("email");
const localPassword=localStorage.getItem("password");
const localSignUp=localStorage.getItem("signUp");

useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    
},[localSignUp])

useEffect(()=>{
    if(localEmail){
        setShow(true)
    }
},[localEmail])
const handleClick=()=>{
    if(name.current.value&&email.current.value&&password.current.value)
    {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
    }
}

const handleSignIn=()=>{
    if(email.current.value === localEmail && password.current.value === localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
}
return(
    <div>
        {showHome?<Router/>:
        (show?
        <div className='container-login'>
            <div className='wrapper'>
                <div className='container-sign-up'>
                    <h2>Login</h2>
                    <form>
                        <h1>Welcome {localName}</h1>
                        <div className='input_box'>
                            <input placeholder='Email' type="text" className='email' ref={email}/>
                        </div>
                        <div className='input_box'>
                            <input placeholder='Password' type="password" className='password' ref={password}/>
                        </div>
                        <button className='btn' onClick={handleSignIn}>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
        :
        <div className='container-login'>
            <div className='wrapper'>
                <div className='container-sign-up'>
                    <h2>Register</h2>
                    <form>
                        <div className='input_box'>
                            <input placeholder='Name' type="text" className='name' ref={name}/>
                        </div>
                        <div className='input_box'>
                            <input placeholder='Email' type="text" className='email' ref={email}/>
                        </div>
                        <div className='input_box'>
                            <input placeholder='Password' type="password" className='password' ref={password}/>
                        </div>
                        <button className='btn' onClick={handleClick}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>)
}
    </div>
    );
}
export default RegistroApi;