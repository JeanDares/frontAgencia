'use client'
import { useEffect, useState } from "react"
import { List } from "../components/List/List"

const Lista = () => {

    const [users, setUsers] = useState()

    const handleData = async () => {
        try {
            const response = await fetch("http://localhost:3001/users/listar");
            const data = await response.json();
            setUsers(data)
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        handleData()
    }, [])

    return (
        <List users={users} />
    )
}

export default Lista