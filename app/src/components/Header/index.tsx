import React from 'react';
import { FiPower } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { Container, HeaderContent, Profile } from './styles';

import logoImg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <HeaderContent>
        <img src={logoImg} alt="APP" />

        <Profile>
          <img src={user.avatar_url} alt={user.name} />

          <div>
            <span>Bem-vindo</span>
            <Link to="/profile">
              <strong>{user.name}</strong>
            </Link>
          </div>
        </Profile>

        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
      </HeaderContent>
    </Container>
  );
};

export default Header;
