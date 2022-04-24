import HeadObject from '../components/head'
import Nav from '../components/nav';

import { useGetData } from '../lib/useRequest'
import Post from "../components/Post"

import projects from './api/projects.json'

export default function Home({projectCards, tags}) {
  //const { posts, error } = useGetData("/projects")
  // if (error) {
  //   console.log(error)
  //   return <div>Something went wrong!</div>
  // }
  // if (!posts) return <div>Loading...</div>
  return (
    <div className="text-base dark:text-white dark:bg-black font-light w-screen">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />
      <div>
        <div className="flex flex-col space-y-4 p-10">
          <div className="text-xl">
            Hi, my name is <p className="inline border-b-2 border-yellow-400"> Karen</p>. <br></br>
          </div>
          <div className="text-2xl">
            I <p className="font-semibold inline bg-yellow-400 text-black">Build Software</p>, but I'm not a programmer. <br></br>
            I like to <p className="font-semibold inline bg-yellow-400 text-black">Design Solutions</p>.
          </div>
          <div>
            Check out my <a className="inline border-b-2 border-yellow-400" href="https://github.com/ksitu0">github</a> and 
            design philosophy!
          </div>
          <div className="text-xl">
            Recents: React Native, NextJS, C/C++, and Design Thinking.
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col p-10 place-content-center ">
      {projectCards.map(post => (
        <Post post={post} key={post.id} tagData={tags}/>
      ))}
      </div>
    </div>
  )
}

export async function getStaticProps(context){
  const projectCards = projects.projectCards;
  const tags = projects.tags
  return {props: {projectCards, tags}}
}