
export function calcularTempoEntreDatas(dataInicioISO, dataFimISO) {
  const dataInicio = new Date(dataInicioISO);
  const dataFim = new Date(dataFimISO);

  let anos = dataFim.getFullYear() - dataInicio.getFullYear();
  let meses = dataFim.getMonth() - dataInicio.getMonth();
  let dias = dataFim.getDate() - dataInicio.getDate();

  if (dias < 0) {
    meses -= 1;
    dias += new Date(dataFim.getFullYear(), dataFim.getMonth(), 0).getDate();
  }

  if (meses < 0) {
    anos -= 1;
    meses += 12;
  }

  let resultado = "";

  if (anos > 0) {
    resultado += `${anos} ${anos === 1 ? "ano" : "anos"}`;
    if (meses > 6) resultado += `, ${meses} ${meses === 1 ? "mês" : "meses"}`;
  } else if (meses > 0) {
    resultado += `${meses} ${meses === 1 ? "mês" : "meses"}`;
  } else {
    resultado += `${dias} ${dias === 1 ? "dia" : "dias"}`;
  }

  return resultado || "0 dias";
}