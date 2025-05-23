import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const MonthlySummary = ({ summary, selectedMonth, selectedYear }) => {
  const filteredSummary = summary.filter(
    (item) => item.month === selectedMonth && item.year === selectedYear
  );

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        {selectedYear}年{selectedMonth}月支出摘要
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>類別</TableCell>
              <TableCell align="right">金額</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSummary.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.category}</TableCell>
                <TableCell align="right">${item.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default MonthlySummary;