import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Chart from '../PageContent/Chart';
import Table from '../PageContent/Table';

function Dashboard() {
  return (
    <div className='App'>
       
    <Toolbar />
        <div className='main-manue'>
            <Chart />
            <Table />
        </div>      
     

    </div>
  )
}

export default Dashboard
