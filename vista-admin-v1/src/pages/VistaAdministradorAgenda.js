import React from 'react';
import { Link } from 'react-router-dom';
import styles from './VistaAdministradorAgenda.module.css';

const VistaAdministradorAgenda = ({ product }) => {
  const agendas = [
    {
      id: 1,
      fechaInicio: '2023-05-01',
      fechaFin: '2023-05-07',
      cliente: 'Cliente 1',
    },
    {
      id: 2,
      fechaInicio: '2023-05-10',
      fechaFin: '2023-05-15',
      cliente: 'Cliente 2',
    },
    {
      id: 3,
      fechaInicio: '2023-05-20',
      fechaFin: '2023-05-25',
      cliente: 'Cliente 3',
    },
  ];

  return (
    <div className={styles.container}>
      <Link to="/vista-administrador-agregar-productoeditar-producto" className={styles.backButton}>
        Regresar
      </Link>

      <div className={styles.agendasContainer}>
        {agendas.map((agenda) => (
          <div key={agenda.id} className={styles.agendaCard}>
            <p>
              <strong>Fecha Inicio:</strong> {agenda.fechaInicio}
            </p>
            <p>
              <strong>Fecha Fin:</strong> {agenda.fechaFin}
            </p>
            <p>
              <strong>Cliente:</strong> {agenda.cliente}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VistaAdministradorAgenda;