import APIClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient();

const useBeersByTag = (tag) =>
  useQuery({
    queryKey: ["beers", tag],
    queryFn: () => apiClient.getByTag(tag),
  });

export default useBeersByTag;
