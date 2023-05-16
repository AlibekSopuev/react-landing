import styled, { css } from 'styled-components';
export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  background: #fafafa;
  z-index: 10;
  box-shadow: 0 16px 24px rgba(176, 176, 204, 0.08);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 120px;
`;

export const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DesktopLogoCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PhoneNumber = styled.a`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #121112;
`;

export const RightContent = styled.div`
  display: flex;
  gap: 16px;
`;
