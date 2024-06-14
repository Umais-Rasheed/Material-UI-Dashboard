import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Ordertable from '../PageContent/Ordertable';
import Typography from '@mui/material/Typography';

function Orders() {
  return (
    <div className='App'>
      <Toolbar />
      <div className='main-manue'>
      <div>
        <Typography
          color='inherit'
          sx={{ flexGrow: 1, fontSize: '30px' }}
        >
          Orders
        </Typography>
      </div>
        <Ordertable />
      </div>     
    </div>
  )
}

export default Orders
