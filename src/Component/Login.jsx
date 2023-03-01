import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const history = useNavigate();

    const [text, setText] = useState({
        email: "",
        password: ""
    })
    // console.log(text)

    // const [data, setdata] = useState([])

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

        const getUserArr = localStorage.getItem('usersagar')
        console.log(getUserArr)

        const { email, password } = text;


        if (email === "") {
            alert('email field is required');
        } else if (!email.includes('@')) {
            alert('please enter valid email')
        } else if (password === "") {
            alert('password field is required')
        } else if (password.length <= 5) {
            alert("pasword length is to short")
        } else {

            if (getUserArr && getUserArr.length) {
                const userdata = JSON.parse(getUserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });
                if (userlogin.length === 0) {
                    alert('invalid details')
                } else {
                    console.log('user login successfully')
                    history("/Header")
                }
            }
        }
    }

    return (
        <div>
            <h1>login</h1>
            <Form>
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


        </div>
    )
}
