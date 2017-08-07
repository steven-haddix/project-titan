import React from 'react'

import { PageTemplate, Header, Tile, Heading } from 'components'

const NotFoundPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<div/>}>
      <Tile>
          <Heading>404 Not Found</Heading>
      </Tile>
    </PageTemplate>
  )
}

export default NotFoundPage
