

import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { Pencil } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface usersProps {
    users: {
        id: string,
        nome: string,
        sobrenome: string,
        cpf: string,
    }[] | undefined
}

export const List = ({ users }: usersProps) => {
    const router = useRouter()
    return (

        <div>
            <h1 className="text-lg bg-violet-500 text-violet-50 rounded-lg p-4">Lista de cadastro</h1>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead >ID</TableHead>
                        <TableHead >Nome</TableHead>
                        <TableHead>Sobrenome</TableHead>
                        <TableHead>CPF</TableHead>
                        <TableHead>Editar</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {users && users.map((user) => (
                        <TableRow key={user.id} >
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.nome}</TableCell>
                            <TableCell> {user.sobrenome} </TableCell>
                            <TableCell >{user.cpf}</TableCell>
                            <TableCell className="cursor-pointer" onClick={() => router.push(`/editar/${user.id}`)}><Pencil className="w-4 h-4" /></TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>

            <Button className="m-2" asChild>
                <Link href="/">Voltar</Link>
            </Button>
        </div>

    )
}
