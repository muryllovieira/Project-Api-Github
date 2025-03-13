import { View, StyleSheet, ScrollView } from "react-native";
import { CardProject } from "../../molecules/CardProject";
import { loadRepositoryData } from "../../molecules/CardProject/actions";
import { useState, useEffect } from "react";
import { CardProjectProps } from "../../molecules/CardProject/props";

export function CardContainer({ username }: { username: string }) {

    const [repositoryData, setRepositoryData] = useState<CardProjectProps[] | null>(null);

    useEffect(() => {
        if (username) { 
            loadRepositoryData(username, setRepositoryData);
        }
    }, [username]);

    return (
        <ScrollView>
            <View style={styles.container}>
                {repositoryData ? (
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
                    <CardProject 
                        id={0}
                        name="Carregando..."
                        full_name=""
                        created_at=""
                        description="Buscando os dados..."
                        html_url=""
                    />
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 5,
        justifyContent: 'center',
        paddingBottom: 12
    }
})