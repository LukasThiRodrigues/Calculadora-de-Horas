const readline = require('readline');
const calculateHoursWorked = require('./calculadora_horas');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    try {
        const startTime = await askQuestion('Digite o horário de início (HH:mm, H:mm ou HHmm): ');
        const endTime = await askQuestion('Digite o horário de término (HH:mm, H:mm ou HHmm): ');
        const breakTime = await askQuestion('Digite a duração do intervalo (HH:mm, H:mm ou HHmm, ou deixe em branco para 00:00): ');

        const hoursWorked = calculateHoursWorked(startTime, endTime, breakTime || '00:00');

        console.log(`Horas trabalhadas: ${hoursWorked.toFixed(2)} horas`);

    } catch (error) {
        console.error(`Erro: ${error.message}`);
    } finally {
        rl.close();
    }
}

main();
