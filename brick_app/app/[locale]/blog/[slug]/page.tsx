import { blogs } from "@/data/blogs";
import Image from "next/image";

export default function BlogDetail({
  params
}: {
  params: { slug: string };
}) {
  const post = blogs.find(
    (b) => b.slug === params.slug
  );

  if (!post) return <div>Not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-semibold mb-6">
        {post.title}
      </h1>

      <div className="relative h-96 mb-8">
        <Image
          src={post.image}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <p className="text-gray-700 leading-relaxed">
        {post.excerpt}
        <br />
        <br />
        (Nội dung chi tiết bài viết sẽ nằm ở đây...)
      </p>
    </div>
  );
}