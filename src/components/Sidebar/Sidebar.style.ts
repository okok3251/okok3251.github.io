import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
`;

export const SidebarLogo = styled.div`
  width: 100%;                
  max-width: 300px;          
  height: auto;                
  aspect-ratio: 3 / 1;        
  margin-bottom: 24px;

  background-size: contain;    
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    max-width: 150px;       
    margin-bottom: 16px;
  }
`;

export const NewChatButton = styled.div`
  margin: 3rem 0 3rem 0;
  padding: 12px 16px;
  //background-color : var(--bg-color);
  border: none;
  border-radius: 8px;
  color: var(--text-color);
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.sm};
  text-align: left;

  &:hover {
    background-color: #c9e2fcff;
  }
`;

export const SidebarList = styled.div<{$name?: string}>`
  flex: 1;
  overflow-y: auto;

  &::before {
    content: '${props => props.$name}';
    display: block;
    padding 8px;
    font-weight: bold;
  }
`;

export const SidebarItem = styled.div`
  padding: 10px 12px;
  margin-bottom: 6px;
  border-radius: 6px;
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.xsm};
  background-color: transparent;
  transition: background 0.2s;

  &:hover {
    background-color: #343541;
  }
`;
