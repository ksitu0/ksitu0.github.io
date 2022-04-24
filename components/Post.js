import Tag from "./Tag"
import Image from "next/image"
export default function Post({ post, tagData }) {
    const { title, summary, id, tags } = post
    return (
    <div className="flex">
      <div className="flex-1 text-base w-50 h-30 rounded-md bg-gray-100 dark:bg-gray-900 p-3 my-2">
        <h1 className="">
          {id}. {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">{summary}</p>
        <div className="flex mt-20">{tags.map(i => <Tag tag={i} key={i} data={tagData} />)}</div>
      </div>
      <Image src="/../pages/api/portrait.png" 
      width={500}
      height={500}/>
    </div>
    )
  }
  