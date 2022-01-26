import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';


export const PersonalInformation = ({mail, name, likes}) => {
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
                            mb: 2
                        }}>
                        <Typography variant="h6">
                            {mail}
                        </Typography>
                    </Paper>
                </div>
                <div>
                    <Paper
                        elevation={2}
                        sx={{
                            p: 2,
                        }}>
                        <Typography variant="h6">
                            {name}
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
                    src="https://picsum.photos/200" alt='profile' />
            </div>
        </div>
    )
}