import styles from "./FrameFullNameIDAddressEm.module.css";

const FrameFullNameIDAddressEm = () => {
  return (
    <div className={styles.frameFullNameIDAddressEm}>
      <div className={styles.rectangleEditInfo}>
        <h1 className={styles.informacinPersonal}> INFORMACIÓN PERSONAL</h1>
      </div>
      <div className={styles.fullnameframe}>
        <div className={styles.fullnameframeChild} />
        <div className={styles.emailframe}>
          <div className={styles.addressframe}>
            <div className={styles.identificationframe}>
              <div className={styles.correo}>
                <div className={styles.nombrecompletoframe}>
                  <b className={styles.nombreCompleto}>{`Nombre Completo: `}</b>
                </div>
                <div className={styles.nombrecompletoframe1}>
                  <b className={styles.identificacin}>{`Identificación: `}</b>
                </div>
                <div className={styles.nombrecompletoframe2}>
                  <b className={styles.correo1}>{`Correo: `}</b>
                </div>
                <b className={styles.telfono}>{`Teléfono: `}</b>
                <div className={styles.nombrecompletoframe3}>
                  <b className={styles.direccin}>{`Dirección: `}</b>
                </div>
              </div>
              <div className={styles.accountinfoframe}>
                <div className={styles.sebastianPicoAfanador}>
                  Sebastian Pico Afanador
                </div>
                <div className={styles.editinfobutton}>1005296655</div>
                <div className={styles.picoafanadorgmailcom}>
                  picoafanador@gmail.com
                </div>
                <div className={styles.editinfobutton1}>3017781251</div>
                <div className={styles.cll18}>cll 18 # 21-62</div>
              </div>
            </div>
          </div>
          <div className={styles.editarinformacinframe} />
        </div>
        <div className={styles.profilepictureframe}>
          <div className={styles.botnEdiotarInformacin}>
            <div className={styles.botnEdiotarInformacinChild} />
            <b className={styles.editarInformacin}>EDITAR INFORMACIÓN</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameFullNameIDAddressEm;
