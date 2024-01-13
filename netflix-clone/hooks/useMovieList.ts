
import fetcher from "@/libs/fetcher";
import useSWR from "swr";


const useMovieList = () =>{
    const{data, error, isloading} =useSWR('/api/movie', fetcher,
    {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    return{
        data,
        error,
        isloading,
    }
};

export default useMovieList