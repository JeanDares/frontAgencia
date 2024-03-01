'use client'
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "./inputField";

const formSchema = z.object({
    nome: z.string().min(2).max(50),
    sobrenome: z.string().min(2).max(50),
    email: z.string().email(),
    telefone: z.string(),
    dataNascimento: z.string().optional(),
    estadoCivil: z.string().optional(),
    nacionalidade: z.string().optional(),
    cpf: z.string().min(11).max(14),
    rg: z.string().min(2).max(20),
    profissao: z.string().optional(),
    nomeConjuge: z.string().optional(),
    cpfConjuge: z.string().min(11).max(14).optional(),
    endereco: z.string().optional(),
    bairro: z.string().optional(),
    cidade: z.string().optional(),
    codigoPostal: z.string().min(8).max(9).optional(),
    observacao: z.string().optional(),
    dataCompra: z.string().optional(),
})

export function RegistrationForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: Object.fromEntries(
            Object.entries(formSchema.shape).map(([key, value]) => [key, ""])
        ),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
                <div className="grid grid-cols-1 gap-y-4">
                    {Object.entries(formSchema.shape).map(([key, value]) => (
                        <InputField
                            key={key}
                            control={form.control}
                            name={key}
                            label={key.replace(/([A-Z])/g, ' $1').trim()} // Adiciona espaços antes de letras maiúsculas
                            placeholder={key}
                        />
                    ))}
                </div>
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
                    Submit
                </Button>
            </form>
        </Form>
    )
}
