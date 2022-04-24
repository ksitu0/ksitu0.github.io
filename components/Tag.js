
export default function Tag({ tag, data }) {
    return (
      <div className={`text-sm px-2 mr-2 mb-1 rounded-full ${data[tag].color}
      dark:opacity-80 dark:bg-transparent dark:border dark:border-yellow-300`}>{tag}</div>
    )
}