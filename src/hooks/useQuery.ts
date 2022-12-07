import { useMediaQuery } from "@mui/material";

export const useQuery = () => {
    return useMediaQuery('(max-width:900px)')
}