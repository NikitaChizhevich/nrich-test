import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { RootState } from "../App.store";
import { INewsItem } from "../../shared/interfaces/news-item";


interface NewsState {
  news: INewsItem[],
}

const initialState: NewsState = {
  news: [],
}

export const fetchNews = createAsyncThunk('news/fetchData', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/mock/news.json`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});


export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchNews.fulfilled, (state, { payload }) => {
        state.news = payload;
      });
  }
});

export const selectNews = (state: RootState) => state.newsSlice.news;