import React, { FC } from 'react';
import { INewsItem } from '../../interfaces/news-item';
import { NewsItemContainer, NewsItemInfo, NewsItemTags, NewsItemTitle } from './styles';

export const NewsItem: FC<INewsItem> = ({ author, title, date, tags, text }) => {
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