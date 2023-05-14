import React from 'react';
import { Range } from 'react-range';
import { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types';
import { Wrapper, Track, Thumb } from './styled';
import { IRangeSliderProps } from './types';

export const RangeSlider: React.FC<IRangeSliderProps> = ({ onChange, amount, min, max }) => {
  const TrackComponent = ({ props, children }: IRenderTrackParams) => (
    <Track {...props} min={min} max={max} values={amount} className='track'>
      {children}
    </Track>
  );

  const ThumbComponent = ({ props }: IRenderThumbParams) => <Thumb {...props} className='thumb' />;

  return (
    <Wrapper>
      <Range
        values={amount}
        onChange={onChange}
        min={min}
        max={max}
        step={1000}
        renderTrack={TrackComponent}
        renderThumb={ThumbComponent}
      />
    </Wrapper>
  );
};
