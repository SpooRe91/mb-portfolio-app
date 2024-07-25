import React from "react";
import GlobalLoader from "@PortfolioApp/Components/GlobalLoader";
import useGetProjects from "@PortfolioApp/hooks/useGetProjects";

type WithLoaderHOCProps = {
    children: React.ReactNode;
};

const WithLoaderHOC = ({ children }: WithLoaderHOCProps) => {
    const { isLoading } = useGetProjects();

    if (isLoading) {
        return <GlobalLoader />;
    }

    return <>{children}</>;
};

export default WithLoaderHOC;