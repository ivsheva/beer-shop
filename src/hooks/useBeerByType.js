import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient();

const useBeerByType = (type) =>
  useQuery({
    queryKey: ["beers", type],
    queryFn: () => apiClient.getByType(type),
  });

export default useBeerByType;
