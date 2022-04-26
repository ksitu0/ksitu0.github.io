import Nav from '../components/nav';

export default function PlainPostLayout(props) {
    return (
    <div className="text-base dark:text-white dark:bg-black font-light">
        <Nav />
        <div className="sm:inline pl-4 sm:pl-10 md:pl-20 lg:pl-40 mr-0 sm:mr-10 md:mr-20 lg:mr-40 text-2xl md:text-3xl font-semibold border-b-4 border-yellow-400">{props.title}</div>

        <div className={`w-screen flex flex-col px-4 sm:px-10 md:px-20 lg:px-40 py-10`}>
            <div className={`prose dark:prose-invert max-w-prose`}>
                {props.children}
            </div>
        </div>
    </div>);
}