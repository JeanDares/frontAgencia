

import { RegistrationForm } from "./componentes/form/formComponent";

interface Props {
  formData: FormData;
}

export interface FormData {
  campos: { nome: string; obrigatorio: boolean }[];
}

export default function Home() {

  const formData: FormData = {
    campos: [
      { nome: 'Nome', obrigatorio: true },
      { nome: 'Sobrenome', obrigatorio: true },
      { nome: 'Email', obrigatorio: true },
      { nome: 'Telefone Celular', obrigatorio: true },
      { nome: 'Data de Nascimento', obrigatorio: false },
      { nome: 'Estado Civil', obrigatorio: false },
      { nome: 'Naturalidade', obrigatorio: false },
      { nome: 'CPF', obrigatorio: true },
      { nome: 'RG', obrigatorio: false },
      { nome: 'Profissão', obrigatorio: false },
      { nome: 'Nome do Cônjuge', obrigatorio: false },
      { nome: 'CPF do Cônjuge', obrigatorio: false }
    ]
  };

  return (
    <RegistrationForm />
  )
}




{/* <main className="bg-gray-300 h-screen flex items-center justify-center">


<Tabs defaultValue="account" className="w-[800px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="pessoal">Dados Pessoais</TabsTrigger>
    <TabsTrigger value="residencial">Dados Residenciais</TabsTrigger>
  </TabsList>

  <TabsContent value="pessoal">
    <FormComponent formData={formData} />
  </TabsContent>

</Tabs>



</main> */}