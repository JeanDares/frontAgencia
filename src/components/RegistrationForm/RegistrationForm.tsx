'use client'

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormAccordion } from "../Form/FormAccordion";
import { addressFields, personalFields, purchaseFields, spouseFields } from "../Form/utils";
import { formSchema, formWithSpouseSchema } from "../Form/validation";


export function RegistrationForm() {
    const [maritalStatus, setMaritalStatus] = useState('')


    useEffect(() => {
        console.log(maritalStatus)
    }, [maritalStatus])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(maritalStatus === 'casado' ? formWithSpouseSchema : formSchema),
        defaultValues: Object.fromEntries(
            Object.keys(formSchema.shape).map(key => [key, ""])
        )
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }

        try {
            fetch("http://localhost:3001/users", options)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-screen-lg mx-auto p-4 bg-white rounded-lg shadow-md w-80%">
                <h1 className="text-lg bg-violet-500 text-violet-50 rounded-lg p-4">Preencha o formulário:</h1>
                <Accordion type="multiple" defaultValue={['compra', 'pessoal']} >

                    <FormAccordion title='Dados Pessoais' value="pessoal" dataFields={personalFields} control={form.control} setMaritalStatus={setMaritalStatus} maritalStatus={maritalStatus} />
                    {maritalStatus === 'casado' && (
                        <FormAccordion title={'Dados do Cônjuge'} value="conjuge" dataFields={spouseFields} control={form.control} />
                    )}
                    <FormAccordion title='Endereço' value="enderecoResidencial" dataFields={addressFields} control={form.control} />
                    <FormAccordion title='Dados da Compra' value="compra" dataFields={purchaseFields} control={form.control} />

                </Accordion>

                <Button className="m-2" asChild>
                    <Link href="/">Voltar</Link>
                </Button>
                <Button type="submit" className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded mt-4">
                    Enviar
                </Button>
            </form >
        </Form >
    );
}
