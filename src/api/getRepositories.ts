import axios from "axios";
import { CardProjectProps } from "../atomic/molecules/CardProject/props";
import { GITHUB_API_BASE_URL } from "../constants/github";

type ApiResponse = CardProjectProps[];

export const fetchGetRepositoryData = async (username: string) => {
    try {
        const response = await axios.get<ApiResponse>(`${GITHUB_API_BASE_URL}${username}/repos`)

        const repositoryData = response.data

        return repositoryData

    } catch (error) {
        console.log('ERRO AO BUSCAR OS DADOS DA API: ', error);
        return [];
    }
}