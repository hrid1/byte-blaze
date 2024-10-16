import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Author from "../components/Author";
import Content from "../components/Content";
import { MdBookmarkAdd } from "react-icons/md";

const Blog = () => {
  const blog = useLoaderData();

  const [tabIndex, setTabIndex] = useState(0);
  //   console.log(tabIndex);
  useEffect(() => {
    console.log("tabIndex updated to:", tabIndex);
  }, [tabIndex]); // Only runs when tabIndex changes

  const {
    comments_count,
    title,
    reading_time_minutes,
    public_reaction_count,
    published_at,
    tags,
  } = blog;

  const handleBookmark = (blog) => {
    console.log(blog);
  }

  return (
    <div>
      <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400 dark:text-gray-600">
              <p className="text-sm">
                {reading_time_minutes} min read •{" "}
                {new Date(published_at).toLocaleDateString()}
              </p>

              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {comments_count} comments • {public_reaction_count} views
              </p>
            </div>

            {/* Tabs */}

            <div className="flex items-center mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
              <Link
                to={""}
                onClick={() => setTabIndex(0)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tabIndex === 0 ? `border border-b-0` : `border-b`
                } rounded-t-lg border-gray-400 dark:border-gray-600 text-gray-50 dark:text-gray-900`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>content</span>
              </Link>
              <Link
                to={"author"}
                onClick={() => setTabIndex(1)}
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tabIndex === 1 ? "border border-b-0" : "border-b"
                } rounded-t-lg border-gray-400 dark:border-gray-600 text-gray-50 dark:text-gray-900`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Author</span>
              </Link>

              {/* bookmark button */}
              <div onClick={() => handleBookmark(blog)} className="bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 hover:scale-105 overflow-hidden cursor-pointer">
                <MdBookmarkAdd size={20} className="text-secondary" />
              </div>
            </div>
          </div>
          <div className="text-gray-100 dark:text-gray-800">
            {/* <p>Insert the actual text content here...</p> */}
            <Outlet></Outlet>
          </div>
        </article>
        <div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400 dark:border-gray-600">
            {tags.map((tag) => (
              <>
                <a className="px-3 py-1 rounded-sm hover:underline bg-sky-400 dark:bg-sky-600 text-gray-900 dark:text-gray-50">
                  #{tag}
                </a>
              </>
            ))}
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Related posts</h4>
            <ul className="ml-4 space-y-1 list-disc">
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Nunc id magna mollis
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Duis molestie, neque eget pretium lobortis
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="hover:underline"
                >
                  Mauris nec urna volutpat, aliquam lectus sit amet
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
