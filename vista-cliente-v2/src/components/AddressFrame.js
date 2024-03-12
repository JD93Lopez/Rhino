import styles from "./AddressFrame.module.css";

const AddressFrame = () => {
  return (
    <div className={styles.addressFrame}>
      <div className={styles.nameAndIDContainer}>
        <h1 className={styles.informacinPersonal}> INFORMACIÓN PERSONAL</h1>
      </div>
      <div className={styles.infoTextFrame}>
        <div className={styles.infoTextFrameChild} />
        <div className={styles.identificationFrame}>
          <div className={styles.nameInputFrame}>
            <div className={styles.identificationInputFrame}>
              <b className={styles.nombreCompleto}>{`Nombre Completo: `}</b>
              <div className={styles.telefonoInputFrame}>
                <div className={styles.inputNombreCompleto} />
              </div>
            </div>
            <div className={styles.identificationInputFrame1}>
              <b className={styles.identificacin}>{`Identificación: `}</b>
              <div className={styles.inputIdentificacin2Wrapper}>
                <div className={styles.inputIdentificacin2} />
              </div>
            </div>
            <div className={styles.identificationInputFrame2}>
              <b className={styles.correo}>{`Correo: `}</b>
              <div className={styles.inputCorreo2Wrapper}>
                <div className={styles.inputCorreo2} />
              </div>
            </div>
            <div className={styles.identificationInputFrame3}>
              <b className={styles.telfono}>{`Teléfono: `}</b>
              <div className={styles.inputTelefono2Wrapper}>
                <div className={styles.inputTelefono2} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addressInputFrame}>
          <div className={styles.editInfoFrame}>
            <div className={styles.directionTextFrame}>
              <b className={styles.direccin}>{`Dirección: `}</b>
              <div className={styles.inputAddress2Wrapper}>
                <div className={styles.inputAddress2} />
              </div>
            </div>
          </div>
          <div className={styles.addressInputFrameChild} />
        </div>
        <div className={styles.editBtnFrame}>
          <div className={styles.botnEdiotarInformacin}>
            <div className={styles.botnEdiotarInformacinChild} />
            <b className={styles.guardarInformacin}>GUARDAR INFORMACIÓN</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressFrame;
