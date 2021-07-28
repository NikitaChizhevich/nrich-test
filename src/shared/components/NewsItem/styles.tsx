import styled from 'styled-components';

export const NewsItemContainer = styled.div`
  border-bottom: 1px solid #80808059;
  margin-bottom: 35px;
`;

export const NewsItemInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  .author {
    font-size: 16px;
    font-weight: bold;
  }
  .date {
    font-size: 14px;
    color: grey;
    padding: 3px 5px 0px 5px;
  }
`;

export const NewsItemTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;


export const NewsItemTags = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: grey;
  margin-bottom: 10px;
`;