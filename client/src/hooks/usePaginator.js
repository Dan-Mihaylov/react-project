import { useEffect, useState } from "react";
import { listingsPageSize, useProperty } from "../api/propertyApi";
import { useSearchParams } from "react-router";

export const usePaginator = () => {

    const [totalItems, setTotalItems] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, _] = useSearchParams();
    const { getProperties } = useProperty();
    const totalPageSize = Math.ceil(totalItems / listingsPageSize);

    useEffect(() => {

        if (totalItems > 1) {
            
            if (searchParams.has('offset')) {
                setCurrentPage(Math.ceil(searchParams.get('offset') / listingsPageSize) + 1);
            };

            return;
        };

        const resetSearchParams = new URLSearchParams({});

        getProperties(resetSearchParams)
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