import React from "react";
import { View, Text, ScrollView } from "react-native";

const green = "#495E57";
const white = "#EDEFEE";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
  "Hummus \n Moutabal \n Tabbouleh \n Fattoush \n Kibbeh \n Falafel \n Shawarma \n Baklava",
];

const MenuItems = () => {
  return (
    <View style={{ flex: 0.75 }}>
      <ScrollView style={{ padding: 40, backgroundColor: green }}>
        <Text
          style={{
            color: white,
            textAlign: "center",
            fontSize: 30,
            padding: 40,
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
