import React,{useContext, useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import styles from './VistaAdministradorAgenda.module.css';
import {DataContext} from '../components/DataProvider'
import axios from '../axios';

const VistaAdministradorAgenda = () => {

  const navigate = useNavigate()
  const dataContext = useContext(DataContext)

  const [agendas,setAgendas] = useState()

  if(!agendas&&dataContext.selectedProducts&&dataContext.selectedProducts[0]){
    axios.api(`agendasPorIdproductos/${dataContext.selectedProducts[0].idproductos}`).then((res)=>{
      try {
        setAgendas(res.data.Res)
        dataContext.agendasCargadas = true
      } catch (e) {}
    })  
  }

  return (
    <div className={styles.container}>
      <Link to="/vista-administrador-agregar-productoeditar-producto" className={styles.backButton}>
        Regresar
      </Link>

      <div className={styles.agendasContainer}>
        {agendas&&agendas.map((agenda) => (
          <div key={agenda.id} className={styles.agendaCard}>
            <p>
              <strong>Fecha Inicio:</strong> {agenda.fecha_inicio.substring(0,10)}
            </p>
            <p>
              <strong>Fecha Fin:</strong> {agenda.fecha_fin.substring(0,10)}
            </p>
            <p>
              <strong>Conductor:</strong> {agenda.conductor.nombre}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VistaAdministradorAgenda;