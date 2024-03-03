'use client'
import { useEffect, useState } from "react"
import { List } from "../components/List/List"

const Lista = () => {

    const [dataUsers, setDataUsers] = useState()

    const handleData = async () => {
        try {
            const response = await fetch("http://localhost:3001/users/listar");
            const data = await response.json();
            setDataUsers(data)
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        handleData()
    }, [])

    return (
        <List
            name={dataUsers ? dataUsers[0].nome : "nada"}
            cpf="sds"
            id="as"
            lastName="as"
        />
    )
}

export default Lista