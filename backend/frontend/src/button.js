import React, {component} from "react";
import Button from "@material-ui/core/Button";
import App from "./App.css";
export default function ButtonClick(str) {
    const [flag, setFlag] = React.useState(true);
  
    const handleClick = () => {
      setFlag(!flag);
    };
  
    return (
      <Button
        onClick={handleClick}
        variant="contained"
        color={flag ? "primary" : "secondary"}
      >
        LogIn
      </Button>
    );
  }