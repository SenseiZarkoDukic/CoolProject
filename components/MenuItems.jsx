import React from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";

const green = "#495E57";
const white = "#EDEFEE";
const yellow = "#F4CE14";

const menuItemsToDisplay = [
  { name: "Hummus", id: "1A" },
  { name: "Moutabal", id: "2B" },
  { name: "Falafel", id: "3C" },
  { name: "Marinated Olives", id: "4D" },
  { name: "Kofta", id: "5E" },
  { name: "Eggplant Salad", id: "6F" },
  { name: "Lentil Burger", id: "7G" },
  { name: "Smoked Salmon", id: "8H" },
  { name: "Kofta Burger", id: "9I" },
  { name: "Turkish Kebab", id: "10J" },
  { name: "Fries", id: "11K" },
  { name: "Buttered Rice", id: "12L" },
  { name: "Bread Sticks", id: "13M" },
  { name: "Pita Pocket", id: "14N" },
  { name: "Lentil Soup", id: "15O" },
  { name: "Greek Salad", id: "16Q" },
  { name: "Rice Pilaf", id: "17R" },
  { name: "Baklava", id: "18S" },
  { name: "Tartufo", id: "19T" },
  { name: "Tartufo", id: "20U" },
  { name: "Tiramisu", id: "21V" },
  { name: "Panna Cotta", id: "22W" },
];

const MenuItems = () => {
  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>View Menu</Text>
      <FlatList data={menuItemsToDisplay} renderItem={renderItem} />
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
