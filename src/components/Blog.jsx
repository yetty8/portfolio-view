// src/components/Blog.jsx
import { motion } from 'framer-motion';
import Image from './Image';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to simplify your components...",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "React",
    image: "/images/blog/1.jpg"
  },
  {
    id: 2,
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt: "A comprehensive guide to choosing the right CSS layout method...",
    date: "June 10, 2023",
    readTime: "7 min read",
    category: "CSS",
    image: "/images/blog/2.jpg"
  },
  {
    id: 3,
    title: "Building Accessible Web Applications",
    excerpt: "Best practices for creating web applications that everyone can use...",
    date: "July 5, 2023",
    readTime: "6 min read",
    category: "Accessibility",
    image: "/images/blog/3.jpg"
  },
  {
    id: 4,
    title: "Optimizing React Performance",
    excerpt: "Techniques to make your React applications faster and more efficient...",
    date: "August 12, 2023",
    readTime: "8 min read",
    category: "React",
    image: "/images/blog/4.jpg"
  },
  {
    id: 5,
    title: "State Management in Modern React",
    excerpt: "Comparing different state management solutions for React applications...",
    date: "September 8, 2023",
    readTime: "10 min read",
    category: "React",
    image: "/images/blog/light.jpg"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Latest Articles</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Sharing my thoughts and experiences on web development and design.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col"
              >
                {post.image && (
                  <div className="h-48 relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      width={400}
                      height={200}
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 rounded-full mb-3 self-start">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://my-blog-ochre-rho.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View All Articles
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}