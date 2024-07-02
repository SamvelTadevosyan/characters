import { useMemo, useState } from "react";

export function useSortedData(data, key, defaultDirection) {
    return useMemo(() => {
        if (!data)
            return null;
        const sortedPosts = data.slice()
        sortedPosts.sort((a, b) => b[key] - a[key])
        return sortedPosts
    }, [data])
}