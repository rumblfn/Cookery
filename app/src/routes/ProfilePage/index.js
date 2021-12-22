import Paper from '@mui/material/Paper';
import {auth, db} from "../../firebase";
import Typography from '@mui/material/Typography';


export const ProfilePage = () => {
    let userData = db.ref(auth.currentUser.email.match(/[^\.]/gi).join(''));
    let profileData = {}
    userData.on('value', snapshot => {
        profileData = snapshot.val();
    })
    return (
        <div style={{ 
            marginLeft: '25%',
            display: 'flex',
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
                                {profileData.mail}
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
                    src={profileData.profile_picture} alt='profile'/>
            </div>
        </div>
    )
}