import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import SlidingImages from "../components/Swiper";
import { Feather } from "@expo/vector-icons";
import ProductInfo from "../components/ProductInfo";

export default function Home() {
  return (
    <ScrollView className="bg-slate-100 px-2">
      <View className="flex flex-row justify-between mb-6">
        <View className="flex-row items-center justify-center">
          <Image source={require("../assets/avatar.png")} />
          <View className="ml-2">
            <Text className="text-lg">Welcome to</Text>
            <Text className="text-xl font-bold">Sample restaurant</Text>
          </View>
        </View>
        <View className="flex-row items-center bg-slate-200 px-2 rounded-full">
          <Image source={require("../assets/menu.png")} className="mx-1" />
          <Image source={require("../assets/divider.png")} className="mx-1" />
          <Image source={require("../assets/cancel.png")} className="mx-1" />
        </View>
      </View>
      <SlidingImages />
      <View className="bg-white flex-row rounded-lg mb-5 items-center justify-evenly py-5">
        <View>
          <Image source={require("../assets/storePickup.png")} />
          <View className="items-center mt-2">
            <Text className="text-xl font-semibold">Store pickup</Text>
            <Text className="text-base text-gray-500">Best quality</Text>
          </View>
        </View>
        <View className="w-0.5 h-14 bg-gray-300" />
        <View>
          <Image source={require("../assets/delivery.png")} />
          <View className="items-center mt-2">
            <Text className="text-xl font-semibold">Delivery</Text>
            <Text className="text-base text-gray-500">Always on time</Text>
          </View>
        </View>
      </View>
      <View className="bg-white rounded-lg p-4">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-xl font-semibold">Online reservation</Text>
            <Text className="text-base text-gray-500">Table booking</Text>
          </View>
          <Image source={require("../assets/reservation.png")} />
        </View>
        <View className="flex-row justify-between mt-3">
          <View className="flex-row items-center border-2 border-sky-500 rounded-full p-1 px-3">
            <Feather name="calendar" size={20} color="#0EA5E9" />
            <Text className="ml-2 text-lg text-sky-500">Reserve a table</Text>
          </View>
          <View className="border-2 border-sky-500 rounded-full p-1 px-3 items-center justify-center">
            <Text className="text-lg text-sky-500">My reservations</Text>
          </View>
        </View>
      </View>
      <ProductInfo/>
    </ScrollView>
  );
}
