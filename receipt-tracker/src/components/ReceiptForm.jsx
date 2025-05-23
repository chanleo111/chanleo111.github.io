import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Typography,
} from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

const ReceiptForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    amount: '',
    category: '',
    description: '',
    receiptImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      receiptImage: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      date: '',
      amount: '',
      category: '',
      description: '',
      receiptImage: null,
    });
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        上傳新收據
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          type="date"
          name="date"
          label="日期"
          InputLabelProps={{ shrink: true }}
          value={formData.date}
          onChange={handleInputChange}
          required
        />

        <TextField
          fullWidth
          margin="normal"
          type="number"
          name="amount"
          label="金額"
          value={formData.amount}
          onChange={handleInputChange}
          required
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>類別</InputLabel>
          <Select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <MenuItem value="飲食">飲食</MenuItem>
            <MenuItem value="交通">交通</MenuItem>
            <MenuItem value="購物">購物</MenuItem>
            <MenuItem value="娛樂">娛樂</MenuItem>
            <MenuItem value="住宿">住宿</MenuItem>
            <MenuItem value="其他">其他</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          margin="normal"
          name="description"
          label="描述"
          multiline
          rows={2}
          value={formData.description}
          onChange={handleInputChange}
        />

        <Button
          variant="contained"
          component="label"
          startIcon={<CloudUpload />}
          sx={{ mt: 2, mr: 2 }}
        >
          選擇收據圖片
          <input
            type="file"
            hidden
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </Button>

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          上傳收據
        </Button>
      </form>
    </Paper>
  );
};

export default ReceiptForm;