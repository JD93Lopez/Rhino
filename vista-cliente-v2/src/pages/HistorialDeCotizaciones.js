import { useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent from "../components/FrameComponent";
import styles from "./HistorialDeCotizaciones.module.css";
import { useNavigate } from "react-router-dom";
import { TarjetaCotizaciones } from "../components/TarjetaCotizaciones";


const HistorialDeCotizaciones = () => {

  let alquileres
  alquileres = [//TODO conectar axios
    {
      idalquileres: "1",
      fecha: "2024-04-20",
      subtotal:"24.000.000",
      estado:"EN_ESPERA",
      producto_agendas:[
        {
          nombre: "Grua manipuladora de metales",
          identificacion: "MH5046",
          imagen: "/materiales-sin-fondo-2@2x.png",
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
          categorias: ["maquinaria1","maquinaria2"],
          precio_alquiler: "120.000",
          modelo: "MH3256",
          fecha_inicio:"2024-04-10",
          fecha_fin:"2024-04-15"
        },
        {
          nombre: "Grua manipuladora de metales 2",
          identificacion: "MH5046",
          imagen: "/materiales-sin-fondo-2@2x.png",
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
          categorias: ["maquinaria1","maquinaria2"],
          precio_alquiler: "120.000",
          modelo: "MH3257",
          fecha_inicio:"2024-04-10",
          fecha_fin:"2024-04-15"
        }
      ]
    },
    {
      idalquileres: "2",
      fecha: "2024-04-20",
      justificacion_ga: "Envio internacional.",
      gastos_adicionales:"5.000.000",
      valor_conductores:"2.000.000",
      total:"26.000.000",
      subtotal:"24.000.000",
      estado:"ALQUILADO",
      producto_agendas:[
        {
          nombre: "Grua manipuladora de metales",
          identificacion: "MH5046",
          imagen: "/materiales-sin-fondo-2@2x.png",
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
          categorias: ["maquinaria1","maquinaria2"],
          precio_alquiler: "120.000",
          modelo: "MH3256",
          fecha_inicio:"2024-04-10",
          fecha_fin:"2024-04-15"
        },
        {
          nombre: "Grua manipuladora de metales 2",
          identificacion: "MH5046",
          imagen: "/materiales-sin-fondo-2@2x.png",
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
          categorias: ["maquinaria1","maquinaria2"],
          precio_alquiler: "120.000",
          modelo: "MH3257",
          fecha_inicio:"2024-04-10",
          fecha_fin:"2024-04-15"
        }
      ]
    },
    {
      idalquileres: "3",
      fecha: "2024-04-20",
      justificacion_ga: "Envio internacional.",
      gastos_adicionales:"5.000.000",
      valor_conductores:"2.000.000",
      total:"26.000.000",
      subtotal:"24.000.000",
      estado:"COTIZADO",
      producto_agendas:[
        {
          nombre: "Grua manipuladora de metales",
          identificacion: "MH5046",
          imagen: "/materiales-sin-fondo-2@2x.png",
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
          categorias: ["maquinaria1","maquinaria2"],
          precio_alquiler: "120.000",
          modelo: "MH3256",
          fecha_inicio:"2024-04-10",
          fecha_fin:"2024-04-15"
        },
        {
          nombre: "Grua manipuladora de metales 2",
          identificacion: "MH5046",
          imagen: "/materiales-sin-fondo-2@2x.png",
          descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam justo sit amet ultricies vestibulum. Aenean quis sem finibus, laoreet sapien id, ullamcorper tellus. In hac habitasse platea dictumst. Donec a odio sit amet dolor tristique dictum quis mattis diam. In in ornare elit. Proin viverra fringilla vestibulum. Pellentesque ipsum ipsum, lacinia sed consequat a, interdum ac lorem. Morbi eu neque at sem convallis commodo. Proin lobortis vitae orci in consequat. Vestibulum et nunc tortor. Cras sed ante volutpat, efficitur magna non, commodo libero. Nulla porta quam quis tortor molestie molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
          categorias: ["maquinaria1","maquinaria2"],
          precio_alquiler: "120.000",
          modelo: "MH3257",
          fecha_inicio:"2024-04-10",
          fecha_fin:"2024-04-15"
        }
      ]
    }
  ]

  return (
    <div className={styles.historialDeCotizaciones}>
      <FrameComponent3/>
      <section className={styles.historialDeCotizacionesInner}>
        <div className={styles.frameParent}>
          <div className={styles.historialDeCotizacionesWrapper}>
            <h1 className={styles.historialDeCotizaciones1}>
              Historial De Alquileres y Cotizaciones
            </h1>
          </div>
          {
            alquileres&&alquileres.map((alquiler)=>{
              return <TarjetaCotizaciones
                object={alquiler}
              />
            })
          }
        </div>
      </section>
      <div style={{backgroundColor:"black"}}>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
      <FrameComponent/>
    </div>
  );
};

export default HistorialDeCotizaciones;






