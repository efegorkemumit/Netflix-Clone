
import fetcher from "@/libs/fetcher";
import useSWR from "swr";


const useMovie = (id? : string) =>{
    const{data, error, isloading} =useSWR(id ? `/api/movie/${id}` : null, fetcher,
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

export default useMovie