import APIClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient();

const usePopularBeers = () =>
  useQuery({
    queryKey: ["beer", "popular"],
    queryFn: () => apiClient.getPopular(),
  });

export default usePopularBeers;
