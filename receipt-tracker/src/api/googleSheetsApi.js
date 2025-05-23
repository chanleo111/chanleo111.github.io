import axios from 'axios';

// 替換為你的Google Apps Script部署URL
const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';

export const googleSheetsApi = {
  getReceipts: async (month, year) => {
    try {
      const response = await axios.get(
        `${SCRIPT_URL}?action=getReceipts&month=${month}&year=${year}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching receipts:', error);
      throw error;
    }
  },

  getMonthlySummary: async () => {
    try {
      const response = await axios.get(`${SCRIPT_URL}?action=getMonthlySummary`);
      return response.data;
    } catch (error) {
      console.error('Error fetching monthly summary:', error);
      throw error;
    }
  },

  uploadReceipt: async (formData) => {
    try {
      const response = await axios.post("https://script.google.com/u/0/home/projects/1Ewth5kCV-M0S-He9PMzOPHvBYLchQrwkmWHNxxsH2XHm3MlqwsCFRnqK/edit", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error uploading receipt:', error);
      throw error;
    }
  },
};