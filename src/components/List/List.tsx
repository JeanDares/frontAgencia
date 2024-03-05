import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from 'react'; // Importe o useState

interface User {
    id: string;
    nome: string;
    sobrenome: string;
    cpf: string;
}

interface UsersProps {
    users: User[] | undefined;
}

export const List = ({ users }: UsersProps) => {
    const router = useRouter();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [deletedUserId, setDeletedUserId] = useState<string | null>(null);
    const [deletedUserName, setDeletedUserName] = useState<string | null>(null); // Adicione o estado deletedUserName

    const deleteUser = async () => {
        try {
            await fetch(`http://localhost:3001/users/${deletedUserId}`, { // Correção aqui
                method: 'DELETE'
            });
            setShowModal(false);
            window.location.reload();
            // router.refresh();
        } catch (error) {
            console.error("Erro ao deletar usuário:", error);

        }
    };

    const handleConfirmDelete = () => {
        deleteUser();
    };

    const handleCancelDelete = () => {
        setShowModal(false);
        setDeletedUserId(null);
        setDeletedUserName(null);
    };

    const handleDeleteClick = (id: string, name: string) => {
        setShowModal(true);
        setDeletedUserId(id);
        setDeletedUserName(name);
    };

    return (
        <div>
            <h1 className="text-lg bg-violet-500 text-violet-50 rounded-lg p-4">Lista de cadastro</h1>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Sobrenome</TableHead>
                        <TableHead>CPF</TableHead>
                        <TableHead>Editar</TableHead>
                        <TableHead>Deletar</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {users && users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.nome}</TableCell>
                            <TableCell>{user.sobrenome}</TableCell>
                            <TableCell>{user.cpf}</TableCell>
                            <TableCell className="cursor-pointer" onClick={() => router.push(`/editar/${user.id}`)}>
                                <Pencil className="w-5 h-5 pl-2" />
                            </TableCell>
                            <TableCell className="cursor-pointer">
                                <Trash className="w-5 h-5 pl-2 text-red-700" onClick={() => handleDeleteClick(user.id, `${user.nome} ${user.sobrenome}`)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>


            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <p className="mb-4">Tem certeza que deseja excluir o usuário {deletedUserName}?</p> {/* Mostrar o nome do usuário aqui */}
                        <div className="flex justify-end">
                            <Button className="mr-2 bg-red-600 hover:bg-red-500 text-white" onClick={handleConfirmDelete}>Confirmar</Button>
                            <Button className="bg-gray-600 hover:bg-gray-500 text-white" onClick={handleCancelDelete}>Cancelar</Button>
                        </div>
                    </div>
                </div>
            )}

            <Button className="m-2" asChild>
                <Link href="/">Voltar</Link>
            </Button>
        </div>
    );
};
