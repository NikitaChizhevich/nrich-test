import React from 'react';
import { NewsItem } from '../../shared/components/news-item/news-item';
import { PageWrapper } from '../../shared/components/styled-components';
import { mockDataNews } from '../../utils/mockData';

export const NewsPage = () => {

  return (
    <PageWrapper>
      {mockDataNews.map(n => (<NewsItem key={n.title} {...n} />))}
    </PageWrapper>
  )
};