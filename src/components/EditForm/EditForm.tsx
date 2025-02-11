'use client'

import { Accordion } from "@/components/ui/accordion";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://apiagencia-rmur.onrender.com';
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormAccordion } from "../Form/FormAccordion";
import { addressFields, personalFields, purchaseFields, spouseFields } from "../Form/utils";
import { formSchema, formWithSpouseSchema } from "../Form/validation";

interface EditFormProps {
    userId: string
}

export function EditForm({ userId }: EditFormProps) {
    const [user, setUser] = useState()
    const router = useRouter()

    const handleData = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/users/listar`);
            const data = await response.json();
            setUser(data)
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        handleData()
    },)

    const [maritalStatus, setMaritalStatus] = useState('')

    useEffect(() => {
        console.log(maritalStatus)
    }, [maritalStatus])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(maritalStatus === 'casado' ? formWithSpouseSchema : formSchema),
        defaultValues: user
    });

    useEffect(() => {
        form.reset(user);
    }, [form, user]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const options = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            };

            await fetch(`${API_BASE_URL}/users/${userId}`, options);
            router.push("/lista");
        } catch (error) {
            console.error("Erro ao salvar formulário:", error);
        }
    };

    return (
        <>
            {user && <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} >
                    <h1 className="text-lg bg-violet-500 text-violet-50 rounded-lg p-4">Edite o formulário:</h1>
                    <Accordion type="multiple" defaultValue={['compra', 'pessoal']} >

                        <FormAccordion title='Dados Pessoais' value="pessoal" dataFields={personalFields} control={form.control} setMaritalStatus={setMaritalStatus} maritalStatus={maritalStatus} />
                        {maritalStatus === 'casado' && (
                            <FormAccordion title={'Dados do Cônjuge'} value="conjuge" dataFields={spouseFields} control={form.control} />
                        )}
                        <FormAccordion title='Endereço' value="enderecoResidencial" dataFields={addressFields} control={form.control} />
                        <FormAccordion title='Dados da Compra' value="compra" dataFields={purchaseFields} control={form.control} />

                    </Accordion>

                    <Button className="m-2" asChild>
                        <Link href="/lista">Voltar</Link>
                    </Button>

                    <Button type="submit" className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded mt-4">
                        Salvar
                    </Button>
                </form >
            </Form >}
        </>
    );
}
