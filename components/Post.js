import Tag from "./Tag"
import Image from "next/image"
import Link from "next/link"
export default function Post({ post, tagData }) {
  const { title, summary, id, tags, url, featureImg } = post
  return (
    <Link className="inline-block" href={url}>
      <div className={`flex flex-col ${id % 2 ? "items-start" : "items-end"} sm:relative my-3 sm:mr-5 sm:my-3 sm:rounded-lg overflow-hidden text-base border-yellow-400 sm:border dark:border-0 transition sm:shadow-md sm:hover:shadow-xl duration-300 ease-in-out`}>
        <img className={`z-10 hidden bg-white dark:bg-neutral-800 object-contain h-40 mb-4 transition sm:shadow-md sm:hover:shadow-xl duration-300 ease-in-out
                         sm:block sm:mb-0 sm:min-w-full sm:min-h-full sm:object-left-center ${featureImg[0] === "contain" ? "sm:object-contain" : "sm:object-cover"} sm:absolute sm:opacity-0 sm:hover:opacity-100`} src={featureImg[1]}></img>
        <div className="flex flex-col w-screen sm:w-80 sm:h-72 bg-neutral-100 sm:bg-white bg-white dark:bg-neutral-800 sm:shadow-md sm:hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h1 className="sm:h-16 p-3 z-20 bg-neutral-100/50 sm:bg-white/50 dark:bg-neutral-800/50 backdrop-blur-md">
            {id}. {title}
          </h1>
          <p className="px-3 text-gray-600 dark:text-gray-400">{summary}</p>
          <div className="px-3 pb-3 flex flex-wrap mt-2 z-0">{tags.map(i => <Tag className="z-0" tag={i} key={i} data={tagData} />)}</div>
        </div>
      </div>
    </Link>
  )
}
