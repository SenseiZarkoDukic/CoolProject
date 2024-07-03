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
        <Text style={menuStyles.headerText}>View Menu</Text>
        {menuItemsToDisplay.map((item, index) => (
          <Text key={index} style={menuStyles.itemText}>
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
  headerText: {
    color: white,
    textAlign: "center",
    fontSize: 40,
    padding: 40,
    flexWrap: "wrap",
  },
  itemText: {
    color: yellow,
    textAlign: "center",
    fontSize: 36,
    padding: 40,
  },
});
