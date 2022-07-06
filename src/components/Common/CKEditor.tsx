import { Box } from '@chakra-ui/react'
import { EditorConfig } from 'ckeditor__ckeditor5-core/src/editor/editorconfig'
import React, { useEffect, useRef, useState } from 'react'

interface EditorProps {
  id?: string
  onChange(value: string): void
  value: string
  placeholder?: string
}

const Editor: React.FC<EditorProps> = ({ onChange, id, value, placeholder }) => {
  const editorRef = useRef({} as { CKEditor: any; ClassicEditor: any })
  const { CKEditor, ClassicEditor } = editorRef.current
  const [editorLoaded, setEditorLoaded] = useState(false)

  useEffect(() => {
    // tradução pt-br
    require('@ckeditor/ckeditor5-build-classic/build/translations/pt-br')

    editorRef.current = {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }

    setTimeout(() => setEditorLoaded(true), 1000)
  }, [])

  return editorLoaded ? (
    <Box color={'black'}>
      <CKEditor
        id={id}
        editor={ClassicEditor}
        data={value}
        onChange={(_event, editor) => onChange(editor.getData())}
        config={
          {
            placeholder,
            language: 'pt-br',
            mediaEmbed: {
              previewsInData: true
            }
          } as EditorConfig
        }
      />
    </Box>
  ) : (
    <div>Carregando...</div>
  )
}

export default Editor
