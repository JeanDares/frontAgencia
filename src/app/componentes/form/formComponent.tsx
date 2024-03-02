'use client'
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckFields } from "./checkFilds";
import InputField from "./inputField";

const formSchema = z.object({
    nome: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres' }).max(50, { message: 'O nome não pode ter mais de 50 caracteres' }),
    sobrenome: z.string().min(2, { message: 'O sobrenome deve ter pelo menos 2 caracteres' }).max(50, { message: 'O sobrenome não pode ter mais de 50 caracteres' }),
    email: z.string().email({ message: 'O email fornecido não é válido' }),
    telefone: z.string(),
    dataNascimento: z.string().optional(),
    estadoCivil: z.string().optional(),
    nacionalidade: z.string().optional(),
    cpf: z.string().min(11, { message: 'O CPF deve ter pelo menos 11 caracteres' }).max(14, { message: 'O CPF não pode ter mais de 14 caracteres' }),
    rg: z.string().min(2, { message: 'O RG deve ter pelo menos 2 caracteres' }).max(20, { message: 'O RG não pode ter mais de 20 caracteres' }),
    profissao: z.string().optional(),
    nomeConjuge: z.string().optional(),
    cpfConjuge: z.string().min(11, { message: 'O CPF do cônjuge deve ter pelo menos 11 caracteres' }).max(14, { message: 'O CPF do cônjuge não pode ter mais de 14 caracteres' }).optional(),
    endereco: z.string().optional(),
    bairro: z.string().optional(),
    cidade: z.string().optional(),
    codigoPostal: z.string().min(8, { message: 'O código postal deve ter pelo menos 8 caracteres' }).max(9, { message: 'O código postal não pode ter mais de 9 caracteres' }).optional(),
    observacao: z.string().optional(),
    dataCompra: z.string().optional(),
});


export function RegistrationForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: Object.fromEntries(
            Object.entries(formSchema.shape).map(([key, value]) => [key, ""])
        ),
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    const estadoCivilOptions = ["Solteiro(a)", "Casado(a)", "Divorciado(a)"];

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-screen-lg mx-auto p-4 bg-white rounded-lg shadow-md w-80%">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4">
                    {Object.entries(formSchema.shape).map(([key, value]) => (
                        <div key={key} className="mb-4">
                            {key === "estadoCivil" ? (
                                <CheckFields
                                    id="estadoCivil"
                                    control={form.control}
                                    name={key}
                                    label={key.replace(/([A-Z])/g, ' $1').trim()}
                                    options={estadoCivilOptions}
                                />
                            ) : (
                                <InputField
                                    control={form.control}
                                    name={key}
                                    label={key.replace(/([A-Z])/g, ' $1').trim()}
                                    placeholder={key}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <Button type="submit" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-4">
                    Submit
                </Button>
            </form>
        </Form>
    );
}
