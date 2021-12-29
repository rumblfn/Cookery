import { useState } from "react";
import {auth} from "../../firebase";
import {Link} from 'react-router-dom';
import './loginAndSignUpStyles.css'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('')
            setPassword('')
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='mainPage'>
            <form onSubmit={handleSubmit}>
                <p>Fill in the form below to login to your account.</p>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    <TextField
                        id="demo-helper-text-misaligned-no-helper"
                        label="Email"
                        color="background"
                        name="email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                        sx={{m: 1, mt: 3}}
                    />
                    <TextField
                        sx={{m: 1, mb: 3}}
                        id="demo-helper-text-misaligned-no-helper"
                        color="background"
                        label="Password"
                        name="password"
                        onChange={handlePassChange}
                        value={password}
                        type="password"
                    />
                </Box>
                <div>
                    {error && <p>{error}</p>}
                    <Button 
                        style={{
                            borderColor: "#000000",
                            color: '#000000',
                        }}
                        variant="outlined" 
                        type="submit"
                    >Login
                    </Button>
                </div>
                <br/>
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    );
};