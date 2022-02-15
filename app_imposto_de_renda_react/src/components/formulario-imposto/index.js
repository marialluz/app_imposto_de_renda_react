import { useState } from 'react';

export function FormularioImposto({ setResultado }) {
  const [salario, setSalario] = useState(null);

  function calcularImposto(salarioBruto) {
    // Verifica se o usuário digitou um salário válido
    if (isNaN(salarioBruto) || !salarioBruto) {
      alert('Digite um salário válido');
      return; // para de executar a função
    }

    // Declarando a variável de desconto do INSS
    var salarioDescontoINSS = 0;

    // Declarando a variável que será o salário final(líquido) do usuário
    var salarioLiquido = 0;

    // Calculando o desconto do INSS
    // FaixaINSS 1: Salários até R$  1.100 –> 7,5%
    if (salarioBruto <= 1100)
      salarioLiquido = salarioBruto - salarioBruto * 0.075;
    // 7,5%
    // FaixaINSS 2: Salários de 1.100,01 até R$ 2.203,48 –> 9%
    else if (salarioBruto >= 1100.01 && salarioBruto <= 2203.48)
      salarioDescontoINSS = salarioBruto - salarioBruto * 0.09;
    // 9%
    // FaixaINSS 3: Salários de R$ 2.203,49 até R$ 3.305,22 –> 12%;
    else if (salarioBruto >= 2203.49 && salarioBruto <= 3305.22)
      salarioDescontoINSS = salarioBruto - salarioBruto * 0.12;
    // 12%
    // FaixaINSS 4: Salários de R$ 3.305,23 até R$ 6.433,57 –> 14%.
    else if (salarioBruto >= 3305.23 && salarioBruto <= 5093.5)
      salarioDescontoINSS = salarioBruto - salarioBruto * 0.14;
    // 14%
    // Para salários acima de 5093,5 o desconto é R$ 713,09 pois esse é o limite
    else salarioDescontoINSS = salarioBruto - 713.09;

    // Declarando a variável de desconto do IRPF
    var descontoIRPF = 0;

    // Calculando o desconto do IRPF e o salário final
    if (!(salarioBruto <= 1100)) {
      // Verificando se o salário resultante do desconto do INSS será isento de desconto do IRPF
      if (salarioDescontoINSS <= 1903.98) salarioLiquido = salarioDescontoINSS;
      else {
        // FaixaIRPF 1: de R$ 1.903,99 até R$ 2.826,65 -> 7,5%
        if (salarioDescontoINSS <= 2826.65)
          descontoIRPF += (salarioDescontoINSS - 1903.98) * 0.075;
        // 7,5%
        // Caso o salarioDescontoINSS exceda o limite superior da FaixaIRPF 1, o valor do desconto máximo da FaixaIRPF 1 será adicionado
        else descontoIRPF += 69.2;

        // FaixaIRPF 2: De R$ 2.826,66 até R$ 3.751,05 -> 15%
        if (salarioDescontoINSS > 2826.65 && salarioDescontoINSS <= 3751.05)
          descontoIRPF += (salarioDescontoINSS - 2826.65) * 0.15;
        // 15%
        // Caso o salarioDescontoINSS exceda o limite superior da FaixaIRPF 2, o valor do desconto máximo da FaixaIRPF 2 será adicionado
        else if (salarioDescontoINSS > 3751.05) descontoIRPF += 138.66;

        // FaixaIRPF 3: De R$ 3.751,06 até R$ 4.664,68 -> 22,5%
        if (salarioDescontoINSS > 3751.05 && salarioDescontoINSS <= 4664.68)
          descontoIRPF += (salarioDescontoINSS - 3751.05) * 0.225;
        // 22.5%
        // Caso o salarioDescontoINSS exceda o limite superior da FaixaIRPF 3, o valor do desconto máximo da FaixaIRPF 3 será adicionado
        else if (salarioDescontoINSS > 4664.68) descontoIRPF += 205.57;

        // FaixaIRPF 4: Acima de R$ 4.664,68 -> 27,5%
        if (salarioDescontoINSS > 4664.68)
          descontoIRPF += (salarioDescontoINSS - 4664.68) * 0.275; // 27.5%

        // Aplicando o desconto do IRPF no salário já descontado do INSS
        salarioLiquido = salarioDescontoINSS - descontoIRPF;
      }
    }

    setResultado(salarioLiquido.toFixed(2));
  }

  return (
    <section id="calcularImpostoDiv">
      <h1 class="titulo">Cálculo do Imposto de Renda</h1>

      <form id="formImposto">
        <div class="entrada">
          <p>Digite o salário bruto (R$):</p>
          <input
            id="salarioBruto"
            type="number"
            onChange={(e) => setSalario(e.target.value)}
          />
        </div>

        <button type="button" onClick={() => calcularImposto(salario)} class="botao">
          Calcular
        </button>
      </form>
    </section>
  );
}
