import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const {handleLogin, handleLogout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://reqres.in/api/login`, {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(form)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res.token);
            handleLogin(res.token);
            navigate("/products");
        })
        .catch((err) => {
            console.log(err);
        });
    };
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder='Enter Email' value={form.email} name="email" onChange={handleChange} style={{ padding: "15px 35px", width: "20em", marginTop: "40px" }}/>
            </div>
            <div>
                <input type="text" placeholder='Enter Password' value={form.password} name="password" onChange={handleChange} style={{ padding: "15px 35px", width: "20em", marginTop: "30px" }} />
            </div>
            <div>
                <input type="submit" style={{ padding: "6px 25px", width: "10em", marginTop: "30px" }}/>
            </div>
        </form>
    </div>
  )
}

export default Login