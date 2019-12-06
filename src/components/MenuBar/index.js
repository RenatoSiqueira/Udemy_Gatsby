import React from "react"
/*
import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { LightBulb as Light } from "styled-icons/material/LightbulbOutline"
import { Grid } from "styled-icons/boxicons-solid/Grid"
*/

import * as S from "./styled"

const MenuBar = () => (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink to="/" title="Voltar para Home">
                <S.MenuBarItem>
                    Home
                </S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink to="/search/" title="Pesquisar">
                <S.MenuBarItem>
                    Search
                </S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroup>
            <S.MenuBarItem title="Mudar o tema">
                Theme
            </S.MenuBarItem>
            <S.MenuBarItem title="Mudar visualização">
                Visu
            </S.MenuBarItem>
            <S.MenuBarItem title="Ir para o Topo">
                Top
            </S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
)

export default MenuBar