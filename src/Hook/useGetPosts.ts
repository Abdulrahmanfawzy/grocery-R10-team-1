import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
const fetchPosts = async () => {
    const result = await axios.get("/api/new-products")
    return result.data
}
const useGetPosts = () => {
    const query = useQuery ({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    })
  return query 
}
export default useGetPosts;