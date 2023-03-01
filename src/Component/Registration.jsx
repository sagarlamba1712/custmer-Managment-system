import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Registration() {

    const navbar = useNavigate();

    const [text, setText] = useState({
        name: "",
        email: "",
        password: ""
    })
    // console.log(text)

    const [data, setdata] = useState([])

    const handlefoam = (e) => {
        // console.log(e.target.value)
        const { value, name } = e.target;
        //  console.log(value,name);

        setText(() => {
            return {
                ...text,
                [name]: value
            }
        })
    }

    const adddata = (e) => {
        e.preventDefault()
        //    console .log(text)

        const { name, email, password } = text;

        if (name === "") {
            alert('name field is required')
        } else if (email === "") {
            alert('email field is required');
        } else if (!email.includes('@')) {
            alert('please enter valid email')
        } else if (password === "") {
            alert('password field is required')
        } else if (password.length <= 5) {
            alert("pasword length is to short")
        } else {
            alert('data add sucessfull');

            localStorage.setItem('usersagar', JSON.stringify([...data, text]));

            navbar('/Login')
        }
    }


    return (
        <div>
            <h1>SignUp</h1>
            <Form>
                <Form.Group className="mb-3 col-lg-5" controlId="formBasicUsername">
                    <Form.Control type="text" name='name' onChange={handlefoam} placeholder="Enter username" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' onChange={handlefoam} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 col-lg-5" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' onChange={handlefoam} placeholder="Password" />
                    We'll never share your passward with anyone else.
                </Form.Group>
                <Button variant="primary" type="submit" onClick={adddata}>
                    Submit
                </Button>
            </Form>
            <p className='mt-3'>Already Have An Account <span> <NavLink to="/Login">Singin</NavLink></span></p>
        </div>
    )
}
