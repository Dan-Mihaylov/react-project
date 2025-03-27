import { useEffect, useState } from "react";
import { listingsPageSize, useProperty } from "../api/propertyApi";

export const usePaginator = () => {

    const [ totalItems, setTotalItems ] = useState(-1);
    const [ currentPage, setCurrentPage ] = useState(1);
    const { getProperties } = useProperty();
    const totalPageSize = Math.ceil(totalItems / listingsPageSize);

    useEffect(() => {
        
        if (totalItems !== -1) {
            return;
        };

        const searchParams = new URLSearchParams({});

        getProperties(searchParams)
        .then(data => setTotalItems(data.length));
    });

    const handlePageChange = (page, setSearchParams) => {
        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set('offset', page * listingsPageSize - listingsPageSize);
            newParams.set('pageSize', listingsPageSize);
            return newParams;
        });
    setCurrentPage(page);
    }

    return {
        currentPage,
        totalPageSize,
        handlePageChange
    };
        
}