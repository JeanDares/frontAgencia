'use client'
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    username: z.string().min(2).max(50),
    surname: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string(),
    birthDate: z.string().optional(),
    maritalStatus: z.string().optional(),
    nationality: z.string().optional(),
    cpf: z.string().min(11).max(14),
    rg: z.string().min(2).max(20),
    profession: z.string().optional(),
    spouseName: z.string().optional(),
    spouseCpf: z.string().min(11).max(14).optional(),
    address: z.string().optional(),
    neighborhood: z.string().optional(),
    city: z.string().optional(),
    zipCode: z.string().min(8).max(9).optional(),
    observation: z.string().optional(),
    purchaseDate: z.string().optional(),
})

export function RegistrationForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            surname: "",
            email: "",
            phone: "",
            birthDate: "",
            maritalStatus: "",
            nationality: "",
            cpf: "",
            rg: "",
            profession: "",
            spouseName: "",
            spouseCpf: "",
            address: "",
            neighborhood: "",
            city: "",
            zipCode: "",
            observation: "",
            purchaseDate: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="text-gray-600">Nome*</FormLabel>
                            <FormControl className="mt-1 relative rounded-md shadow-sm">
                                <Input
                                    placeholder="Seu nome"
                                    type="text"
                                    {...field}
                                    className="block w-full pr-10 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Adicione os campos restantes seguindo a mesma estrutura */}
                {/* Exemplo para adicionar o campo Sobrenome */}
                <FormField
                    control={form.control}
                    name="surname"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="text-gray-600">Sobrenome*</FormLabel>
                            <FormControl className="mt-1 relative rounded-md shadow-sm">
                                <Input
                                    placeholder="Seu sobrenome"
                                    type="text"
                                    {...field}
                                    className="block w-full pr-10 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Continue adicionando os campos conforme necessário */}
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Submit
                </Button>
            </form>
        </Form>
    )
}
