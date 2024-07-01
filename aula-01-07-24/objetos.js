// São estruturas para representar dados

let pessoa = {
    nome: "Marcelo Reggiani",
    cpf: "999.999.999-99",
    dataNascimento: "10/01/2000",
    contato: {  //  um objeto dentro de outro objeto é chamado de OBJETO ANINHADO
        email: "marceloreggiani@soulcode.com",
        telefone: "(31) 9-999-9999",
        fax: "(31) 9-999-8888"
    },
    endereco: {
        cidade: "Belo Horizonte",
        estado: "MG",
        cep: "30000-00",
        rua: "Rua Galo",
        numero: "13",
    },
    objetivosProfissionais: ["Home Office", "Desenvolvedor Senior", "Exterior"],
    formacao: [
        {nome: "Ensino Médio", periodo: "2000-2003"},
        {nome: "Tecnico em Informatica", periodo: "2003-2005"},
        {nome: "Bacharelado em Computação", periodo: "2005-2010"}
    ],
}
console.log(pessoa.contato);
console.log(pessoa.contato.email);
console.log(pessoa.endereco);
console.log(pessoa.endereco.estado);
pessoa.objetivosProfissionais.push("Dolar")
console.log(pessoa.objetivosProfissionais);
pessoa.objetivosProfissionais.forEach(objetivo => console.log(objetivo));
console.log(pessoa.formacao);
pessoa.formacao.push({nome: "Mestrado em IA", periodo: "2010-2012"});
console.log(pessoa.formacao[0].nome);
for(let f of pessoa.formacao) {
    console.log("Formação: ", f.nome);
    console.log("Periodo: ", f.periodo);
}

// Exemplo. Crie um objeto para representar um aluno ( nome, serie, materias (nome da materia, nome do professor), notas)

let aluno = {
    nome: "Marcelo",
    serie: "Primeira",
    materias: [
        {nomeMateria: "Matematica", professor: "Almir"},
        {nomeMateria: "Fisica", professor: "Paulo"},
    ]
}

