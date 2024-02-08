import styled from "styled-components";
import Titulo from "../../Titulo";

const StyledSectionPopulares = styled.section`
    display: flex;
    flex-direction: column;
    ul {
        display: flex;
        flex-direction: column;
        gap: 24px;
        list-style: none;
        margin: 0 0 24px 0;
        padding: 0;
    } 
    
    li > img {
        border-radius: 20px;
        max-width: 212px;
    }
    
    button {
        background: transparent;
        border: 2px solid #C98CF1;
        border-radius: 10px;
        color: #FFF;
        font-family: GandhiSansBold;
        padding: 14px 29px;
        cursor: pointer;
        font-size: 20px;
    }
`

const Populares = ({ populares }) => {
  return (
    <StyledSectionPopulares>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ul>
        {populares.map((fotoPopular) => (
          <li key={fotoPopular.id}>
            <img src={fotoPopular.path} alt={fotoPopular.titulo} />
          </li>
        ))}
      </ul>
      <button>Ver mais</button>
    </StyledSectionPopulares>
  );
};

export default Populares;
