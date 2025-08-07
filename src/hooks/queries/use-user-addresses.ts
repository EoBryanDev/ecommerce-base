import { useQuery } from "@tanstack/react-query";

import { getUserAddresses } from "@/actions/get-user-adresses";



export const getUserAddressesQueryKey = () => ["user-addresses"] as const;

export const useUserAddresses = () => {
    return useQuery({
        queryKey: getUserAddressesQueryKey(),
        queryFn: getUserAddresses,
    });
};