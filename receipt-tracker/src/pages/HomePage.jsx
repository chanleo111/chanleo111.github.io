import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import { AttachMoney } from '@mui/icons-material';
import MonthYearSelector from '../components/MonthYearSelector';
import ReceiptForm from '../components/ReceiptForm';
import MonthlySummary from '../components/MonthlySummary';
import ReceiptList from '../components/ReceiptList';
import { receiptService } from '../api/receiptService';

const HomePage = () => {
  const currentDate = new Date();
  const [receipts, setReceipts] = useState([]);
  const [monthlySummary, setMonthlySummary] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [receiptsData, summaryData] = await Promise.all([
          receiptService.fetchReceipts(selectedMonth, selectedYear),
          receiptService.fetchMonthlySummary(),
        ]);
        setReceipts(receiptsData);
        setMonthlySummary(summaryData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedMonth, selectedYear]);

  const handleSubmit = async (formData) => {
    try {
      await receiptService.submitReceipt(formData);
      const [receiptsData, summaryData] = await Promise.all([
        receiptService.fetchReceipts(selectedMonth, selectedYear),
        receiptService.fetchMonthlySummary(),
      ]);
      setReceipts(receiptsData);
      setMonthlySummary(summaryData);
      alert('收據上傳成功！');
    } catch (error) {
      console.error('Error submitting receipt:', error);
      alert('上傳失敗，請重試。');
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <AttachMoney fontSize="large" sx={{ mr: 1 }} />
          <h1>收據上傳與支出追蹤系統</h1>
        </Box>

        <ReceiptForm onSubmit={handleSubmit} />

        <MonthYearSelector
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          onMonthChange={setSelectedMonth}
          onYearChange={setSelectedYear}
        />

        <MonthlySummary
          summary={monthlySummary}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
        />

        <ReceiptList receipts={receipts} />
      </Box>
    </Container>
  );
};

export default HomePage;