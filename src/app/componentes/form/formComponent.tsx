// FormComponent.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from 'react';

// Definindo o tipo das props
interface Props {
    formData: FormData;
}

// Definindo o tipo dos dados do formulário
export interface FormData {
    campos: { nome: string; obrigatorio: boolean }[];
}

const FormComponent: React.FC<Props> = ({ formData }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Seus dados</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap">
                {formData.campos.map((campo, index) => (
                    <div key={index} className="w-full sm:w-1/2 pr-2">
                        <div className="space-y-1">
                            <Label htmlFor={`campo-${index}`}>{campo.nome} {campo.obrigatorio ? '*' : ''}</Label>
                            <Input id={`campo-${index}`} />
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter>
                <Button>Salvar Alterações</Button>
            </CardFooter>
        </Card>
    );
}

export default FormComponent;
