import React from "react";
import { ActivityIndicator } from "react-native";
import { s } from "./styles";
import { colors } from "@/app/styles/theme";

export default function index() {
  return <ActivityIndicator color={colors.green.base} style={s.container} />;
}
