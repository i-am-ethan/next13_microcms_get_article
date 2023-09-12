
'use client'

import Image from 'next/image'
import { createClient } from 'microcms-js-sdk'; //ES6
import { useEffect, useState } from 'react';
import { BlogResponse } from '@/types/microcms';
import styles from './page.module.css'
import { formatDateJP } from "@/lib/utils";

const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "",
  apiKey: process.env.API_KEY || "",
});

export default function Home() {

  const [blogData, setBlogData] = useState<BlogResponse | null>(null);

  const fetchData = async () => {
    const response = await client.get({
      customRequestInit: {
        next: {
          revalidate: 60,
        },
      },
      endpoint: process.env.END_POINT || "",
    });
    console.log(response)
    setBlogData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className={styles.title}>My Development Blog</h1>
      <p>このサイトはMicroCMSで追加した記事データを表示するためのデモサイトです！</p>
        <ul className={styles.ul}>
          {blogData.contents.map(blog => (
            <li className={styles.li}>
              <div key={blog.id}>
                <Image 
                  className={styles.blogImage}
                  src={blog.eyecatch?.url || '/img/placeholder.webp'} 
                  width={blog.eyecatch?.width || 500} 
                  height={blog.eyecatch?.height || 300} 
                  alt="Eyecatch Image" 
                />
                <div className={styles.blogBottom}>
                  <h2 className={styles.blogTitle}>{blog.title}</h2>
                  <div className={styles.blogContent} dangerouslySetInnerHTML={{ __html: blog.content || '' }} />
                  <time className={styles.publishedDate} dateTime={blog.publishedAt}>
                    {formatDateJP(blog.publishedAt)}に投稿
                  </time>
                </div>
              </div>
            </li>
          ))}
        </ul>
    </>
  );
}



