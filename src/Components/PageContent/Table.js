import React from 'react';
import '../../App.css'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <div className='productTable'>
      <div>
        <Typography
          color='inherit'
          sx={{ flexGrow: 1, fontSize: '30px' }}
        >
          Products
        </Typography>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, height: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className='tableHeader'>Dessert (100g serving)</TableCell>
              <TableCell className='tableHeader' align="right">Calories</TableCell>
              <TableCell className='tableHeader' align="right">Fat&nbsp;(g)</TableCell>
              <TableCell className='tableHeader' align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell className='tableHeader' align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className='table-body'>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell className='tableBody' component="th" scope="row">{row.name}</TableCell>
                <TableCell className='tableBody' align="right">{row.calories}</TableCell>
                <TableCell className='tableBody' align="right">{row.fat}</TableCell>
                <TableCell className='tableBody' align="right">{row.carbs}</TableCell>
                <TableCell className='tableBody' align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
