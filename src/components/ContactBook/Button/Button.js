import { Button } from "./Button.styled";

export const IconButton = ({ children, onClick, ...allyProps }) => {
    return (
      <Button
        type="button"
        onClick={onClick}
        {...allyProps}
      >
        {children}
      </Button>
    );
  };
  
  IconButton.defaultProps = {
    onClick: null,
    children: null,
  };
  