import createEmotionServer from '@emotion/server/create-instance'
import { cache } from '@emotion/css'

type Props = (html: string) => Promise<{
  html: string
  ids: string[]
  css: string
}>

const renderStatic: Props = async html => {
  if (html === undefined) {
    throw new Error('did you forget to return html from renderToString?')
  }
  const { extractCritical } = createEmotionServer(cache)
  const { ids, css } = extractCritical(html)

  return { html, ids, css }
}

export default renderStatic
