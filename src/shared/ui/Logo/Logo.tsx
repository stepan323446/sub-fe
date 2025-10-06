import { Link } from "react-router";
import { StyledLogo } from "./Logo.styles";

interface LogoProps {
  to?: string;
  className?: string;
}

const Logo = ({ to, className }: LogoProps) => {
  const logoText = "SubTrack";

  if (to)
    return (
      <Link to={to} className={className}>
        <StyledLogo>{logoText}</StyledLogo>
      </Link>
    );

  return <StyledLogo className={className}>{logoText}</StyledLogo>;
};

export default Logo;
