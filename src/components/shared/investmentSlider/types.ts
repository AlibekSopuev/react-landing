export interface ISliderProps {
  onChange: (value: number) => void;
  min: number;
  max: number;
  error?: string;
}
