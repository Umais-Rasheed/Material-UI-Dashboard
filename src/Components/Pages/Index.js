import React from 'react';
import IndexTable from '../PageContent/IndexTable';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function index() {
  return (
    <div className='App'>
      <Toolbar />
      <div className='main-manue'>
      <div>
        <Typography
          color='inherit'
          sx={{ flexGrow: 1, fontSize: '30px' }}
        >
          Dashboard Home
        </Typography>
      </div>
        <IndexTable />
      </div>     
    </div>
  )
}

export default index
