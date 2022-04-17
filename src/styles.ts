import ThemeType from 'helpers/types/ThemeType';
import styled from 'styled-components';

export const App = styled.div<ThemeType>`
    background-color: ${props => props.darkMode ? 'black' : 'white'};
`;
