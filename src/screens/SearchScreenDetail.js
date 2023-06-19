import { View, Text } from "react-native";
import { SearchComponent } from "@components/Search/Search-component";

export const SearchScreenDetail = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SearchComponent />
      <Text>Search Screen Details</Text>
    </View>
  );
};
