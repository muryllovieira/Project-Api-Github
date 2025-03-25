import axios from "axios";
import { CardProjectProps } from "../atomic/organisms/Main/CardProject/props";

const API_KEY = process.env.EXPO_PUBLIC_GITHUB_API_BASE_URL;
console.log(API_KEY);

type ApiResponse = CardProjectProps[];

export const fetchGetRepositoryData = async (username: string) => {
  try {
    const response = await axios.get<ApiResponse>(
      `${API_KEY}${username}/repos?per_page=100`
    );

    const repositoryData = response.data;

    return repositoryData;
  } catch (error) {
    console.log("ERRO AO BUSCAR OS DADOS DA API: ", error);
    return [];
  }
};
