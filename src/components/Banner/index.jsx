import styled from "styled-components";

const FigureEstilizada = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 328px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`;

const TituloEstilizado = styled.h1`
  margin: 0;
  max-width: 300px;
  text-align: left;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #fff;
  padding: 0 64px;
`;

const Banner = ({ texto, backgroundImage }) => {
  return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
      <TituloEstilizado>
        {texto}
      </TituloEstilizado>
    </FigureEstilizada>
  );
};

export default Banner;
