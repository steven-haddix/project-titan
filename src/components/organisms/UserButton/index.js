import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button, Icon } from 'components'
import { LoginModal } from 'containers'

const InnerButton = styled.div`
  display: flex;
  align-items: center;
  &:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`

const Image = styled.img`
  margin-right: 0.5rem;
`

const DefaultImage = styled(Icon)`
  margin-right: 0.5em;
`

const UserButton = ({ user, onLogin, onLogout, ...props }) => {
  return (
    <div>
      {user &&
        <Button {...props} onClick={onLogout}>
          <InnerButton>
              { user.picture && <Image src={user.picture} width={20} height={20} /> }
              { !user.picture && <DefaultImage icon="user" width={20} height={20} /> }
            Sign out
          </InnerButton>
        </Button>
      }
      {!user && <Button to="/sign-in" {...props}>Sign in</Button>}
    </div>
  )
}

UserButton.propTypes = {
  user: PropTypes.shape({
    picture: PropTypes.string,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
}

export default UserButton
