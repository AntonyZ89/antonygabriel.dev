import { Box } from '@chakra-ui/react'
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

interface EditorProps {
  onChange: Dispatch<SetStateAction<string>>
  value: string
  placeholder?: string
}

const Editor: React.FC<EditorProps> = ({ onChange, value, placeholder }) => {
  const editorRef = useRef<unknown>()
  const ref = useRef<HTMLInputElement>()
  const { CKEditor, ClassicEditor } = editorRef.current || ({} as any)
  const [editorLoaded, setEditorLoaded] = useState(false)

  useEffect(() => {
    editorRef.current = {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
  }, [])

  return editorLoaded ? (
    <Box w={'99%'}>
      <CKEditor
        ref={ref}
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => onChange(editor.getData())}
        config={{
          placeholder,
          language: 'pt-br'
        }}
      />
    </Box>
  ) : (
    <div>Carregando...</div>
  )
}

export default Editor
