import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  SectionList,
} from "react-native";

const green = "#495E57";
const white = "#EDEFEE";
const yellow = "#F4CE14";

// const menuItemsToDisplay = [
//   { name: "Hummus", price: "$5.00", id: "1A" },
//   { name: "Moutabal", price: "$5.00", id: "2B" },
//   { name: "Falafel", price: "$7.50", id: "3C" },
//   { name: "Marinated Olives", price: "$5.00", id: "4D" },
//   { name: "Kofta", price: "$5.00", id: "5E" },
//   { name: "Eggplant Salad", price: "$8.50", id: "6F" },
//   { name: "Lentil Burger", price: "$10.00", id: "7G" },
//   { name: "Smoked Salmon", price: "$14.00", id: "8H" },
//   { name: "Kofta Burger", price: "$11.00", id: "9I" },
//   { name: "Turkish Kebab", price: "$15.50", id: "10J" },
//   { name: "Fries", price: "$3.00", id: "11K" },
//   { name: "Buttered Rice", price: "$3.00", id: "12L" },
//   { name: "Bread Sticks", price: "$3.00", id: "13M" },
//   { name: "Pita Pocket", price: "$3.00", id: "14N" },
//   { name: "Lentil Soup", price: "$3.75", id: "15O" },
//   { name: "Greek Salad", price: "$6.00", id: "16Q" },
//   { name: "Rice Pilaf", price: "$4.00", id: "17R" },
//   { name: "Baklava", price: "$3.00", id: "18S" },
//   { name: "Tartufo", price: "$3.00", id: "19T" },
//   { name: "Tiramisu", price: "$5.00", id: "20U" },
//   { name: "Panna Cotta", price: "$5.00", id: "21V" },
// ];

// const menuItemsToDisplay = [
//   {
//     title: "Appetizers",
//     data: [
//       "Hummus",
//       "Moutabal",
//       "Falafel",
//       "Marinated Olives",
//       "Kofta",
//       "Eggplant Salad",
//     ],
//   },
//   {
//     title: "Main Dishes",
//     data: ["Lentil Burger", "Smoked Salmon", "Kofta Burger", "Turkish Kebab"],
//   },
//   {
//     title: "Sides",
//     data: [
//       "Fries",
//       "Buttered Rice",
//       "Bread Sticks",
//       "Pita Pocket",
//       "Lentil Soup",
//       "Greek Salad",
//       "Rice Pilaf",
//     ],
//   },
//   {
//     title: "Desserts",
//     data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
//   },
// ];

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const Footer = () => (
  <Text style={menuStyles.footerTitle}>
    All rights reserved by Little Lemon, 2022
  </Text>
);

const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;

const Separator = () => <View style={menuStyles.separator} />;

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemTextName} numberOfLines={1}>
      {name}
    </Text>
    <Text style={menuStyles.itemTextPrice}>{price}</Text>
  </View>
);

const MenuItems = () => {
  // const renderItem = ({ item }) => (
  //   <Item name={item.name} price={item.price} id={item.id} />
  // );

  const renderItem = ({ item: { name, price } }) => (
    <Item name={name} price={price} />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeaderTitle}>{title}</Text>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      ></SectionList>
    </View>
  );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: 40,
    flexWrap: "wrap",
    textAlign: "center",
  },
  itemTextName: {
    color: "#F4CE14",
    fontSize: 26,
    paddingRight: 20,
  },
  itemTextPrice: {
    color: "#F4CE14",
    fontSize: 26,
    paddingLeft: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  footerTitle: {
    // padding: 20,
    backgroundColor: "#EE9972",
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontStyle: "italic",
  },
  sectionHeaderTitle: {
    backgroundColor: "#EE9972",
    fontSize: 24,
    color: "black",
    textAlign: "center",
  },
});
