
import fetcher from "@/libs/fetcher";
import useSWR from "swr";


const useFavoriMovie = () =>{
    const{data, error, isloading} =useSWR('/api/favorilist', fetcher,
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