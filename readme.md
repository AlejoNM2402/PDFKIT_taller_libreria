# ✅ Generador de Listas de Tareas en PDF

## 🧩 Descripción del problema

A diario, muchas personas crean listas de tareas para organizar su día. Sin embargo, estas listas suelen perderse fácilmente al ser escritas en papel o apps sin respaldo. Esta aplicación ofrece una solución práctica: **permitir al usuario crear tareas desde consola y generar automáticamente un documento PDF**, facilitando el almacenamiento y la organización de pendientes.

---

## 📚 Librería utilizada

Para resolver este problema se usó la siguiente librería de NPM:

- **[pdfkit](https://www.npmjs.com/package/pdfkit)**  
  Una librería poderosa y flexible para generar documentos PDF en Node.js desde cero, sin depender de herramientas externas.

  

---

## 🛠️ ¿Cómo se implementó?

El proyecto fue desarrollado como una **aplicación de consola con Node.js** que ofrece un menú interactivo utilizando `inquirer`.

### Flujo del programa:

1. El usuario ejecuta el archivo principal: `node index.js`.
2. Se muestra un menú interactivo con las opciones:
   - Agregar tarea
   - Eliminar tarea
   - Generar PDF con las tareas
   - Salir
3. Las tareas se almacenan en un arreglo y se guardan en un archivo temporal `tareas.json`.
4. Al generar el PDF:
   - Se crea un documento con `pdfkit`.
   - Se recorren todas las tareas y se imprimen en el PDF.
   - El archivo `tareas.pdf` se guarda en el mismo directorio.

---

## 📦 Instalación

### 🔧 Requisitos previos

- Tener instalado **Node.js** (v14 o superior)  
  👉 Puedes descargarlo desde: https://nodejs.org

### ⏬ Pasos de instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/generador-tareas-pdf.git
```

2. Entra al proyecto: 

```bash
cd generador-tareas-pdf
```

3. Instala las dependencias:

```bash
npm install
```

### Uso:

Una vez instaladas las dependencias, ejecuta la aplicación con:

```bash
node index.js
```

Verás el siguiente menú:
```bash
markdown
Copiar
Editar
? ¿Qué quieres hacer?
  > Agregar una nueva tarea
    Eliminar una tarea existente
    Generar archivo PDF con las tareas
    Salir
```

Con este menu puedes interactuar usando las flechas de tu teclado y el enter, para conocer mejor como se usa, prepare un video que te dejo aquí abajo para que puedas saber mejor como funciona y como se usa.

[Video de la explicación](https://youtu.be/6pd0ggSD3nA)

## Desarrollado por:
Alejandro Naranjo Marin
