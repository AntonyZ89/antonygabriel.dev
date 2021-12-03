import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Box, Button, Checkbox, Input, Radio, Select, Table, Tabs, Textarea } from '@theme/components'

const theme = extendTheme({
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'inherit'
  },
  styles: {
    global: props => ({
      body: {
        fontSize: props.theme.fontSizes.xs,
        bg: mode('#d4dded', '#0e0e10')(props)
      },
      _selection: {
        bg: 'pink.100'
      },
      blockquote: {
        borderLeftWidth: 5,
        borderLeftColor: 'gray.300',
        py: 1,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 5,
        bg: 'gray.100',
        fontStyle: 'italic',
        '& > blockquote': {
          my: 1,
          bg: 'gray.200'
        }
      },
      a: {
        color: 'blue.600'
      },
      'p, h1, h2, h3, h4, h5, h6': {
        wordBreak: 'break-word'
      },
      'h1, h2, h3, h4, h5, h6': {
        fontWeight: 'bold'
      },
      h1: {
        fontSize: '2em'
      },
      h2: {
        fontSize: '1.5em'
      },
      h3: {
        fontSize: '1.17em'
      },
      h4: {
        fontSize: '0.75em'
      },
      'ol, ul': {
        paddingLeft: '1rem'
      },
      '::marker': {
        fontWeight: 'bold'
      }
    })
  },
  components: {
    Input,
    Button,
    Box,
    Radio,
    Select,
    Textarea,
    Table,
    Tabs,
    Checkbox
  }
} as ThemeConfig)

export default theme
