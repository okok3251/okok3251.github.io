import Layout from "@/components/Layout/Layout";
import React from "react";
import styled, { keyframes } from "styled-components";

// 이미 정의된 애니메이션
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const typing = keyframes`
  0%, 60%, 100% {
    transform: initial;
  }
  30% {
    transform: translateY(-10px);
  }
`;

// fadeIn을 사용하는 텍스트 컴포넌트
const FadeInText = styled.p`
  font-size: 24px;
  color: #333;
  animation: ${fadeIn} 1s ease forwards;
`;

// typing을 사용하는 버튼 컴포넌트
const TypingButton = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  animation: ${typing} 1.2s infinite;
`;


function App() {

  return (
    <div>
        <Layout>
          테스트
          <div style={{ padding: "50px", textAlign: "center" }}>
        <FadeInText>Hello, Styled Components!</FadeInText>
        <TypingButton>Click Me</TypingButton>
      </div>
        </Layout>
      
    </div>
  );
}

export default App;
