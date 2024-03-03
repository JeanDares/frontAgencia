'use client'

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegistrationAccordion } from "./RegistrationAccordion";
import { addressFields, personalFields, purchaseFields, spouseFields } from "./utils";


export function RegistrationForm() {
    const [checkboxValue, setCheckboxValue] = useState('')

    useEffect(() => {
        console.log(checkboxValue)
    }, [checkboxValue])

    const generateSchemaMessages = (numberCharacters: number) => ({
        minCaracteres: `O campo deve conter no mínimo ${numberCharacters} caracteres.`,
        maxCaracteres: `O campo deve conter no máximo ${numberCharacters} caracteres.`
    });

    const formWithSpouseSchema = z.object({
        nome: z.string().min(2, { message: generateSchemaMessages(2).minCaracteres }).max(50, { message: generateSchemaMessages(50).maxCaracteres }),
        sobrenome: z.string().min(2, { message: generateSchemaMessages(2).minCaracteres }).max(50, { message: generateSchemaMessages(50).maxCaracteres }),
        email: z.string().email({ message: 'O email fornecido não é válido' }),
        telefoneCelular: z.string(),

        dataNascimento: z.date().optional(),

        cpf: z.string().min(11, { message: generateSchemaMessages(11).minCaracteres }).max(14, { message: generateSchemaMessages(14).maxCaracteres }),
        rg: z.string().min(2, { message: generateSchemaMessages(2).minCaracteres }).max(14, { message: generateSchemaMessages(20).maxCaracteres }),

        naturalidade: z.string().optional(),
        enderecoResidencial: z.string().optional(),
        bairro: z.string().optional(),
        municipio: z.string().optional(),
        cep: z.string().min(8, { message: generateSchemaMessages(8).minCaracteres }).max(9, { message: generateSchemaMessages(9).maxCaracteres }),

        profissao: z.string().optional(),
        estadoCivil: z.string().optional(),

        observacao: z.string().optional(),
        dataCompra: z.date().optional(),

        nomeConjuge: z.string().optional(),
        cpfConjuge: z.string().min(11, { message: generateSchemaMessages(11).minCaracteres }).max(14, { message: generateSchemaMessages(14).maxCaracteres }),

    });

    const formSchema = z.object({
        nome: z.string().min(2, { message: generateSchemaMessages(2).minCaracteres }).max(50, { message: generateSchemaMessages(50).maxCaracteres }),
        sobrenome: z.string().min(2, { message: generateSchemaMessages(2).minCaracteres }).max(50, { message: generateSchemaMessages(50).maxCaracteres }),
        email: z.string().email({ message: 'O email fornecido não é válido' }),
        telefoneCelular: z.string(),

        dataNascimento: z.date().optional(),

        cpf: z.string().min(11, { message: generateSchemaMessages(11).minCaracteres }).max(14, { message: generateSchemaMessages(14).maxCaracteres }),
        rg: z.string().min(2, { message: generateSchemaMessages(2).minCaracteres }).max(14, { message: generateSchemaMessages(20).maxCaracteres }),

        naturalidade: z.string().optional(),
        enderecoResidencial: z.string().optional(),
        bairro: z.string().optional(),
        municipio: z.string().optional(),
        cep: z.string().min(8, { message: generateSchemaMessages(8).minCaracteres }).max(9, { message: generateSchemaMessages(9).maxCaracteres }),

        profissao: z.string().optional(),
        estadoCivil: z.string().optional(),

        observacao: z.string().optional(),
        dataCompra: z.date().optional(),

        nomeConjuge: z.string().optional(),
        cpfConjuge: z.string().optional(),

    });


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(checkboxValue === 'casado' ? formWithSpouseSchema : formSchema),
        defaultValues: Object.fromEntries(
            Object.keys(formSchema.shape).map(key => [key, ""])
        )
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {

        console.log(values)

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
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-screen-lg mx-auto p-4 bg-white rounded-lg shadow-md w-80%">
                    <h1 className="text-lg bg-violet-500 text-violet-50 rounded-lg p-4">Preencha o formulário:</h1>
                    <Accordion type="multiple" defaultValue={['compra', 'pessoal']} >

                        <RegistrationAccordion title='Dados Pessoais' value="pessoal" dataFields={personalFields} control={form.control} setCheckboxValue={setCheckboxValue} checkboxValue={checkboxValue} />
                        {checkboxValue === 'casado' && (
                            <RegistrationAccordion title={'Dados do Cônjuge'} value="conjuge" dataFields={spouseFields} setCheckboxValue={setCheckboxValue} checkboxValue={checkboxValue} control={form.control} />
                        )}
                        <RegistrationAccordion title='Endereço' value="enderecoResidencial" dataFields={addressFields} control={form.control} setCheckboxValue={setCheckboxValue} checkboxValue={checkboxValue} />
                        <RegistrationAccordion title='Dados da Compra' value="compra" dataFields={purchaseFields} control={form.control} setCheckboxValue={setCheckboxValue} checkboxValue={checkboxValue} />

                    </Accordion>

                    <Button className="m-2" asChild>
                        <Link href="/">Voltar</Link>
                    </Button>

                    <Button type="submit" className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded mt-4">
                        Enviar
                    </Button>

                   
                </form >
            </Form >
        </>
    );
}
