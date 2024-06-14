import './App.css';
import Customers from './Components/Pages/Customers';
import Orders from './Components/Pages/Orders';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Pages/Dashboard';
import Index from './Components/Pages/Index';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Navigation />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <div className='main-menu'>
              <Routes>
                <Route path="/" element={ <Index /> }/>
                <Route path="/index" element={ <Navigate to="/" replace />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Orders" element={<Orders />} />
                <Route path="/Customers" element={<Customers />} />
              </Routes>
            </div>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
