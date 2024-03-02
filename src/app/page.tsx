

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
