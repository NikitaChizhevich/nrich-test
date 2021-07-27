import React from 'react';
import { PageWrapper } from '../../shared/components/styled-components';
import { ProfileAvatar } from '../../shared/components/profile-avatar/Profile-avatar';
import { useGuard } from '../../utils/functions';

export const ProfilePage = () => {
  useGuard();
  return (
    <PageWrapper>
      Profile Page
      <ProfileAvatar />
    </PageWrapper>
  )
}