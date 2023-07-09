import { useList } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import {
    PieChart,
    PropertyRefferals,
    TotalRevenue,
    PropertyCard,
} from "components";

const Home = () => {
    const { data, isLoading, isError } = useList({
        resource: "properties",
        config: {
            pagination: {
                pageSize: 4,
            },
        },
    });

    const latestProperties = data?.data ?? [];

    if (isLoading) return <Typography>Loading...</Typography>;
    if (isError) return <Typography>Something went wrong!</Typography>;

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142D">
                Dashboard
            </Typography>
        </Box>
    );
};

export default Home;