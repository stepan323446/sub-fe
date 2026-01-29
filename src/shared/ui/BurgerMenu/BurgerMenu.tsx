import { StyledBurgerMenu } from "./BurgerMenu.styles";

interface BurgerMenuProps {
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
}

const BurgerMenu = ({
  isActive = false,
  className,
  onClick,
}: BurgerMenuProps) => {
  return (
    <StyledBurgerMenu
      onClick={onClick}
      className={className}
      isActive={isActive}
    >
      <span></span>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
