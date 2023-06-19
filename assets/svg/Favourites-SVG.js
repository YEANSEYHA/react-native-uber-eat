import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FavSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M16 0c-2.2 0-3.8 1.2-5 2.5C9.8 1.3 8.2 0 6 0 2.5 0 0 2.9 0 6.5 0 8.3.7 9.9 2 11l9 8.5 9-8.5c1.2-1.2 2-2.7 2-4.5C22 2.9 19.5 0 16 0Z"
    />
  </Svg>
);
export default FavSvg;
