import React, { FC } from 'react';
import { NewsItemContainer, NewsItemInfo, NewsItemTags, NewsItemTitle } from './styles';

interface NewsItemProps {
  title: string;
  author: string;
  date: string;
  tags: string[];
  text: string;
}

export const NewsItem: FC<NewsItemProps> = ({ author, title, date, tags, text }) => {
  return (
    <NewsItemContainer>
      <NewsItemInfo>
        <div className="author">{author}</div> <div className="date">{date}</div>
      </NewsItemInfo>
      <NewsItemTitle>
        {title}
      </NewsItemTitle>
      <NewsItemTags>
        {tags.join(', ')}
      </NewsItemTags>
      <p>{text}</p>
    </NewsItemContainer>
  );
}