import ActionButton from '@Components/ActionButton';
import React, { ReactNode } from 'react';
import { HeaderContainer, HeaderLogo, HeaderLogoContainer, HeaderWrapper } from './styles';

interface Props {
  children?: ReactNode;
}

export default function Header({ children }: Props) {
  return (
    <React.Fragment>
        <HeaderContainer className='px-12'>
            <HeaderWrapper>
              <HeaderLogoContainer>
                {/* put a degrade */}
                <HeaderLogo>💡</HeaderLogo>
                <span>SpeedDao</span>
              </HeaderLogoContainer>
              <ActionButton text={"Get Bot!"}/>
            </HeaderWrapper>
        </HeaderContainer>
    </React.Fragment>
  );
}