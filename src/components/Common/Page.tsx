import { Grid } from '@chakra-ui/react'
import React from 'react'

interface PageProps {
  Two: React.FC
  Three: React.FC
}

const Two: React.FC = ({ children }) => (
  <Grid
    gridTemplate={{
      base: '"left" "right" / 100%',
      md: '"left right" / 20% 79%',
      lg: '"left right" / 16% 83%'
    }}
    rowGap={2}
    columnGap={{ md: 2 }}
  >
    {children}
  </Grid>
)

const Three: React.FC = ({ children }) => (
  <Grid
    gridTemplate={{
      base: '"left" "mid" / 100%',
      md: '"left mid" / 20% 79%',
      lg: '"left mid right" / 16% 53% 30%'
    }}
    rowGap={2}
    columnGap={{ md: 2 }}
  >
    {children}
  </Grid>
)

const Page: PageProps = () => <></>

Page.Two = Two
Page.Three = Three

export default Page
