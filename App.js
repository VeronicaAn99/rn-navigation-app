import { StatusBar, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({});
