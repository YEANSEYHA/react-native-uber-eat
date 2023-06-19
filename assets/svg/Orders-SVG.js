import * as React from "react";
import Svg, { Path } from "react-native-svg";
const OrdersSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M.5 0v18.333l4.583-2.5L8 18.333l2.917-2.5 4.583 2.5V0H.5Zm11.667 6.667H3.833v-2.5h8.334v2.5Z"
    />
  </Svg>
);

export default OrdersSvg;
