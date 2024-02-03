'use client'

import {useEffect, useState} from "react";

async function getData() {
    const res = await fetch('http://localhost:3001/users')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export function FetchComponent() {

    const [data,setData] = useState([])

    useEffect(()=> {
        getData().then(data=> setData(data))
    },[])

    return (
        <div>{JSON.stringify(data)}</div>
    )
}