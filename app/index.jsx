import { Redirect } from "expo-router";
import { Text, Image, TouchableOpacity, View, Button, TextInput, } from "react-native";
import { ScrollView, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";
import { useState } from "react";
import ChartComponent from "./ChartComponent"
import { MaterialIcons } from '@expo/vector-icons';
import ContractImage from "../assets/images/img.png";
import { useFonts } from "expo-font";
import Map from "../assets/images/map.png"
import Post from "../assets/images/post.png"
import Edit from "../assets/images/Edit.png"
import Like from "../assets/images/like.png"
import Comm from "../assets/images/comm.png"
import Jumma from "../assets/images/juma.png"
import Maria from "../assets/images/maria.png"
import Resources from "../assets/images/Resources.png"
import Rewards from "../assets/images/Rewards.png"

import Send from "../assets/images/send.png"

import add from "../assets/images/addicon.png"

import Calendar from "../assets/images/calenders.png"
import Svg, { Polygon } from "react-native-svg";


import Bell from "../assets/images/bell.png";
import { FontAwesome5 } from '@expo/vector-icons';

const Welcome = () => {
  const [isPressed, setIsPressed] = useState(false);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { loading, isLogged } = useGlobalContext();
  const [activeTab, setActiveTab] = useState("farmer");

  // Load the Inter font using useFonts hook
  const [fontsLoaded] = useFonts({
    "Inter_400Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter_700Regular": require("../assets/fonts/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Loader isLoading={true} />;
  }

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-white h-full p-2">
      <Loader isLoading={loading} />
      <ScrollView>
        <View className="flex-row justify-between items-center mb-2 mt-2">
          <Text className="font-black text-[10px]">CONTRACT FARMING</Text>
          <TouchableOpacity
            style={{
              width: 170,
              height: 25,
              borderRadius: 5,
              borderBottomWidth: 1,
              borderBottomColor: "#155528",
              backgroundColor: "#FFFFFF",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{
              fontFamily: "Inter_400Regular",
              fontWeight: "600",
              fontSize: 8,
              lineHeight: 12.1,
              textAlign: "center"
            }}>
              Request to Join Contract
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1 items-end relative mt-1">
          <Image source={Bell} alt="bell" />
          <View style={{
            position: "absolute",
            top: -10,
            right: -5,
            width: 16,
            color: "black",
            height: 16,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text style={{
              fontFamily: "Inter_700Regular",
              fontSize: 5,
              lineHeight: 8,
              color: "black",
              textAlign: "center"
            }} >3</Text>
          </View>
        </View>
        <View className="flex-row flex-wrap justify-between -mt-3">
          <TouchableOpacity
            className="w-[48%]"
            onPress={() => setActiveTab("farmer")}
          >
            <Text className="font-black text-[12px]">FARMER</Text>
            <View className={`h-1 rounded-lg ${activeTab === "farmer" ? "bg-green-900" : "bg-neutral-100"}`} />
          </TouchableOpacity>

          <TouchableOpacity
            className="w-[48%]"
            onPress={() => setActiveTab("admin")}
          >
            <Text className="font-black text-[12px]">CONTRACT ADMIN</Text>
            <View className={`h-1 rounded-lg ${activeTab === "admin" ? "bg-green-900" : "bg-neutral-100"}`} />
          </TouchableOpacity>
        </View>

        <View className="relative w-full h-[180px] mt-4 ">
          <Image source={ContractImage} className="w-full h-full rounded-md" resizeMode="cover" />
          <View className="absolute bottom-7 left-4">
            <Text className="font-inter font-bold text-[16px] leading-[16px] text-white">
              MILIMILI
            </Text>
          </View>
          <View className="absolute bottom-2 left-4">
            <Text className="font-inter font-medium text-[12px] leading-[16px] text-white">
              Maize supply contract
            </Text>
          </View>
          <View className="absolute bottom-2 right-1">
            <Text className="font-inter font-normal text-[10px] leading-[18px] text-white text-right">
              FNKECO123456
            </Text>
          </View>
        </View>
        <View>
          <Text className="text-[8.5px] leading-[10px] font-semibold w-full mt-3 mb-10">
            We specialize in selling fresh fruits and vegetables. Our products are organically produced with hight quality standards and certified. We provide our customers with value for money.
          </Text>
        </View>
        <View className="flex-row justify-between items-center mt-4 ">
          <View className="flex-row">
            <View className="w-[100px] h-[30px] bg-[#5C9247] rounded-l-md flex justify-center items-center">
              <Text className="text-white font-bold text-[12px]">Farmers </Text>
            </View>
            <View className="w-[60px] h-[30px] bg-[#155528]  flex justify-center items-center">
              <Text className="text-white font-bold text-[12px]">453</Text>
            </View>
          </View>
          <View className="flex-row items-center">
            {[...Array(4)].map((_, index) => (
              <MaterialIcons key={index} name="star" size={18} color="#5C9247" />
            ))}
            <MaterialIcons name="star" size={18} color="gray" />  {/* Last star filled with gray */}
            <Text className="ml-2 text-[12px] font-bold">4.3 (355)</Text>
          </View>
        </View>
        <View className="flex mt-5 mb-5">
          <Text className="text-[7px] leading-[10px] font-bold">
            Quality Assurance
          </Text>
          <Text className="text-[7px] leading-[10px] font-semibold">
            , assist farmers mobilize resources and market assurance. We are development partners and also offtake partners for goat farmers.
          </Text>

        </View>
        <View className="mb-3">
          <Text>SECTION####</Text>
        </View>
        <View>
          <View className="flex-row items-center">
            <Text className="font-bold mr-2 text-[14px]">Location</Text>
            <Image source={Map} resizeMode="cover" className="w-[14px] h-[14px] " />
          </View>
          <View className="h-[1px] w-full bg-[#D9D9D9] mt-2">


          </View>
          <View className="flex-row justify-between items-center mt-3">
            {/* Left Section - Opening Date */}
            <View className="flex-row items-center">
              <Text className="text-[10px] font-medium">Opening Date</Text>
              <Image source={Calendar} resizeMode="contain" className="w-[18px] h-[18px] ml-2" />
            </View>

            {/* Right Section - Closing Date */}
            <View className="flex-row items-center">
              <Text className="text-[10px] font-medium">Closing Date</Text>
              <Image source={Calendar} resizeMode="contain" className="w-[18px] h-[18px] ml-2" />
            </View>
          </View>
        </View>
        <View className="mt-5">
          <View className="flex-row justify-between items-center">
            {/* Text on the Left */}
            <Text className="text-[16px] font-bold">OUTLOOK</Text>

            {/* Button on the Right */}
            <TouchableOpacity
              style={{
                width: 187,
                height: 25,
                backgroundColor: '#155528',
                borderRadius: 3,
                justifyContent: 'center',
                padding: 2,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>REPORTS</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} className="mt-5">
            {/* Button Container */}
            <View
              style={{
                position: 'relative',
                backgroundColor: '#114918',
                width: 100,
                height: 20,
                marginLeft: 170,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                marginBottom: 20,
              }}
            >
              <Text style={{ color: 'white', fontSize: 8, fontWeight: 'bold' }}>27,680</Text>
              <Svg
                height="15"
                width="25"
                style={{
                  position: 'absolute',
                  bottom: -15,
                  left: '50%',
                  transform: [{ translateX: -12.5 }],
                }}
              >
                <Polygon points="0,0 12.5,15 25,0" fill="#114918" />
              </Svg>
            </View>

            {/* Chart Component Container */}
            <View style={{ width: '100%', height: 230, marginTop: 20 }}> {/* Add fixed height */}
              <ChartComponent />
            </View>
          </View>

        </View>
        <View className="mt-4 mb-4">
          <Text className="text-[10px] leading-[13px] font-normal">
            Quarter 2 2024 production has has had a  bumper production due to affordable better quality feeds & Supplements provided by manufacturers
          </Text>
          <View className="flex-row space-x-1 justify-center mt-5">
            {/* First Button: Quotation */}
            <TouchableOpacity className="w-[112px] h-[33px] bg-[#EDF0EF] rounded-[5px] border-b-2 border-[#979797] justify-center items-start p-2">
              <Text className="font-inter font-bold text-[10px] leading-[12.88px] text-black">Quotation</Text>
              <Text className="font-inter font-normal text-[7px] leading-[8.68px] text-black">Order</Text>
            </TouchableOpacity>

            {/* Second Button: Quotation */}
            <TouchableOpacity className="w-[112px] h-[33px] bg-[#EDF0EF] rounded-[5px] border-b-2 border-[#979797] justify-center items-start p-2">
              <Text className="font-inter font-bold text-[10px] leading-[12.88px] text-black">Invoice</Text>
              <Text className="font-inter font-normal text-[7px] leading-[8.68px] text-black">Invoice</Text>
            </TouchableOpacity>


            {/* Third Button: Quotation */}
            <TouchableOpacity className="w-[112px] h-[33px] bg-[#EDF0EF] rounded-[5px] border-b-2 border-[#979797] justify-center items-start p-2">
              <Text className="font-inter font-bold text-[10px] leading-[12.88px] text-black">Goods Delivery</Text>
              <Text className="font-inter font-normal text-[7px] leading-[8.68px] text-black">Delivery Note</Text>
            </TouchableOpacity>

          </View>
          <View>

          </View>
        </View>
        <View>
          <View className="flex-row justify-between">
            <Text className="font-black text-[16px]">POSTS</Text>
            <Image source={add} alt="bell" />
          </View>
          <Image source={Post} alt="post" className="w-full h-[200px] rounded-md" />
          <View className="flex-1 items-end relative mt-1">
            <Image source={Edit} alt="bell" />
          </View>
          <Text className="text-[8px] leading-[11px] font-normal ">
            Planning in farming is important because it helps optimize resource use, enhances soil health, allows better budgeting, and leads to better profit margins for owners ...
          </Text>
        </View>
        <View>
          <View className="flex-row justify-between mt-3">
            <View className="flex-row space-x-4 items-center">
              <Image source={Like} alt="like" className="h-5 w-5" /> {/* Adjust image size as needed */}
              <Text className="text-[12px] font-medium">Likes</Text>
            </View>
            <View className="flex-row space-x-4 items-center">
              <Image source={Comm} alt="comment" className="h-5 w-5" /> {/* Adjust image size as needed */}
              <Text className="text-[12px] font-medium">Comment</Text>
            </View>
          </View>
        </View>
        <View>
          <Text className="font-black text-[16px] mt-4">COMMENTS</Text>
          <View className="mt-5 flex-row space-x-3 items-center">
            <Image source={Jumma} alt="like" className="h-8 w-8" /> {/* Adjust size as needed */}
            <View className="flex-1"> {/* Added flex-1 to allow text to take up available space */}
              <View className="flex-row justify-between items-center">
                <Text className="font-medium text-[12px]">Juma Jembe</Text>
                <Text className="text-[10px] font-normal text-gray-400">2 days ago</Text>
              </View>
              <Text className="font-normal text-[10px] text-ellipsis overflow-hidden">
                What planning tools can help a farmer to improve their enterprise management ?
              </Text>
            </View>
          </View>
          <View className="mt-5 flex-row space-x-3 items-center">
            <Image source={Maria} alt="like" className="h-8 w-8" /> {/* Adjust size as needed */}
            <View className="flex-1"> {/* Added flex-1 to allow text to take up available space */}
              <View className="flex-row justify-between items-center">
                <Text className="font-medium text-[12px]">Maria Mona</Text>
                <Text className="text-[10px] font-normal text-gray-400">3 days ago</Text>
              </View>
              <Text className="font-normal text-[8px] text-ellipsis overflow-hidden">
                Absolutely! Good Planning is essential for successful and sustainable entrepreneurship
              </Text>
            </View>
          </View>
        </View>
        <View className="relative mt-5 mb-5">
          {/* Input Field */}
          <TextInput
            placeholder="Type"
            placeholderTextColor="black"
            className="w-full h-[70px] border border-gray-400 rounded-[5px] pl-[10px] text-[12px] font-inter font-normal"
          />

          {/* Icon in the Right Side */}
          <Image
            source={Send} // Replace with your actual image source
            className="absolute right-[20px] top-[16px] w-[24px] h-[24px]"
          />
        </View>
        <View>
          <View >
            <Text className="font-black text-[16px] mt-2">RESOURCES</Text>
          </View>
          <Image source={Resources} alt="post" className="w-full h-[200px] rounded-md" />

          <Text className="text-[8.5px] leading-[11px] font-normal mt-2">
            Good quality seeds are important in farming because they lead to higher crop emergence, more uniform plant stands, and vigorous early crop growth....
          </Text>
        </View>
        <View>
          <View >
            <Text className="font-black text-[16px] mt-2">BROADCASTS</Text>
            <Text className="text-[8.5px] leading-[11px] font-normal mt-2 bg-[#EDF0EF] p-3 rounded-md">
              New seed variety available for farmers. They have low water requirement and high yield.
            </Text>
            <View className="mt-5 flex-row space-x-3 items-center">
              <Image source={Maria} alt="like" className="h-8 w-8" /> {/* Adjust size as needed */}
              <View className="flex-1"> {/* Added flex-1 to allow text to take up available space */}
                <View className="flex-row justify-between items-center">
                  <Text className="font-medium text-[12px]">Maria Mona</Text>
                  <Text className="text-[10px] font-normal text-gray-400">3 days ago</Text>
                </View>
                <Text className="font-normal text-[8px] text-ellipsis overflow-hidden">
                  Absolutely! Good Planning is essential for successful and sustainable entrepreneurship
                </Text>
              </View>
            </View>
            <View className="relative mt-5 mb-5">
              {/* Input Field */}
              <TextInput
                placeholder="Type.."
                placeholderTextColor="black"
                className="w-full h-[70px] border border-gray-400 rounded-[5px] pl-[10px] text-[12px] font-inter font-normal"
              />

              {/* Icon in the Right Side */}
              <Image
                source={Send} // Replace with your actual image source
                className="absolute right-[20px] top-[16px] w-[24px] h-[24px]"
                style={{
                  transform: [{ rotate: '-26.39deg' }] // Applying the rotation
                }}
              />

            </View>
          </View>
        </View>
        <View>
          <View >
            <Text className="font-black text-[16px] mt-2">REWARDS PROGRAM</Text>
          </View>
          <Image source={Rewards} alt="post" className="w-full rounded-md" />

          <Text className="text-[8.5px] leading-[11px] font-normal mt-2">
            Earn points by using the solutions on the application. Redeem for resources
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    position: "relative",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#114918",
    zIndex: 2, // Ensures button stays above triangle
  },
  buttonPressed: { backgroundColor: "#145A32" },
  buttonText: { color: "white", fontWeight: "bold", fontSize: 16 },

  // Fix for Triangle Placement
  triangle: {
    position: "absolute",
    top: 40, // Adjust so it appears below the button
  },
});

export default Welcome;
