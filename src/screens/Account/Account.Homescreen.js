import { View, Text, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import OrdersSvg from "../../../assets/svg/Orders-SVG";
import FavSvg from "../../../assets/svg/Favourites-SVG";
import BusinessSVG from "../../../assets/svg/Bussiness-SVG";

export const AccountHomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          height: 50,
        }}
      >
        <View
          style={{
            width: "20%",
            backgroundColor: "blue",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
            resizeMode="cover"
          ></Image>
        </View>

        <View
          style={{ width: "80%", display: "flex", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 18 }}>Jonh Doe</Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "red",
            width: 50,
            height: 50,
            width: "20%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <OrdersSvg />
        </View>
        <View style={{ width: "80%", justifyContent: "center" }}>
          <Text>Orders</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "20%" }}>
          <FavSvg />
        </View>
        <View style={{ width: "80%" }}>
          <Text>Your Favourites</Text>
        </View>
      </View>
    </View>
  );
};
