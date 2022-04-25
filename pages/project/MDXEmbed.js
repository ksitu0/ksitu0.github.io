import { MDXProvider } from '@mdx-js/react'
import { compile } from '@mdx-js/mdx'
import dynamic from 'next/dynamic'

const components = {}

export default function MDXEmbed(props) {
  return (
    <MDXProvider components={components}>
      
    </MDXProvider>
  )
}