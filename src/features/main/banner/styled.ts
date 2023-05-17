import styled from 'styled-components';
import { IconBanner } from '../../../components/icons/iconBanner';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 250px 12px 120px;
`;

export const TextBlock = styled.div`
  //padding-right: 200px;
`;

export const ImgBlock = styled.div``;

export const Title = styled.div`
  font-family: 'Fira Sans', sans-serif;
  font-weight: 600;
  font-size: 48px;
  line-height: 140%;
  display: flex;
  align-items: center;
  letter-spacing: 0.15px;
  color: #121112;
`;

export const Text = styled.div`
  font-family: 'PT Root UI', sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 130%;
  letter-spacing: 0.15px;
  color: #616163;
  margin-top: 24px;

  & > span {
    color: #10a060;
  }
`;

export const StyledBanner = styled(IconBanner)`
  width: 422px;
  height: 200px;
`;
