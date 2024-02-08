import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import bannerBackground from "./assets/banner.png";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import fotosPopulares from "./populares.json";
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotosMaisPopulares, setFotosMaisPopulares] = useState(fotosPopulares);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }

    setFotosDaGaleria(
      fotosDaGaleria.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !foto.favorita
              : fotoDaGaleria.favorita,
        };
      })
    );
  };

  const buscaPorString = (string) => {
    setFotosDaGaleria(
      string
        ? fotos.filter((foto) =>
            foto.titulo.toLowerCase().includes(string.toLowerCase())
          )
        : fotos
    );
  };

  const buscaPorTag = (tag) => {
    setFotosDaGaleria(
      tag > 0 ? fotos.filter((foto) => foto.tagId == tag) : fotos
    );
  };

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho buscaPorString={buscaPorString} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria
              buscaPorTag={buscaPorTag}
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              fotos={fotosDaGaleria}
              populares={fotosMaisPopulares}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <Footer />
      <ModalZoom
        foto={fotoSelecionada}
        aoAlternarFavorito={aoAlternarFavorito}
        aoFechar={() => setFotoSelecionada(null)}
      />
    </FundoGradiente>
  );
};

export default App;
