import Tag from "./Tag"
import Image from "next/image"
import Link from "next/link"
export default function Post({ post, tagData }) {
    const { title, summary, id, tags, url } = post
    return (
        <Link className="inline-block" href={url}>
      <div className="flex flex-col my-3 sm:mr-5 sm:my-3 w-screen sm:w-72 sm:h-72 sm:rounded-lg overflow-hidden text-base bg-neutral-100 sm:bg-white dark:bg-neutral-800 border-yellow-400 sm:border dark:border-0 p-3 sm:shadow-md sm:hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h1 className="sm:h-14">
          {id}. {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        <div className="flex flex-wrap mt-2">{tags.map(i => <Tag tag={i} key={i} data={tagData} />)}</div>
        {/* <img className="" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" /> */}
      </div>
      </Link>
    )
  }
  