import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import "./style.css";

const EmailTemplate = ({ name,email }) => (

  <Html>
    <Preview>Formulario recibido</Preview>
    <Body>
      <Container className="container">
        <Text className="paragraph">Hola {name},</Text>
        <Text className="paragraph">
          Gracias por contactarme. Estoy emocionado de recibir tu mensaje y
          responderé lo antes posible.{" "}
        </Text>
        <Text>
          Si tienes alguna pregunta o necesitas más información, no dudes en
          escribirme de nuevo.
        </Text>
        <Text className="paragraph">
          Saludos!!
          <br />
          Daniel Franchi
        </Text>
        <Hr className="hr" />
        {/* <Text className="footer">
          {date}
        </Text> */}
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;
