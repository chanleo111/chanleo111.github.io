import { googleSheetsApi } from './googleSheetsApi';

export const receiptService = {
  fetchReceipts: async (month, year) => {
    return await googleSheetsApi.getReceipts(month, year);
  },

  fetchMonthlySummary: async () => {
    return await googleSheetsApi.getMonthlySummary();
  },

  submitReceipt: async (receiptData) => {
    const formData = new FormData();
    Object.keys(receiptData).forEach((key) => {
      formData.append(key, receiptData[key]);
    });
    return await googleSheetsApi.uploadReceipt(formData);
  },
};