import BlogCard from '../../components/BlogCard';
import styles from './page.module.css'
import { fetchData } from '../fetchData';

export default async function Home() {
  const posts = await fetchData();
  

  return (
    <main className={styles.main}>
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          author={post.author}
          coverPhoto={post.coverPhoto}
          datePublished={post.datePublished}
          slug={post.slug}
        />
      ))}
    </main>
    
  );
}