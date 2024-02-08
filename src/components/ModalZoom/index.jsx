import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "../BotaoIcone";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

const StyledDialog = styled.dialog`
  position: fixed;
  top: 50px;
  padding: 0;
  background-color: transparent;
  border: none;
  width: 50vw;
  z-index: 1;
  figure {
    width: 100%;
  }
  form {
    button {
      position: absolute;
      top: 24px;
      right: 24px;
    }
  }
`;

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
  return (
    <>
      {foto && (
        <StyledDialog open={!!foto} onClose={aoFechar}>
          <Imagem
            foto={foto}
            expandida={true}
            aoAlternarFavorito={aoAlternarFavorito}
          />
          <form method="dialog">
            <BotaoIcone formMethod="dialog">
              <img src="/icones/fechar.png" alt="Icone de fechar" />
            </BotaoIcone>
          </form>
          <Overlay />
        </StyledDialog>
      )}
    </>
  );
};

export default ModalZoom;