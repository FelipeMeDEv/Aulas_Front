import React from 'react';

const FourthComponent = () => {
  const alunos = [
    { nome: 'Felipe', matricula: 1234 },
    { nome: 'Jarbas', matricula: 1545 },
    { nome: 'Larissa', matricula: 1543 },
    { nome: 'Gabriel', matricula: 9860 },
    { nome: 'Luana', matricula: 7593}
  ];

  const alunosOrdenados = [...alunos].sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <div>
      <h1>Lista de Alunos </h1>
      <ol>
        {alunosOrdenados.map((aluno) => (
          <li key={aluno.matricula}>
            Nome: {aluno.nome}, Matrícula: {aluno.matricula}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FourthComponent;
