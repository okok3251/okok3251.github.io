import styled from "styled-components"


export const HeaderContainer = styled.header`
    padding : 1rem 1.5rem;
    display : flex;
    justify-content : space-between;
    align-items : center;
    position : sticky;
    top : 0;
    z-index : 100;
    border-bottom: 1px solid #9c9c9c
`;

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.fontSizes.md};
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.text};
`;

export const BotInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BotName = styled.h3`
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

export const BotStatus = styled.span`
  font-size: ${props => props.theme.fontSizes.sm};
  color: green;
`;

export const HeaderActions = styled.div`
  display: flex;
  justify-content: center;
  align-items : center;
  gap: 0.5rem;
`;

export const DeleteButton = styled.button`
  position: relative;
  padding: 0.5em;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1em;
  transition: transform 0.2s ease;

  &:hover svg {
    transform: scale(1.08) rotate(3deg);
  }

  &:active svg {
    transform: scale(0.96) rotate(-1deg);
  }

  &:hover g#lid-group {
    transform: rotate(-28deg) translateY(2px);
  }

  &:active g#lid-group {
    transform: rotate(-12deg) scale(0.98);
  }
`;

export const TrashSVG = styled.svg`
  width: 1.8em;
  height: 1.8em;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  overflow: visible;
`;

export const LidGroup = styled.g`
  transform-origin: 12 18;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

export const TrashRect = styled.rect``;


export const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${props => props.theme.colors.text};
  }
`;

