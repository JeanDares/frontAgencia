import { z } from "zod";

const generateSchemaMessages = (numberCharacters: number) => ({
  minCaracteres: `O campo deve conter no mínimo ${numberCharacters} caracteres.`,
  maxCaracteres: `O campo deve conter no máximo ${numberCharacters} caracteres.`
});

export const formWithSpouseSchema = z.object({
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

export const formSchema = z.object({
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