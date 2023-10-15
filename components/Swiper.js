import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

const images = [
  require("../assets/slide1.png"),
  require("../assets/slide2.png"),
  require("../assets/slide3.png"),
];

export default function SlidingImages() {
  return (
    <View className="h-40">
      <Swiper
        dot={<View className="bg-gray-300 w-5 h-1 rounded-xl m-1"/>}
        activeDot={<View className="bg-sky-500 w-7 h-1 rounded-xl m-1"/>}
        loop={true}
        autoplay={true}
      >
        {images.map((image, index) => (
          <View key={index}>
            <Image source={image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}
