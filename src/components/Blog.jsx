// src/components/Blog.jsx
import { motion } from 'framer-motion';
import Image from './Image';

const blogPosts = [
  {
    id: 1,
    title: "How I Built an IT Help Desk Ticketing System Using React and Node.js",
    excerpt:
      "Building an IT Help Desk system helped me understand how real-world support workflows function and how full-stack applications are structured.",
    content: `
When I started building my IT Help Desk Ticketing System, my goal was to simulate how real companies handle technical support requests. I wanted users to be able to submit tickets, track their status, and allow admins to manage and resolve issues efficiently.

I built the frontend using React, focusing on clean UI components and usability. Users can submit tickets with categories like hardware, software, or network issues. On the backend, I used Node.js and Express to handle API requests and MongoDB to store ticket data.

One of the main challenges was managing ticket states such as open, in progress, and resolved. Implementing this logic helped me understand how backend validation and frontend state management work together.

This project gave me hands-on experience with REST APIs, CRUD operations, and real-world problem solving. It also strengthened my understanding of how IT support teams operate in real environments.
    `,
    date: "October 2, 2023",
    readTime: "6 min read",
    category: "Full Stack / IT Support",
    image: "/images/blog/1.jpg"
  },
  {
    id: 2,
    title: "Deploying a Full-Stack MERN Application to Railway: Lessons Learned",
    excerpt:
      "Deployment is often the hardest part of a project. Here’s what I learned deploying my MERN application to Railway.",
    content: `
After completing my MERN application, deployment was the next big challenge. I chose Railway because of its simplicity and strong support for Node.js and MongoDB.

One issue I faced was a MongoDB connection error caused by environment variables not loading correctly. Fixing this taught me the importance of .env files and production configurations.

I also learned how Railway manages containers, start commands, and build logs. Debugging deployment errors forced me to read logs carefully instead of guessing.

Successfully deploying my app gave me confidence that I can move projects from development to production — a crucial skill for any developer.
    `,
    date: "October 10, 2023",
    readTime: "5 min read",
    category: "Deployment / DevOps",
    image: "/images/blog/2.jpg"
  },
  {
    id: 3,
    title: "React State Management Explained: What I Learned from Real Projects",
    excerpt:
      "Understanding state management became much easier once I applied it to real React projects.",
    content: `
When I first learned React, state management felt confusing. Hooks like useState and useEffect made more sense once I started building real applications.

In smaller components, useState was enough. But as my apps grew, I realized the importance of lifting state up and passing props properly.

Through trial and error, I learned how poor state structure can lead to unnecessary re-renders and bugs. Refactoring my components helped me write cleaner and more maintainable code.

This experience improved both my technical skills and my ability to plan component architecture before writing code.
    `,
    date: "October 18, 2023",
    readTime: "7 min read",
    category: "React",
    image: "/images/blog/3.jpg"
  },

 {
  id: 4,
  title: "Optimizing React Performance: What I Fixed in Real Projects",
  excerpt:
    "Performance issues became more noticeable as my React projects grew. Here’s how I improved speed and reduced unnecessary re-renders.",
  content: `
As my React applications became more complex, I started noticing performance issues such as unnecessary re-renders and slow component updates. This pushed me to learn how React handles rendering under the hood.

One of the first improvements I made was identifying components that were re-rendering too often. By using React DevTools, I was able to track component updates and understand where optimizations were needed.

I applied techniques such as memoization using React.memo and useCallback to prevent unnecessary renders. I also learned how to properly structure component state so that updates affected only the components that truly needed to change.

Optimizing performance taught me to think more critically about component design and data flow. These improvements resulted in faster load times and smoother user interactions, especially in larger applications.
  `,
  date: "August 12, 2023",
  readTime: "8 min read",
  category: "React",
  image: "/images/blog/4.jpg"
},
  {
  id: 5,
  title: "State Management in Modern React: What I Use and Why",
  excerpt:
    "Choosing the right state management approach depends on the size and needs of the application. Here’s what I learned from building real React projects.",
  content: `
As I built more React applications, I realized that state management plays a critical role in maintainability and scalability. Early on, I relied heavily on useState and prop drilling, which worked well for small projects.

However, as my applications grew, passing state through multiple component levels became harder to manage. This led me to explore better patterns such as lifting state up and organizing components more effectively.

I learned that not every project needs a complex state management library. In many cases, React’s built-in hooks were enough when used correctly. For larger applications, separating concerns and planning state structure ahead of time made a significant difference.

Understanding when to keep state local and when to share it globally helped me write cleaner, more predictable code and made my applications easier to debug and extend.
  `,
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