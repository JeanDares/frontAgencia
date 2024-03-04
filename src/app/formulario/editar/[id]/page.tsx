

import { useRouter } from "next/router";


export default function Formulario() {
    const router = useRouter()
    return (
        // <EditForm />
        <p>Post: {router.query.id}</p>
    )
}


