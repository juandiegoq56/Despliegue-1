const fs = require('fs');
const path = require('path');

// Función para registrar eventos de auditoría en un archivo de registro
function logAuditEvent(eventType, username, extraData = {}) {
    const logFilePath = path.join(__dirname, 'audit.log');
    const timestamp = new Date().toISOString();
    const eventData = {
        eventType,
        username,
        timestamp,
        ...extraData
    };
    const logMessage = `${timestamp}: ${JSON.stringify(eventData)}\n`;

    // Escribir el evento en el archivo de registro
    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Error al escribir en el archivo de registro de auditoría:', err);
        }
    });
}
module.exports = logAuditEvent;
