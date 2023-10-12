import { View, Text, Image } from "react-native";
import React from "react";

const productInfo = [
  {
    image: require("../assets/Image1.png"),
    discount: "Discount all Excelsa ",
    discount2: "20% in all stores",
    duration: "20/04/20 - 06/09/20",
  },
  {
    image: require("../assets/Image2.png"),
    discount: "Discount all Liberica ",
    discount2: "20% in all stores",
    duration: "20/04/20 - 06/09/20",
  },
  {
    image: require("../assets/Image3.png"),
    discount: "Discount all Arabica ",
    discount2: "20% in all stores",
    duration: "20/04/20 - 06/09/20",
  },
  {
    image: require("../assets/Image4.png"),
    discount: "Discount all Robusta ",
    discount2: "20% in all stores",
    duration: "20/04/20 - 06/09/20",
  },
];

export default function ProductInfo() {
  return (
    <View className="flex-row flex-wrap mt-8 justify-between">
      {productInfo.map((info, index) => {
        return (
          <View key={index}>
            <Image source={info.image} />
            <Text>{info.discount}</Text>
            <Text>{info.discount2}</Text>
            <Text>{info.duration}</Text>
          </View>
        );
      })}
    </View>
  );
}
