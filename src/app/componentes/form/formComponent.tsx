'use client'
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    username: z.string().min(2).max(50),
})



export function RegistrationFormField({ form }) {
    return (
        <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input placeholder="Digite seu nome..." {...field} />
                    </FormControl>
                </FormItem>
            )}
        />
    )
}


export function RegistrationForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <RegistrationForm form={form} />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}








// // Definindo o tipo das props
// interface Props {
//     formData: FormData;
// }

// // Definindo o tipo dos dados do formulário
// export interface FormData {
//     campos: { nome: string; obrigatorio: boolean }[];
// }

// 
//     return (
//         // <Card>
//         //     <CardHeader>
//         //         <CardTitle>Seus dados</CardTitle>
//         //     </CardHeader>
//         //     <CardContent className="flex flex-wrap">
//         //         {formData.campos.map((campo, index) => (
//         //             <div key={index} className="w-full sm:w-1/2 pr-2">
//         //                 <div className="space-y-1">
//         //                     <Label htmlFor={`campo-${index}`}>{campo.nome} {campo.obrigatorio ? '*' : ''}</Label>
//         //                     <Input id={`campo-${index}`} />
//         //                 </div>
//         //             </div>
//         //         ))}
//         //     </CardContent>
//         //     <CardFooter>
//         //         <Button>Salvar Alterações</Button>
//         //     </CardFooter>
//         // </Card>
//     );
// }

// 