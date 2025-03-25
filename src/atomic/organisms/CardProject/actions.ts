import { fetchGetRepositoryData } from "../../../../api/getRepositories";
import { CardProjectProps } from "./props";

// FAZER UMA SOLICITAÇÃO PARA API
export const loadRepositoryData = async (
  username: string,
  setRepositoryData: React.Dispatch<
    React.SetStateAction<CardProjectProps[] | null>
  >
) => {
  const response = await fetchGetRepositoryData(username);
  setRepositoryData(response);
};
