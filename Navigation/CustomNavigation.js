import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Checkout from "../screens/Checkout";
import Setting from "../screens/Setting";
import Faqs from "../screens/Faqs";
import ChangePassword from "../screens/ChangePassword";
import ContactForm from "../screens/ContactForm";
import EditProfile from "../screens/EditProfile";
import Details from "../screens/Details";
import Home from "../screens/Home";
import WishList from "../screens/WishList";
import UserProfile from "../screens/UserProfile";
import AddPost from "../screens/AddPost";
import CreditPayment from "../screens/CreditPayment";
import Camera from "../screens/Camera";
const Stack = createNativeStackNavigator();

const SettingsScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={Setting} />
      <Stack.Screen name="Faqs" component={Faqs} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ContactForm" component={ContactForm} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="camera" component={Camera} />
    </Stack.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="CreditPayment" component={CreditPayment} />
    </Stack.Navigator>
  );
};

const UserProfileScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ContactForm" component={ContactForm} />
    </Stack.Navigator>
  );
};

const WishListScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="WishList" component={WishList} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const AddPostScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AddPost" component={AddPost} />
    </Stack.Navigator>
  );
};
export { HomeScreen, UserProfileScreen, WishListScreen, AddPostScreen };
export default SettingsScreen;
