import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
    display: inline-block;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <ItemNavegacao
                        iconeAtivo="/icones/home-ativo.png" 
                        iconeInativo="/icones/home-inativo.png"
                        ativo
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/icones/mais-vistas-ativo.png" 
                        iconeInativo="/icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/icones/mais-curtidas-ativo.png" 
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/icones/novas-ativo.png" 
                        iconeInativo="/icones/novas-inativo.png"
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo="/icones/surpreenda-me-ativo.png" 
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </StyledList>
            </nav>
        </aside>
    )
}

export default BarraLateral;