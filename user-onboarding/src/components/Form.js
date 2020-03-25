import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import axios from "axios";

function Form() {
    const [formState, setFormState] = useState({
           name: '',
           email: '',
           password: '',
           terms: ''   
    });
    
    const [post, setPost] = useState([]);

    const inputChange = e => {
        e.persist();
        const newInputData = {
            ...formState,[e.target.name]:e.target.type === 'checkbox' ? e.target.checked : e.target.value
        };
        setFormState(newInputData);
    }
    
    const formSubmit = e => {
        e.preventDefault();
        axios
        .post('https://reqres.in/api/users', formState)
        .then(res => {
            setPost(res.data);
        
            setFormState({
                name: '',
                email: '',
                password: '',
                terms: ''
            });
            
        }).catch(err => {
            console.log(err.res);
        });
    }
    
    return(
        <form onSubmit={formSubmit}>
            <label htmlFor='name'>
                Name
                <input
                    id='name'
                    type='text'
                    name='name'
                    value={formState.name}
                    onChange={inputChange}
                />
            </label>
            <label htmlFor='email'>
                Email
                <input 
                    id='email'
                    type='text'
                    name='email'
                    value={formState.email}
                    onChange={inputChange}
                />
            </label>
            <label htmlFor='password'>
                Password
                <input
                    id='password'
                    type='text'
                    name='password'
                    value={formState.password}
                    onChange={inputChange}
                />
            </label>
            <label htmlFor='terms'>
                <input
                    type='checkbox'
                    name='terms'
                    checked={formState.terms}
                    onChange={inputChange}
                />
                Terms and Conditions
            </label>
            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button>Submit</button>
        </form>

    )
}

export default Form; 