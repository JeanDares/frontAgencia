
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import Link from "next/link"

interface DataUserProps {
    id: string,
    name: string,
    lastName: string,
    cpf: string,
}




export const List = ({ id, name, lastName, cpf }: DataUserProps) => {
    return (

        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead >ID</TableHead>
                        <TableHead >Nome</TableHead>
                        <TableHead>Sobrenome</TableHead>
                        <TableHead>CPF</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">{id}</TableCell>
                        <TableCell>{name}</TableCell>
                        <TableCell> {lastName} </TableCell>
                        <TableCell > {cpf} </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Button className="m-2" asChild>
                <Link href="/">Voltar</Link>
            </Button>
        </div>

    )
}
