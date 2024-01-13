
import fetcher from "@/libs/fetcher";
import useSWR from "swr";


const useBillboard = () =>{
    const{data, error, isloading} =useSWR('/api/randomMovie', fetcher,
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

export default useBillboard