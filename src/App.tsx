import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Typography, Grid, TableCell, TableRow, TableBody, Table, TableContainer, Card, CardHeader, CardContent } from '@mui/material';

const DATA_INITIAL_STATE = [
    {
      image:"img product 1",
      title: 'My Christmas pack',
      quantity: 30,
      description:"CardBoard box (container)" ,
      Price: 71.20
    },
    {
      image:"img product 2",
      title: 'Basic T-shirt',
      quantity: 10,
      description:"",
      Price: 13.50
    },
    {
      image:"img product 3",
      title: 'Woman bottle',
      quantity: 20,
      description:"",
      Price: 36.50 
    }
  ]

function App() {
  const gridContent = (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    >
        {/* <Grid item xs={12} ms={12} md={12} xl={12} lg={12}> */}
        <Grid item xs={6}>
        <Typography variant="h6" color="black" align="left" >
            Your card()
        </Typography>

          <Card>
            <CardHeader>
            </CardHeader>
            <CardContent>
              <Typography variant="h6" color="primary" >
                card content
              </Typography>
            </CardContent>
          </Card>
          
        </Grid> 
        <Grid item xs={3}>
        <Typography variant="h6" color="black" align="left" >
            Order Summary
        </Typography>
        <Card>
            <CardHeader>
            </CardHeader>
            <CardContent>
              <Typography variant="h6" color="primary" >
                card content
              </Typography>
            </CardContent>
          </Card>
        </Grid> 
    </Grid>       
    )
  return (
    
    <div className="App">
      
      <header>
          Learn React
      </header>
      <div>
        {gridContent}
      {/* <TableContainer>
        <Table>
          <TableBody >
            <TableRow>
              <TableCell >
                  celda 1 
              </TableCell>
              <TableCell>
                  celda 2
              </TableCell>
              
            </TableRow>
            <TableRow>
                Fila 2
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer> */}
      </div>
    </div>
  );
}

export default App;
