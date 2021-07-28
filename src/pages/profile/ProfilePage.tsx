import React from 'react';
import { PageWrapper } from '../../shared/components/StyledComponents';
import { ProfileAvatar } from '../../shared/components/profile-avatar/ProfileAvatar';
import { useGuard } from '../../utils/custom-hooks';

export const ProfilePage = () => {
  useGuard();
  return (
    <PageWrapper>
      Profile Page
      <ProfileAvatar />
    </PageWrapper>
  )
}