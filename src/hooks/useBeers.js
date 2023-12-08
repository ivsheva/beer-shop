import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient();

const useBeers = () =>
  useQuery({
    queryKey: ["beer"],
    queryFn: () => apiClient.getAll(),
  });

export default useBeers;
