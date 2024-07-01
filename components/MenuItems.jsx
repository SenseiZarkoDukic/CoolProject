import React from "react";
import { View, Text, ScrollView } from "react-native";

const green = "#495E57";
const white = "#EDEFEE";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
  "Hummus \n Moutabal \n Tabbouleh \n Fattoush \n Kibbeh \n Falafel \n Shawarma \n Baklava \n Knafeh \n Maamoul \n Sambousek \n Fatayer \n Manakish \n Lahmacun \n Dolma \n Kofta \n Kibbeh Nayyeh \n Tabbouleh \n Fattoush \n Kibbeh \n Falafel \n Shawarma \n Baklava \n Knafeh \n Maamoul \n Samb",
];

const MenuItems = () => {
  return (
    <View style={{ flex: 0.75 }}>
      <ScrollView
        indicatorStyle={"white"}
        horizontal={false}
        style={{ padding: 40, backgroundColor: "black" }}
      >
        <Text
          style={{
            color: white,
            textAlign: "center",
            fontSize: 30,
            padding: 40,
            flexWrap: "wrap",
          }}
        >
          View Menu
        </Text>
        {menuItemsToDisplay.map((item, index) => (
          <Text
            key={index}
            style={{
              color: yellow,
              textAlign: "center",
              fontSize: 30,
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
