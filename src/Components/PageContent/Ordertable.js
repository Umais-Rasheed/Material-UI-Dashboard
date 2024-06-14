// OrderTable.jsx
import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, TextField,
  IconButton, 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// Sample data for the orders
const orders = [
  { id: 1, date: '2024-06-01', customer: 'John Doe', total: 100 },
  { id: 2, date: '2024-06-01', customer: 'Jane Smith', total: 150 },
  { id: 3, date: '2024-06-05', customer: 'Alice Johnson', total: 2200 },
  { id: 4, date: '2024-06-05', customer: 'Dono lodo', total: 300 },
  { id: 5, date: '2024-06-10', customer: 'Musali brand', total: 450 },
  { id: 6, date: '2024-06-10', customer: 'kende', total: 600 },
  { id: 7, date: '2024-06-15', customer: 'Ronica', total: 1000 },

];

const OrderTable = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const filteredOrders = orders.filter(order => {
    const orderDate = new Date(order.date);
    return (
      (!startDate || orderDate >= new Date(startDate)) &&
      (!endDate || orderDate <= new Date(endDate))
    );
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TextField
                  label="Start Date"
                  type="date"
                  value={startDate ? startDate.toISOString().substring(0, 10) : ''}
                  onChange={(e) => setStartDate(e.target.value ? new Date(e.target.value) : null)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  label="End Date"
                  type="date"
                  value={endDate ? endDate.toISOString().substring(0, 10) : ''}
                  onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
              <TableCell>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LocalizationProvider>
  );
};

export default OrderTable;
