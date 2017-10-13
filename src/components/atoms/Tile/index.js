import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { Heading, HorizontalRule } from 'components'

const TileStyled = styled.div`
  font-family: ${font('primary')};
  background-color: white;
  padding: 1em 2em;
  margin-bottom: 2em;

  -webkit-box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.1);
  box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.1); 
`

const Tile = ({ heading, children, ...props }) => (
    <TileStyled {...props}>
        {heading && typeof heading === 'string' && <div><Heading level={1}>{heading}</Heading><HorizontalRule/></div>}
        {heading && React.isValidElement(heading) && heading}
        {children}
    </TileStyled>
)

Tile.propTypes = {
    palette: PropTypes.string,
    reverse: PropTypes.bool,
    opaque: PropTypes.bool,
}

Tile.defaultProps = {
    palette: 'grayscale',
}

export default Tile