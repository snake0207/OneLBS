// material-ui
import { CardMedia } from "@mui/material";
import ktlogo from "assets/kt_logo_light.png";
import logo from "assets/one_lbs.png";

// ==============================|| LOGO SVG ||============================== //

const Logo = ({ imgKt }) => {
  return (
    <CardMedia
      sx={{ width: "44px", height: "36px" }}
      component="img"
      image={imgKt ? ktlogo : logo}
      alt={imgKt ? "KT 홈페이지 이동" : "OneLBS Admin System"}
    />
    // <img
    //   src={logo}
    //   alt="OneLBS Admin System"
    //   {...props}
    //   width="44px"
    //   height="36px"
    // />
  );
};

export default Logo;
