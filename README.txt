BARBAS — CONTADOR COMPARTIDO DE SCANS

- Empieza en 0.
- Cada vez que se abre el enlace, suma 1 en el servidor.
- Todos los visitantes ven el mismo contador.
- Recargar la página también suma otra visita.

PRUEBA LOCAL:
1. Instala Node.js 20 o superior.
2. Abre una terminal en esta carpeta.
3. Ejecuta: npm install
4. Ejecuta: npm start
5. Visita http://localhost:3000

PUBLICACIÓN:
Sube el proyecto a un hosting compatible con Node.js (por ejemplo Render o Railway) y usa `npm start`.
Configura un disco/volumen persistente y la variable DB_PATH para guardar scans.sqlite ahí. Si el hosting no conserva ese archivo, el total podría reiniciarse en un nuevo despliegue.

El ZIP incluye server.js, package.json y public/ con la página y la imagen de diseño.
