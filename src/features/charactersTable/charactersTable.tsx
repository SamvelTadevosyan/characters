import React from 'react'
import {
    useGetCharactersQuery,
} from '../../app/services/charactersApi'


export default function CharactersTable() {
    const { data, isLoading } = useGetCharactersQuery()

    if (isLoading) {
        return <div>Loading</div>
    }

    if (!data) {
        return <div>No posts :(</div>
    }

    return (
        <div>
            <p>
                {data.map((post) => (
                    post.n
                ))}
            </p>
        </div>
    )
}