import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

export const Search = ({format}) => {
    return (
        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '30%' }}>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Искать" inputProps={{ 'aria-label': 'search' }}/>
            <IconButton sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }}>
            </IconButton>
        </Paper>
    )
}