const dnsd = require('dnsd');

// Configuración del servidor
const port = 53; // Puerto DNS estándar
const ipAddress = '127.0.0.1'; // La dirección IP del servidor

// Tabla de redireccionamiento
const domainRedirects = {
    'rhino.com': '192.168.5.1',
  'example.com': '192.168.1.10',
  'otroejemplo.com': '192.168.1.11',
};

// Función para manejar las consultas DNS
function handleDnsQuery(req, res) {
  try {
    const hostname = req.question[0].name;
    const recordType = req.question[0].type;
  
    // Buscar la redirección para el nombre de dominio
    const redirectIp = domainRedirects[hostname];
  
    if (redirectIp) {
      // Responder con la dirección IP redirigida
      res.end(redirectIp);
    } else {
      // Responder con un error de "no encontrado"
      console.log(`Error: domain ${hostname} not found.`)
      res.end('NXDOMAIN');
    }
  } catch (error) {
  }
}

// Crear el servidor DNS
const server = dnsd.createServer(handleDnsQuery);

// Iniciar el servidor
server.listen(port, ipAddress, () => {
  console.log(`Servidor DNS escuchando en ${ipAddress}:${port}`);
});