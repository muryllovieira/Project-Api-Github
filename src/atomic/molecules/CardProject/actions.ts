import { fetchGetRepositoryData } from "../../../api/getRepositories";
import { CardProjectProps } from "./props";

// FAZER UMA SOLICITAÇÃO PARA API
export const loadRepositoryData = async (
    username: string,
    setRepositoryData: React.Dispatch<React.SetStateAction<CardProjectProps[] | null>>
) => {
    const response = await fetchGetRepositoryData(username);

    try {
        if (response && response.length > 0) {
            setRepositoryData(response);
        } else {
            setRepositoryData([]);
        }

    } catch (error) {
        console.log('Erro ao buscar da API', error);
        setRepositoryData([]);
    }
};

