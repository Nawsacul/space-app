import styled from "styled-components";
import search from "/icones/search.png";
import { useEffect, useState } from "react";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
  width: 40%;
`;

const CampoTextoEstilizado = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 100%;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;

  &::placeholder {
    color: #d9d9d9;
  }
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 12px;
  right: 16px;
  width: 32px;
  height: 32px;
`;

const CampoTexto = ({ buscaPorString }) => {
  const [busca, setBusca] = useState("");

  useEffect(() => {
    buscaPorString(busca);
  }, [busca]);

  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado
        placeholder="O que você procura?"
        onChange={(evento) => {
          setBusca(evento.target.value);
        }}
      />
      <IconeLupa src={search} alt="ícone de lupa" />
    </ContainerEstilizado>
  );
};

export default CampoTexto;
