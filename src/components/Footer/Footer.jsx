import "./Footer.css";
import ContactsIcon from "@mui/icons-material/Contacts";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="bck_b_dark">
      <div className="footer-container">
        <div className="logo">Sergio Reformas</div>

        <div className="wrapper">
          <div className="left">
            <h2 className="h2">Información de contacto</h2>

            <div className="info-row">
              <div className="icon">
                <ContactsIcon />
                <div className="nfo">
                  <div>Área de servicio:</div>
                  <div>Alcalá de Henares</div>
                </div>
              </div>

              <div className="icon">
                <PhoneIcon />
                <div className="nfo">
                  <div>Teléfono:</div>
                  <div>34 642 85 10 24</div>
                </div>
              </div>
            </div>
            <div className="info-row">
              <div className="icon">
                <TimelapseIcon />
                <div className="nfo">
                  <div>Horario:</div>
                  <div>24/7</div>
                </div>
              </div>
              <div className="icon">
                <EmailIcon />
                <div className="nfo">
                  <div>Email:</div>
                  <div>sergiu@msn.es</div>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <h2 className="h2">Se el primero en saber</h2>
            <p>
              Las reformas integrales son una oportunidad para transformar tu
              hogar en el espacio de tus sueños, donde la funcionalidad y la
              estética se unen para crear un ambiente acogedor y personalizado.
              Desde la renovación de la distribución hasta la elección de
              materiales de alta calidad, cada detalle es importante para lograr
              una reforma completa que mejore la calidad de vida de quienes
              habitan en ella. Ya sea una pequeña renovación o una reforma
              total, el resultado final siempre será un espacio que refleje tu
              estilo de vida y tus necesidades, convirtiendo tu hogar en un
              lugar más cómodo, eficiente y hermoso.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
