export function formatarTempoDecorrido(data) {
    const agora = new Date();
    const diferenca = Math.floor((agora - new Date(data)) / 1000);
  
    const minutos = Math.floor(diferenca / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
  
    if (diferenca < 60) return 'Agora pouco';
    if (minutos < 60) return `Há ${minutos} ${minutos === 1 ? 'minuto' : 'minutos'}`;
    if (horas < 24) return `Há ${horas} ${horas === 1 ? 'hora' : 'horas'}`;
    return `Há ${dias} ${dias === 1 ? 'dia' : 'dias'}`;
}
  