import { View, StyleSheet, ScrollView, Text } from "react-native";
import { CardProject } from "../Main/CardProject";
import { loadRepositoryData } from "../Main/CardProject/actions";
import { useState, useEffect } from "react";
import { CardProjectProps } from "../Main/CardProject/props";

export function CardContainer({ username }: { username: string }) {}

const styles = StyleSheet.create({
  container: {
    gap: 5,
    justifyContent: "center",
    paddingBottom: 12,
    marginTop: 32,
  },
  noReposText: {
    fontSize: 16,
    color: "gray",
    marginTop: 50,
    textAlign: "center",
  },
});
