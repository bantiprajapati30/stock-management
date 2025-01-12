'use client'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../lib/axios'

export const createCategory = createAsyncThunk(
  'category/createCategory',
  async (categoryData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/category/add-category', categoryData); // Make sure categoryData is correct
      console.log(response.data, "Category Created");
      return response.data;
    } catch (error) {
      console.error(error); // Log the error for debugging
      return rejectWithValue("Failed to create category");
    }
  }
);
