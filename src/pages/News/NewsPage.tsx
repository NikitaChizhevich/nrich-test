import React, { useEffect } from 'react';
import { NewsItem } from '../../shared/components/NewsItem/NewsItem';
import { PageWrapper } from '../../shared/components/StyledComponents';
import { fetchNews, selectNews } from '../../store/slices/news.slice';
import { useAppDispatch, useAppSelector } from '../../utils/custom-hooks';

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