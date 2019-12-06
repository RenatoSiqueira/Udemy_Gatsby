import React from "react"
import PropTypes from "prop-types"

import * as S from './styled'

import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'

import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <MenuBar />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
