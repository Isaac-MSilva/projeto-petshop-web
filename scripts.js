// Função 1: Exibe um alerta ao enviar o formulário (Simulação de cadastro)
function salvarAgendamento(event) {
    event.preventDefault(); // Impede o recarregamento da página
    
    let nome = document.getElementById('nomeCliente').value;
    let pet = document.getElementById('nomePet').value;
    let data = document.getElementById('dataAgendamento').value;
    let hora = document.getElementById('horaAgendamento').value;

    alert(`Agendamento Confirmado!\n\nCliente: ${nome}\nPet: ${pet}\nData: ${data} às ${hora}\n\nEntraremos em contato para confirmar.`);
}

// Função 2: Função Temporal (Relógio em tempo real no rodapé)
function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const relogioElement = document.getElementById('relogio');
    if (relogioElement) {
        relogioElement.textContent = `Horário atual: ${horas}:${minutos}:${segundos}`;
    }
}

// Atualiza o relógio a cada 1 segundo (1000 milissegundos)
setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // Chama imediatamente ao carregar