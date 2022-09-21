import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import {useEffect, useRef} from 'react'

const TOOLBAR_OPTIONS = [
  [{header: [1, 2, 3, 4, 5, 6, false]}],
  [{font: []}],
  [{list: 'ordered'}, {list: 'bullet'}],
  ['bold', 'italic', 'underline'],
  [{color: []}, {background: []}],
  [{script: 'sub'}, {script: 'super'}],
  [{align: []}],
  ['image', 'blockquote', 'code-block'],
  ['clean'],
]

export const TextEditor = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const editor = document.createElement('div')
    wrapperRef.current?.appendChild(editor)
    new Quill(editor, {
      theme: 'snow',
      modules: {toolbar: TOOLBAR_OPTIONS},
    })

    return () => {
      if (wrapperRef.current) {
        wrapperRef.current.innerHTML = ''
      }
    }
  }, [])
  return <div ref={wrapperRef} className="container" />
}
