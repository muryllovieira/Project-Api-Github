import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../routes/stack.routes";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { CardProjectProps } from "../../organisms/Main/CardProject/props";
import { loadRepositoryData } from "../../organisms/Main/CardProject/actions";
import { CardProject } from "../../organisms/Main/CardProject";

type RepositoryTemplateRouteProp = RouteProp<RootStackParamList, "projects">;
export function RepositoryTemplate({
  route,
}: {
  route: RepositoryTemplateRouteProp;
}) {
  const { username } = route.params;

  const [repositoryData, setRepositoryData] = useState<
    CardProjectProps[] | null
  >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (username) {
      setLoading(true);
      loadRepositoryData(username, (data) => {
        setRepositoryData(data);
        setLoading(false);
      });
    }
  }, [username]);

  return (
    <LinearGradient
      style={styles.container}
      colors={["#332332", "#A15EF2"]}
      end={{ x: 0.9, y: 1.7 }}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        <View style={styles.containerScroll}>
          {loading ? (
            <>
              <Text style={{ color: "white", fontSize: 16 }}>
                Carregando Repositórios
              </Text>
              <ActivityIndicator size={32} color={"white"} />
            </>
          ) : repositoryData && repositoryData.length > 0 ? (
            repositoryData.map((repo) => (
              <CardProject
                key={repo.id}
                id={repo.id}
                name={repo.name || "Sem Nome"}
                full_name={repo.full_name}
                created_at={repo.created_at}
                description={repo.description || "Sem descrição"}
                html_url={repo.html_url || ""}
              />
            ))
          ) : (
            <Text style={styles.noReposText}>
              Este usuário não tem repositórios públicos.
            </Text>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  noReposText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    alignItems: "center",
  },
  containerScroll: {
    gap: 12,
    justifyContent: "center",
  },
});
