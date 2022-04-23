import HeadObject from '../components/head'
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black font-light">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />
      <div class="flex flex-col space-y-4 p-10">
        <div class="text-3xl">
          Hi, my name is <p class="font-semibold inline bg-yellow-400 text-black"> Karen</p>. <br></br>
          I like to <p class="font-semibold inline bg-yellow-400 text-black">Discover Problems</p> and <p class="font-bold inline bg-yellow-400 text-black">Build Creative Solutions</p>. 
        </div>
        <div>
          hello <a href="google.com">test</a>
        </div>
        <div class="text-xl">
          Recents: React Native, NextJS, C/C++, and Design Thinking.
        </div>
       </div>
    </div>
  )
}
