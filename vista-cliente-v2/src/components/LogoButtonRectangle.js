import styles from "./LogoButtonRectangle.module.css";

const LogoButtonRectangle = () => {
  return (
    <section className={styles.logoButtonRectangle}>
      <div className={styles.productsAndAboutUsFrame}>
        <div className={styles.nombreEmpresaRectangle}>
          <div className={styles.firstLastAddressBox}>
            <div className={styles.nombreEmpresaRectangle1}>
              <div className={styles.nombre}>Nombre:</div>
              <div className={styles.apellidoTelfonoDireccionBox} />
            </div>
            <div className={styles.buyingInfoVector}>
              <div className={styles.correoElectrnico}>Correo electrónico:</div>
              <div className={styles.attentionToClientText}>
                <div className={styles.contactInfoRectangle} />
              </div>
            </div>
            <div className={styles.nombreEmpresaRectangle2}>
              <div className={styles.empresa}>Empresa:</div>
              <div className={styles.nombreEmpresaRectangleChild} />
            </div>
          </div>
          <div className={styles.apellidoTelFoneAddressFram}>
            <div className={styles.plazoCompraText}>
              <input
                className={styles.apellido}
                placeholder="Apellido:"
                type="text"
              />
              <div className={styles.vector} />
            </div>
            <div className={styles.plazoCompraText1}>
              <div className={styles.telfono}>Teléfono:</div>
              <div className={styles.plazoCompraTextChild} />
            </div>
            <div className={styles.plazoCompraText2}>
              <div className={styles.direccinDeLa}>
                Dirección de la empresa:
              </div>
              <div className={styles.plazoCompraTextItem} />
            </div>
          </div>
        </div>
        <div className={styles.contactUsFrame}>
          <div className={styles.contactInfoFrame}>
            <div className={styles.plazoDeCompra}>Plazo de compra:</div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.contactUsGroup}
                alt=""
                src="/contact-us-group.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoButtonRectangle;
