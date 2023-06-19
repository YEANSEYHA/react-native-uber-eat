import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BusinessSVG = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M19 6V0H4v6H0v18h24V6h-5ZM7 3v3h9V3H7Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BusinessSVG;
