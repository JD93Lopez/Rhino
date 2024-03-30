const dns = require('dns');

// Define el nombre de dominio que deseas consultar
const domainToQuery = 'rhino.com';

// Realiza una consulta DNS al servidor que has creado
dns.resolve4(domainToQuery, (err, addresses) => {
  if (err) {
    console.error('Error al realizar la consulta DNS:', err);
    return;
  }

  console.log(`Direcciones IP para ${domainToQuery}:`, addresses);
});
