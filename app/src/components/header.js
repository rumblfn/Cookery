import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import './linkSpanStyle.css'

export const Header = () => {
    return (
        <AppBar 
            position="static"
            sx={{backgroundColor: 'rgb(81, 20, 122)', height: '64px', m: 0, p: 0}}>
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
                        <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
                            <span className='gradient-text'>Cookery</span>
                        </Link>
                    </Typography>
                </div>
                <div>
                    <Typography
                        variant="h6"
                        component="span"
                        fontSize='24px'
                    >
                        <Link to="/login" style={{ textDecoration: 'none', color: 'white'}}>
                            <span className='gradient-text'>Login / </span>
                        </Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                        fontSize='24px'
                    >
                        <Link to="/signup" style={{ textDecoration: 'none', color: 'white'}}>
                            <span className='gradient-text'>Registration / </span>
                        </Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                        fontSize='24px'
                    >
                        <Link to="/profile" style={{ textDecoration: 'none', color: 'white'}}>
                            <span className='gradient-text'>Profile / </span>
                        </Link>
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}