import Business from './components/business';
import React, { useState } from 'react';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
require('isomorphic-fetch');
import {Component} from 'react';
import indexCSS from './css/index.module.css';
import boxCSS from './namecss/input.module.css';
import businessCSS from './css/business.module.css';
import descriptionCSS from './css/description.module.css';
import submitCSS from './css/button.module.css';


const FormContainer = () => {
    const url = "http://localhost:3200/shop/postData" 
    const [data,setData] = useState({
        email:"",
        firstname:"",
        lastname:""
    })
    const [formErrors,setFormErrors] = useState({
    })
    const [isSubmit,setIsSubmit] = useState(false);

   const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(data));
    setIsSubmit(true);
   };

//Validation form theo email, firstname, lastname
   useEffect(()=> {
    if(Object.keys(formErrors).length === 0 && isSubmit){
        router.push('/table');
        submit();
    }
   },[formErrors])
   const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.firstname){
        errors.firstname = "First Name is required!";
    }
    if(!values.email){
        errors.email = "Email is required!";
    } else if(!regex.test(values.email)) {
        errors.email = "Email is invalid!";
    }
    if(!values.lastname){
        errors.lastname = "Last Name is required!";
    }
    return errors;
   };
    //post data lên server
    async function submit(e){

        try {
            let resJSON = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                domain: "tramln",
                token:"1207",
                  email:data.email,
                  firstname:data.firstname,
                  lastname:data.lastname
                })
              });

        }catch(e){
            console.log(e)
        }
        
        };
    

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)

    };

    const router = useRouter();

    return (

        <div className = {indexCSS.registrationformcontainer}>
            <form className = {indexCSS.signupform}>
            <div className = {indexCSS.titleform}>
            <h2>Simple Form</h2>
            <h5>A Simple HTML Form</h5>
            </div>
            <br/>
                <div>
                    <label htmlFor = "email" className="form-email">Email</label>
                    <input onChange = {(e)=>handle(e)} name = "email" id = "email" value = {data.email} type = "email" className= {indexCSS.inputemail}/>
                    <span className = {descriptionCSS.error} id = "error-email">{formErrors.email}</span>
                </div>
                <div className = {boxCSS.fullnamediv}>
                        <div className = {boxCSS.firstnamediv}>
                            <label htmlFor = "firstname">First Name</label>
                            <input onChange = {(e)=>handle(e)} name = "firstname-form" id = "firstname" value = {data.firstname} className= {boxCSS.loginnamebox} type = "text"/>
                            <span className = {descriptionCSS.error} id = "firstnameerror">{formErrors.firstname}</span>
                        </div>
                        <div className = {boxCSS.lastnamediv}>
                            <label htmlFor = "lastname">Last Name</label>
                            <input onChange = {(e)=>handle(e)} name = "lastname-form" id = "lastname" value = {data.lastname} className= {boxCSS.loginnamebox} type = "text"/>
                            <span className = {descriptionCSS.error} id = "lastnameerror">{formErrors.lastname}</span>
                        </div>
                </div>
                <div className = {businessCSS.business}>
                <Business/>
                </div>
                <div className = {descriptionCSS.descriptiondiv}>
                    <label htmlFor = "description" className = "login-form__Description"> Description</label>
                    <textarea id = "description" className = {descriptionCSS.description}></textarea>
                </div>
            <div className = {submitCSS.buttondiv}>
                
                <input className = {submitCSS.submit} id = "loginbutton" type="submit" value = "Save" onClick = {handleSubmit} />

                <Link href="/table">
                <button id = "cancelbutton" className = {submitCSS.cancel}>Cancel</button>
                </Link>
                
            </div>
            </form>
        </div>
    );
}

export default FormContainer;




