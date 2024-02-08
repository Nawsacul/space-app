import styled from "styled-components";
import tags from "./tags.json";
import { useState } from "react";

const StyledContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 56px;
  align-items: center;
`;

const StyledParagraph = styled.h3`
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 400;
  margin: 0;
  margin-right: 34px;
  color: #d9d9d9;
`;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: rgba(217, 217, 217, 0.3);
  color: #fff;
  border-radius: 10px;
  padding: 10px 8px;
  box-sizing: border-box;
  font-size: 24px;
  line-height: 28.8px;
  font-weight: 400;
  transition: background-color 0.3s ease;
  border: 2px solid ${props => props.$isActive ? '#c98cf1' : 'transparent'};
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = ({ buscaPorTag }) => {
  const [tagSelecionada, setTagSelecionada] = useState(null);

  return (
    <StyledContainer>
      <StyledParagraph>Busque por tags:</StyledParagraph>
      {tags.map((tag) => (
        <StyledButton
          key={tag.id}
          id={tag.id}
          $isActive={tagSelecionada === tag.id}
          onClick={(e) => {
            setTagSelecionada(Number(e.target.id));
            buscaPorTag(e.target.id);
          }}
        >
          {tag.titulo}
        </StyledButton>
      ))}
    </StyledContainer>
  );
};

export default Tags;
