import React from 'react';
import { Card } from 'react-bootstrap';
import AvatarImg from '../../../assets/avatar.png'
import { getAuthData } from '../../../utils/functions';
import { ProfileCardImg, ProfileCard } from './styles';
export const ProfileAvatar = () => {
  const authData = getAuthData();
  return (
    <div>
      <ProfileCard>
        <ProfileCardImg src={AvatarImg} />
        <Card.Body>
          <Card.Title>{authData.userName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </ProfileCard>
    </div>)
};