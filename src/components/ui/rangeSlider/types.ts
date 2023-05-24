export interface TrackProps {
  values: number[];
  to?: number;
  min: number;
  max: number;
  activeColor?: string;
  notActiveColor?: string;
}

export interface IRangeSliderProps {
  amount?: number[];
  onChange: (amount: number[]) => void;
  min: number;
  max: number;
}
