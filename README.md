# eval-nodejs-mod4

## Estructura del proyecto

EVAL-NODEJS-MOD4/          # Carpeta raíz del proyecto
├─ node-tools/             # Módulo principal
│  ├─ evaluador.js         # Lógica de evaluación de edad
│  ├─ generador.js         # Script principal que genera info.txt
│  └─ info.txt             # Archivo de salida generado
├─ .gitignore              # Archivos y carpetas ignorados por Git
└─ README.md               # Documentación del proyecto


## ¿Qué hace el script?

En términos generales el script genera un archivo de texto con datos personales y si es mayor de edad o no dependiendo de la edad ingresada, se usan funciones lambda para comparar y se implementan módulos.

1. **Funciones separadas en módulos**:

   * `evaluador.js`: expone la función `evaluarEdad(edad)` que retorna "Mayor de edad" o "Menor de edad" según el valor de la `edad` ingresado.
   * `generador.js`: importa `evaluarEdad`, define nombre y edad, y escribe el archivo `info.txt`.

2. **Generación de `info.txt`**:

   * El script une el valor de la variable **nombre**, **edad** y el **estatus** calculado en un texto.
   * Se usa `fs.writeFileSync` junto con `__dirname` y `path.join` para asegurar que `info.txt` se cree dentro de la carpeta del proyecto (`node-tools`).

3. **Estructura del archivo resultante**:

   Nombre: Ángeles Pérez Pérez
   Edad: 28
   Estatus: Mayor de edad


## ¿Qué aprendiste de Node.js?

* Cómo usar `fs` para operaciones de archivo y `path` para "construir" rutas de manera segura.
* Separación de responsabilidades/lógica del negocio en archivos distintos y luego invocarlos en otos utilizando (`module.exports` y `require`).
* Uso de `__dirname` para usar dinámicamente directorio en el script.
* Manejo de excepciones con `try/catch` y salida de proceso con `process.exit(1)` ante fallos en los procesos.


## ¿Tuviste errores o dificultades? ¿Cómo los resolviste?

* **Rutas relativas**: al ejecutar desde una carpeta fuera de `node-tools`, `fs.writeFileSync('info.txt')` creaba el archivo en la ruta donde corría el comando, se solucionó al implementar `path.join(__dirname, 'info.txt')` para pasar la ruta donde quería que se almacenara el archivo.
* **Tipo de datos**: cuando probaba con valores para edad como "m" daba error, por lo que se valida que `edad` es un número y se lanza `TypeError` si no.

## ¿Cómo lo ejecutarías en otra máquina?

1. **Clonar o copiar** el directorio `node-tools` a la máquina destino.
2. **Instalar Node.js** (versión 14+):

   ```bash
   brew install node      # para macOS (con Homebrew)
   # o descarga desde https://nodejs.org
   ```
3. **Navegar** a la carpeta del proyecto:

   ```bash
   cd ruta-del-proyecto/node-tools
   ```
4. **Ejecutar** el script:

   ```bash
   node node-tools/generador.js
   ```
5. **Verificar** que `info.txt` se haya creado correctamente en la carpeta `node-tools`.