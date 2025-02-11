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
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://apiagencia-rmur.onrender.com";


export function RegistrationForm() {
    const [maritalStatus, setMaritalStatus] = useState('')
    const [showSuccessModal, setShowSuccessModal] = useState(false);


    useEffect(() => {
        console.log(maritalStatus)
    }, [maritalStatus])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(maritalStatus === 'casado' ? formWithSpouseSchema : formSchema),
        defaultValues: Object.fromEntries(
            Object.keys(formSchema.shape).map(key => [key, ""])
        )
    });



    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
        };

        try {
            const response = await fetch(`${API_BASE_URL}/users`, options);
            const responseData = await response.json(); // Para capturar possíveis erros detalhados do backend

            if (response.ok) {
                setShowSuccessModal(true);
            } else {
                console.error("Erro ao enviar formulário:", responseData?.message || "Erro desconhecido");
            }
        } catch (error) {
            console.error("Erro ao enviar formulário:", error);
        }
    };


    const handleCloseModal = () => {
        setShowSuccessModal(false);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}  >
                <h1 className="text-lg bg-violet-500 text-violet-50 rounded-lg p-4">  Preencha o formulário:</h1>
                <Accordion type="multiple" defaultValue={['pessoal']} >

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

            {showSuccessModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <p>Envio concluído com sucesso!</p>
                        <div className="flex justify-end">
                            <Button onClick={handleCloseModal}>
                                <Link href="/lista">Fechar</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </Form >
    );
}
