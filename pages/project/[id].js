import { useRouter } from 'next/router'
import projects from '../api/projects.json'

import Nav from '../../components/nav'
export default function Project({info}){
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="text-base dark:text-white dark:bg-black font-light">
      <Nav />
    <p>Post: {id}</p>
  </div>
  )
}


export async function getStaticProps(context){
  const info = projects.projectCards.filter((i)=> i.id == context.params.id)[0];
  return {props: {info}}
}

export async function getStaticPaths() {
  const paths = projects.projectCards
                .filter((i)=> i.url.substr(0, 9) === "/project/")
                .map((i)=> {
                  return { params: { id: i.url.substring(9) }}
                });
  return {
    paths,
    fallback: false
  }
}