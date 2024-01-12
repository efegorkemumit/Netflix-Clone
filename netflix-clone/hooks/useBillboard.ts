
import fetcher from "@/libs/fetcher";
import useSWR from "swr";


const useBillboard = () =>{
    const{data, error, isloading} =useSWR('/api/randomMovie', fetcher);
    return{
        data,
        error,
        isloading,
    }
};

export default useBillboard