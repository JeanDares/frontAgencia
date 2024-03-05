import { EditForm } from "@/components/EditForm/EditForm"

interface EditarProps {
    params: { id: string }
}
export default function Editar({ params }: EditarProps) {

    return (
        <EditForm userId={params.id} />
    )
}