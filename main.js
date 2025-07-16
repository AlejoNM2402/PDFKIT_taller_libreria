import inquirer from 'inquirer';
import PDFDocument from 'pdfkit';
import fs from 'fs';

function generarPDF(titulo, tareas) {
const doc = new PDFDocument();
const fileName = `recordatorio_${Date.now()}.pdf`;
doc.pipe(fs.createWriteStream(fileName));

doc
    .fontSize(22)
    .text('📝 Recordatorio Personal', { align: 'center' })
    .moveDown();

doc
    .fontSize(16)
    .text(`Título: ${titulo}`)
    .moveDown();

doc.text('Tareas:', { underline: true });

tareas.forEach((tarea, index) => {
    doc.text(`${index + 1}. ☐ ${tarea}`);
});

doc.end();
console.log(`✅ PDF creado: ${fileName}`);
}

async function mainMenu() {
const { opcion } = await inquirer.prompt([
    {
    type: 'list',
    name: 'opcion',
    message: 'Selecciona una opción:',
    choices: [
        '1. Generar recordatorio en PDF',
        '2. Ver descripción del problema',
        '3. Salir',
    ],
    },
]);

switch (opcion) {
    case '1. Generar recordatorio en PDF':
    const { titulo } = await inquirer.prompt({
        type: 'input',
        name: 'titulo',
        message: 'Escribe el título del recordatorio:',
    });

    const { tareasInput } = await inquirer.prompt({
        type: 'input',
        name: 'tareasInput',
        message: 'Escribe las tareas separadas por comas:',
    });

    const tareas = tareasInput.split(',').map(t => t.trim());
    generarPDF(titulo, tareas);
    break;

    case '2. Ver descripción del problema':
    console.log(`
🧠 Problema:
Las personas suelen olvidar tareas cotidianas. Esta app de consola permite generar un PDF con tareas o recordatorios para ayudar a organizar el día y evitar olvidos. Ideal para imprimir o guardar en el celular.
📚 Solución:
Usamos la librería pdfkit para crear documentos PDF personalizados directamente desde la consola.
`);
    break;

    case '3. Salir':
    console.log('👋 ¡Hasta luego!');
    process.exit();
}

console.log('\n');
  await mainMenu(); // Volver al menú
}

mainMenu();
