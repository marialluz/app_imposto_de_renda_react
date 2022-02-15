import arrowLeft from '../../assets/arrow-left.svg'

export function Resultado({ resultado, setResultado }) {
  return (
    <div id="mostrarResultadoDiv">
      <span class="voltar" onClick={() => setResultado(0)}>
        <img src={arrowLeft} alt="Seta para esquerda" />
        Voltar
      </span>

      <h1 class="titulo">Salário Líquido</h1>

      <p class="resultado">
        R$ <span id="salarioLiquido">{resultado}</span>
      </p>
    </div>
  );
}
