import { StyledWave } from "./Wave.styled";

interface WaveProps {
  waveImage: string;
  vertical?: "top" | "bottom";
  horizontal?: "left" | "right";
  isHorizontalWave?: boolean;
}

const Wave = ({
  waveImage,
  vertical = "bottom",
  horizontal = "left",
  isHorizontalWave = true,
}: WaveProps) => {
  return (
    <StyledWave
      src={waveImage}
      vertical={vertical}
      horizontal={horizontal}
      isHorizontalWave={isHorizontalWave}
    />
  );
};

export default Wave;
