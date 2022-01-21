import Paper from '@mui/material/Paper';
import { auth, db } from "../../firebase";
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';


export const PersonalInformation = () => {
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

    let css = { display: 'flex', justifyContent: 'space-between', margin: '1%' }

    if (useMediaQuery('(max-width:525px)')) {
        css = { display: 'flex', flexDirection: 'column', margin: '2%' }
    }

    return (
        <div style={css}>
            <div>
                <h2 style={{
                    fontFamily: 'Roboto',
                }}> Личная информация
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
    )
}