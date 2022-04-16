import React, { FC, useState } from 'react';
import * as Styled from './styles';
import DarkIcon from 'resources/images/darkMode.svg?component';
import LightIcon from 'resources/images/lightMode.svg?component';

const Header:FC = () => {  
    const [darkMode, setDarkMode] = useState<boolean>(true);
    
  return (
    <Styled.Header>
        <Styled.HeaderContainer>
            <Styled.Leftside>
                <Styled.Link>Home</Styled.Link>
                <Styled.Link>PX Switch</Styled.Link>
                <Styled.Link>Interview FAQ</Styled.Link>
            </Styled.Leftside>

            <Styled.Rightside>
                <Styled.Link>Home</Styled.Link>
                <Styled.SVG darkMode={darkMode}>
                    <DarkIcon onClick={() => setDarkMode(true)} /> 
                    <LightIcon onClick={() => setDarkMode(false)} />
                </Styled.SVG>
            </Styled.Rightside>
        </Styled.HeaderContainer>
    </Styled.Header>
  )
}

export default Header;