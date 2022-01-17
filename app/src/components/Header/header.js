import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import './linkSpanStyle.css'

export const Header = () => {
    return (
        <Box sx={{height: '64px', m: 0, p: 0, mb: 6}}>
            <AppBar className='container'
                position="static"
                sx={{ background: 'white', boxShadow: 'none'}}
            >
                <Toolbar sx={{
                    display: "flex",
                    justifyContent: 'space-between',
                }}>
                    <div>
                        <Typography
                            variant="h6"
                            component="span"
                            fontSize='30px'
                        >
                            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                                <span className='gradient-text heading'>Cookery</span>
                            </Link>
                        </Typography>
                    </div>
                    <div>
                        <Typography
                            variant="h6"
                            component="span"
                            fontSize='24px'
                        >
                            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                                <span className='gradient-text'>login / </span>
                            </Link>
                        </Typography>
                        <Typography
                            variant="h6"
                            component="span"
                            fontSize='24px'
                        >
                            <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
                                <span className='gradient-text'>Registration / </span>
                            </Link>
                        </Typography>
                        <Typography
                            variant="h6"
                            component="span"
                            fontSize='24px'
                        >
                            <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>
                                <span className='gradient-text'>Profile / </span>
                            </Link>
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </Box >
    )
}