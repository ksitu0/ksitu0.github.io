import HeadObject from '../components/head'
import Nav from '../components/nav';

import { useGetData } from '../lib/useRequest'
import Post from "../components/Post"

import projects from './api/projects.json'
import React, { useState, useEffect } from 'react';

export default function Home({projectCards, tags}) {
  //const { posts, error } = useGetData("/projects")
  // if (error) {
  //   console.log(error)
  //   return <div>Something went wrong!</div>
  // }
  // if (!posts) return <div>Loading...</div>
  const [hoverItem, setHover] = useState(false);
  const [featureUrl, setFeatureUrl] = useState("");
  const [categories, setCategories] = useState([]);
  const [include, setInclude] = useState(["Thinking", "Design", "Technical"]);

  useEffect(()=>{
    let tagCategories = Object.values(tags).map(i=>i.category).flat();
    tagCategories = tagCategories.filter((val, idx, self)=> self.indexOf(val) == idx);
    setCategories(tagCategories);
  }, [tags])

  console.log(include)
  return (
    <div className="text-base dark:text-white dark:bg-black font-light">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />
      <div className="w-screen">
        <div className="flex flex-col space-y-4 p-10 pt-2">
          <div className="text-lg sm:text-xl ">
            Hi, my name is <p className="inline border-b-2 border-yellow-400"> Karen</p>. <br></br>
          </div>
          <div className="text-xl sm:text-3xl">
            I <p className="font-semibold inline bg-yellow-400 text-black">Build Software</p>, but I'm not just a programmer. <br></br>
            I like to <p className="font-semibold inline bg-yellow-400 text-black">Design Creative Solutions</p>.
          </div>
          <div>
            Check out my <a className="inline border-b-2 border-yellow-400" href="https://github.com/ksitu0">github</a> and 
            design philosophy!
          </div>
          <div className="text-lg sm:text-xl">
            Recents: React Native, NextJS, C/C++, and Design Thinking.
          </div>
        </div>
        <div>
          <img src={featureUrl} />
        </div>
      </div>
      
      <div className="inline pl-10 mr-10 text-lg sm:text-xl font-semibold border-b-2 border-yellow-400">Some Projects</div>
      <details className="w-screen px-10 py-3" open>
        <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
          Skill Filter
        </summary>
        <div className="inline-flex flex-row flex-wrap rounded sm:divide-x divide-neutral-300 dark:divide-neutral-600">
        {categories.map(i=> (
          <div key={i} 
            onClick={()=> {
              let index = include.indexOf(i);
              let temp = [...include];
              if (index === -1) {
                  temp.push(i);
              } else {
                  temp.splice(index, 1);
              }
              console.log(temp)
              setInclude(temp)
            }} 
            className={`text-sm px-2 sm:my-0 py-1.5 sm:text-base sm:px-3 sm:py-2 hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-20 ${include.includes(i) ? 'bg-black/20 dark:bg-white/30' : ''} `}>
            {i}
          </div>))}
        </div>
      </details>

      <div className="w-screen sm:overflow-x-scroll sm:px-10 sm:pb-10">
        <div className="flex w-fit flex-col sm:flex-row">
        {projectCards.filter(i=> {
          let shouldInclude = false;
          i.tags.forEach((s) => {
            tags[s].category.forEach((c) => {
              if (include.includes(c)) {
                shouldInclude =  true;
              }
            });
          })
          return shouldInclude;
        }).map(post => (
          <Post post={post} key={post.id} tagData={tags} 
            onMouseEnter={()=>{
              console.log("me")
              setHover(true);
              setFeatureUrl(projectCards.filter(i=> i.id == id)[0].featureImg);
            }} 
            onMouseLeave={() => {
              setHover(false);
              console.log("ml");
            }}/>
        ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context){
  const projectCards = projects.projectCards;
  const tags = projects.tags;
  return {props: {projectCards, tags}}
}