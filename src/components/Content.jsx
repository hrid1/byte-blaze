import { useLoaderData } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { title, cover_image, description, published_at, body_html } = blog;
  // console.log("from content",blog);

  return (
    <div className="p-2 mx-auto  rounded border-2  border-primary  border-opacity-35 group  focus:no-underline dark:bg-gray-50 dark:bg-gray-50">
      <img
        role="presentation"
        className="object-cover w-full rounded h-56 dark:bg-gray-500"
        src={cover_image || placeHolderImage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold ">{title}</h3>

        {/* adding direct html using markdown */}

        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;
