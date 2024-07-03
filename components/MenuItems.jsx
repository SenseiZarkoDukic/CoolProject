import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const green = "#495E57";
const white = "#EDEFEE";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
  "Hummus \n Moutabal \n Tabbouleh \n Fattoush \n Kibbeh \n Falafel \n Shawarma \n Baklava \n Knafeh \n Maamoul \n Sambousek \n Fatayer \n Manakish \n Lahmacun \n Dolma \n Kofta \n Kibbeh Nayyeh \n Tabbouleh \n Fattoush \n Kibbeh \n Falafel \n Shawarma \n Baklava \n Knafeh \n Maamoul \n Samb",
];

const MenuItems = () => {
  return (
    <View style={menuStyles.container}>
      <ScrollView
        indicatorStyle={"white"}
        horizontal={false}
        style={menuStyles.innerContainer}
      >
        <Text style={menuStyles.header}>View Menu</Text>
        {menuItemsToDisplay.map((item, index) => (
          <Text
            key={index}
            style={{
              color: yellow,
              textAlign: "center",
              fontSize: 36,
              padding: 40,
            }}
          >
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
  container: { flex: 1 },
  innerContainer: { padding: 40, backgroundColor: green },
  header: {
    color: white,
    textAlign: "center",
    fontSize: 40,
    padding: 40,
    flexWrap: "wrap",
  },
});
