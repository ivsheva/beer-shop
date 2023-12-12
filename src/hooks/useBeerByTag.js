import APIClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient();

const useBeerByTag = (tag) =>
  useQuery({
    queryKey: ["beers", tag],
    queryFn: () => apiClient.getByTag(tag),
  });

export default useBeerByTag;
