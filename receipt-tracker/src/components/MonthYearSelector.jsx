import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material';
import { DateRange } from '@mui/icons-material';

const MonthYearSelector = ({ selectedMonth, selectedYear, onMonthChange, onYearChange }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      <DateRange sx={{ mr: 1 }} />
      <FormControl sx={{ mr: 2, minWidth: 120 }}>
        <InputLabel>月份</InputLabel>
        <Select
          value={selectedMonth}
          onChange={(e) => onMonthChange(e.target.value)}
          label="月份"
        >
          {months.map((month) => (
            <MenuItem key={month} value={month}>
              {month}月
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>年份</InputLabel>
        <Select
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
          label="年份"
        >
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MonthYearSelector;