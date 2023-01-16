import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GlobalContext from "../context/Context";
import { useNavigation } from "@react-navigation/native";
//import { signOutApp } from "../signIn";

export default function SignOutIcon() {
  const {
    theme: { colors },
  } = useContext(GlobalContext);
  const navigation = useNavigation();
  async function handlePress() {
    await signOutApp();
    console.log("signed out, now trying to navigate to signin page.");
    navigation.navigate("signIn");
  }
  return (
    <TouchableOpacity
      onPress={() => null}
      style={{
        position: "absolute",
        left: 20,
        bottom: 20,
        borderRadius: 60,
        width: 60,
        height: 60,
        backgroundColor: colors.secondary,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons
        name="logout"
        size={30}
        color="white"
        style={{ transform: [{ scaleX: -1 }] }}
      />
    </TouchableOpacity>
  );
}
