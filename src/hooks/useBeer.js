import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const apiClient = new APIClient();

const useBeer = (id) =>
  useQuery({
    queryKey: ["beer", id],
    queryFn: () => apiClient.getById(id),
  });

export default useBeer;
