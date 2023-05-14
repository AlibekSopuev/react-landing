import styled from 'styled-components';
import { getTrackBackground } from 'react-range';
import { TrackProps } from './types';

export const Wrapper = styled.div`
  margin-top: -2px;
`;

export const Track = styled.div<TrackProps>`
  width: 100%;
  height: 2px;
  background: ${({ theme, values, to, min, max, activeColor, notActiveColor }) => {
    const { colors } = theme;
    const active = activeColor || colors.track.light;
    const notActive = notActiveColor || colors.track.main;
    const trackColors = to ? [notActive, active, notActive] : [notActive, active];

    return getTrackBackground({ values, colors: trackColors, min, max });
  }};
`;

export const Thumb = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 25px;
  box-shadow: 0 4px 18px rgba(16, 160, 96, 0.2);
  background-color: ${({ theme }) => theme.colors.grey.primary_inverted.grey0};
  outline: none;
`;
