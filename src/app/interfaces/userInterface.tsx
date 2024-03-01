interface UserInterface {
    nome: string; // Nome é obrigatório
    sobrenome: string; // Sobrenome é obrigatório
    email: string; // Email é obrigatório
    telefoneCelular: string; // Telefone Celular é obrigatório
    dataNascimento?: string;
    estadoCivil?: string;
    naturalidade?: string;
    cpf: string; // CPF é obrigatório
    rg: string;
    profissao?: string;
    nomeConjuge?: string; // Nome do Cônjuge é obrigatório se o estado civil for Casado
    cpfConjuge?: string; // CPF do Cônjuge é obrigatório se o estado civil for Casado
    enderecoResidencial: string; // Endereço Residencial é obrigatório
    bairro: string; // Bairro é obrigatório
    municipio: string; // Município é obrigatório
    cep: string; // CEP é obrigatório
    observacao?: string;
    dataCompra?: string;
}
export default UserInterface