import styled, { css, keyframes } from "styled-components";

const twinkle = keyframes`
  0%, 100% {
    opacity: 0.2;
  }

  50% {
    opacity: 1;
  }
`;

const shoot = keyframes`
  0% {
    opacity: 1;
    transform: translate(0, 0) rotate(45deg);
  }

  100% {
    opacity: 0;
    transform: translate(-800px, 800px) rotate(45deg);
  }
`;

const glow = keyframes`
  0% {
    box-shadow: none;
  }

  50% {
    background: #ffeb00;
    box-shadow: 0 0 30px orange;
  }

  100% {
    box-shadow: none;
  }
`;

const orbit = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
`;

export const Page = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(ellipse at bottom, #0b0f1a 0%, #000 80%);
`;

type StarProps = {
  $size: number;
  $top: number;
  $left: number;
  $opacity: number;
  $duration: number;
};

export const Star = styled.span<StarProps>`
  position: absolute;
  border-radius: 50%;
  background: white;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  opacity: ${({ $opacity }) => $opacity};
  animation: ${twinkle} ${({ $duration }) => `${$duration}s`} linear infinite;
`;

type ShootingStarProps = {
  $top: number;
  $left: number;
};

export const ShootingStar = styled.span<ShootingStarProps>`
  position: absolute;
  width: 2px;
  height: 80px;
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  background: linear-gradient(-45deg, white, rgba(255, 255, 255, 0));
  transform: rotate(45deg);
  opacity: 0;
  pointer-events: none;
  animation: ${shoot} 1s linear forwards;
`;

export const Solar = styled.div`
  position: relative;
  z-index: 2;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: orange;
  animation: ${glow} 1.5s linear infinite;
`;

type OrbitRingProps = {
  $size: number;
  $planetSize?: number;
  $planetColor?: string;
  $duration?: number;
  $planetOffset?: number;
  $borderWidth?: number;
  $borderColor?: string;
  $withRing?: boolean;
};

export const OrbitRing = styled.i<OrbitRingProps>`
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  margin: ${({ $size }) => `${$size / -2}px`};
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transform-origin: 50% 50%;
  pointer-events: none;
  animation: ${({ $duration }) => ($duration ? css`${orbit} ${$duration}s linear infinite` : "none")};

  &::before {
    content: "";
    position: absolute;
    right: 45%;
    top: ${({ $planetOffset = -5 }) => `${$planetOffset}px`};
    display: ${({ $planetSize, $planetColor }) => ($planetSize && $planetColor ? "block" : "none")};
    width: ${({ $planetSize = 0 }) => `${$planetSize}px`};
    height: ${({ $planetSize = 0 }) => `${$planetSize}px`};
    border-radius: 50%;
    background: ${({ $planetColor = "transparent" }) => $planetColor};
  }

  ${({ $borderWidth, $borderColor }) =>
    $borderWidth &&
    css`
      border-width: ${$borderWidth}px;
      border-color: ${$borderColor ?? "rgba(80, 80, 80, 0.3)"};
    `}

  ${({ $withRing }) =>
    $withRing &&
    css`
      &::after {
        content: "";
        position: absolute;
        width: 30px;
        height: 1px;
        right: 43.5%;
        background: white;
        transform: rotate(20deg);
      }
    `}
`;
