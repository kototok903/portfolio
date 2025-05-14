import React from 'react'
import Tags from '@/components/tags'

const mySkills = [
  "c", "cpp", "java", "csharp", "python", "go", "haskell", "html", "css", "javascript", "typescript",
  "react", "next-js", "android", "dotnet-framework", "spring-boot", "express-js",
  "tailwind-css", "shadcn-ui", "mysql", "websocket", "android-studio", "webrtc", "stripe", "monaco-editor"
]

export default function Skills() {
  return (
    <section 
      id='skills' 
      className='relative isolate max-w-3xl m-auto pb-32 scroll-mt-32'
    >
      <h1 className='title'>Skills</h1>

      <Tags tags={mySkills} className="max-w-3xl mx-auto justify-center mt-3" />
    </section>
  )
}
