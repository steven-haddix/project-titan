import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'

import { IconLink, PrimaryNavigation, Block } from 'components'
import { UserButton } from 'containers'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  
  -webkit-box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.1);
  box-shadow: 0px 2px 5px -1px rgba(0,0,0,0.1);
  
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size('maxWidth')};
  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const StyledPrimaryNavigation = styled(PrimaryNavigation)`
  flex: 1
`

const Header = (props) => {
  return (
    <Wrapper opaque {...props}>
      <InnerWrapper>
        <IconLink to="/" icon="crown" height={100} />
        <StyledPrimaryNavigation reverse />
        <UserButton reverse transparent />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Header
