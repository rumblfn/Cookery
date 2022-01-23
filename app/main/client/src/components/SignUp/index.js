import { useState } from "react";
import { auth, db } from "../../firebase";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../Login/loginAndSignUpStyles.css'
import Button from '@mui/material/Button';

export const Registration = () => {
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
            await auth.createUserWithEmailAndPassword(email, password);

            setEmail('')
            setPassword('')
            
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='mainPage'>
            <form onSubmit={handleSubmit}>
                <p>Fill in the form below to register new account.</p>
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
                        name="email"
                        type="email"
                        color="background"
                        onChange={handleEmailChange}
                        value={email}
                        sx={{m: 1, mt: 3}}
                    />
                    <TextField
                        sx={{m: 1, mb: 3}}
                        id="demo-helper-text-misaligned-no-helper"
                        label="Password"
                        name="password"
                        color="background"
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
                    >Sign up
                    </Button>
                </div>
                <br/>
                <p>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </form>
        </div>
    );
}