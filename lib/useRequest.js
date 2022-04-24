import useSWR from "swr"
import Fetcher from "./fetcher"

const baseUrl = "/api"

export const useGetData = path => {
  if (!path) {
    throw new Error("Path is required")
  }

  const url = baseUrl + path

  //const { data: posts, error } = useSWR(url, Fetcher)

  

  return { posts, error }
}