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
  Button,
} from '@mui/material';

const ReceiptList = ({ receipts }) => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        收據記錄
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>日期</TableCell>
              <TableCell>類別</TableCell>
              <TableCell>描述</TableCell>
              <TableCell align="right">金額</TableCell>
              <TableCell>收據</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {receipts.map((receipt, index) => (
              <TableRow key={index}>
                <TableCell>{receipt.date}</TableCell>
                <TableCell>{receipt.category}</TableCell>
                <TableCell>{receipt.description}</TableCell>
                <TableCell align="right">${receipt.amount}</TableCell>
                <TableCell>
                  {receipt.receiptUrl && (
                    <Button
                      variant="outlined"
                      size="small"
                      href={receipt.receiptUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      查看
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ReceiptList;