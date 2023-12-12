import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient();

const useBeersByType = (type) =>
  useQuery({
    queryKey: ["beers", type],
    queryFn: () => apiClient.getByType(type),
  });

export default useBeersByType;
