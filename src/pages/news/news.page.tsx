import React, { useEffect } from 'react';
import { NewsItem } from '../../shared/components/news-item/news-item';
import { PageWrapper } from '../../shared/components/styled-components';
import { fetchNews, selectNews } from '../../slices/news.slice';
import { useAppDispatch, useAppSelector } from '../../utils/functions';

export const NewsPage = () => {
  const news = useAppSelector(selectNews);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <PageWrapper>
      {news.map(n => (<NewsItem key={n.title} {...n} />))}
    </PageWrapper>
  )
};