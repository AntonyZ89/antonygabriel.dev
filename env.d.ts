import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'

export interface CustomElement {
  type: 'paragraph' | 'block-quote' | 'list-item'
  children: CustomText[]
}

export interface CustomText {
  type?: 'mention'
  text: string
  bold?: boolean
  italic?: boolean
  code?: boolean
  character?: string
  children?: CustomText[]
}

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}
