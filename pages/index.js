import HeadObject from '../components/head'
import Nav from '../components/nav';

import { useGetData } from '../lib/useRequest'
import Post from "../components/Post"

import projects from './api/projects.json'
import React, { useState, useEffect } from 'react';

export default function Home(props) {
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

  useEffect(() => {
    let tagCategories = Object.values(props.tags).map(i => i.category).flat();
    tagCategories = tagCategories.filter((val, idx, self) => self.indexOf(val) == idx);
    setCategories(tagCategories);
  }, [props.tags])

  return (
    <div className="h-screen overflow-hidden text-base dark:text-white bg-[url('/banner.png')] dark:bg-[url('/banner-dark.png')] bg-cover font-light ">
      <div className={`${props.animateBg === false ? '' : "animate-fade-in"} h-screen overflow-scroll bg-white/80 dark:bg-black/60 backdrop-blur-[1px]`}>
        <HeadObject>
          {/* You can put extra tags in here, or leave it blank */}
          {/* dark mode sliding */}
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
            <div className="text-base max-w-prose">
              I enjoy thinking about complicated problems (technical, design, life, self, social). I recently developed a
              desire to see impact from my solutions. I also find human cognition and interactions
              fascinating. I explore how people behave and connect their experiences to my
              image of the world. TLDR Exploring life and problems :)
            </div>
            <div className="text-base">
              Check out my <a className="inline border-b-2 border-yellow-400" href="https://github.com/ksitu0" target="_blank">github</a> and <a className="inline border-b-2 border-yellow-400" href="/philosophy">design philosophy</a>! <br></br>
              Or are you wondering <a className="inline border-b-2 border-yellow-400" href="/whats-in-the-background">What's in the background?</a>
            </div>
          </div>
          <div>
            <img src={featureUrl} />
          </div>
        </div>

        <div className="inline pl-10 mr-10 text-lg sm:text-xl font-semibold border-b-2 border-yellow-400">Some Projects</div>

        <div className="text-sm px-10 pt-3">
          Recents: React Native, NextJS, C/C++, and Design Thinking.
        </div>
        <details className="w-screen px-10 pb-3" open={false}>
          <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
            Skill Filter
          </summary>
          <div className="inline-flex flex-row flex-wrap rounded md:divide-x divide-neutral-300 dark:divide-neutral-600">
            {categories.map(i => (
              <div key={i}
                onClick={() => {
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
            {props.projectCards.filter(i => {
              let shouldInclude = false;
              i.tags.forEach((s) => {
                props.tags[s].category.forEach((c) => {
                  if (include.includes(c)) {
                    shouldInclude = true;
                  }
                });
              })
              return shouldInclude;
            }).map(post => (
              <Post post={post} key={post.id} tagData={props.tags}
                onMouseEnter={() => {
                  console.log("me")
                  setHover(true);
                  setFeatureUrl(props.projectCards.filter(i => i.id == id)[0].featureImg);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  console.log("ml");
                }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const projectCards = projects.projectCards;
  const tags = projects.tags;
  return { props: { projectCards, tags } }
}