
import fetcher from "@/libs/fetcher";
import useSWR from "swr";


const useCurrentUser = () =>{
    const{data, error, isloading, mutate} =useSWR('/api/current', fetcher);
    return{
        data,
        error,
        isloading,
        mutate
    }
};

export default useCurrentUser