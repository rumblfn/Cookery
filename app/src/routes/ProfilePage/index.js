import Paper from '@mui/material/Paper';
import { auth, db } from "../../firebase";
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';


export const ProfilePage = () => {
    const [email, setEmail] = useState('')
    const [userData, setData] = useState({
        profile_picture: "https://picsum.photos/200", 
        username: "error", 
        recipes: null,
    })
    async function dataChecker () {
        setEmail(auth.currentUser.email)
    }

    useEffect(() => {
        dataChecker()
    }, []);

    return (
        <div className='container'>
            <div style={{
                marginLeft: '25%',
                display: 'flex',
                height: '80vh'
            }}>
                <div>
                    <h2 style={{
                        fontFamily: 'Roboto',
                    }}> Personal data
                    </h2>
                    <div>
                        <Paper
                            elevation={2}
                            sx={{
                                p: 2,
                            }}>
                            <Typography variant="h6">
                                {email}
                            </Typography>
                        </Paper>
                    </div>
                </div>
                <div style={{
                    marginLeft: '2%',
                    marginTop: '3%'
                }}>
                    <img style={{
                        borderRadius: '15px'
                    }}
                        src={userData.profile_picture} alt='profile' />
                </div>
            </div>
        </div>
    )
}