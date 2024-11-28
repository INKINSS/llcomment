import React, { useEffect, useState } from 'react';
import { fetchData } from '../../utils/fetchData';

interface Post {
  id: string;
  title: string;
  content: string;
  publishDate: string;
  tags: string[]; // Asegurarse de que los tags sean un array
}

const ItemsSearch = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await fetchData('posts');
      if (result) {
        // Convertir el objeto en un array
        const postsArray = Object.keys(result).map((key) => ({
          id: key,
          ...result[key],
        }));
        setData(postsArray);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className='ssm:w-full flex flex-col items-center'>
      <h2>ItemsSearch</h2>
      <section className='flex flex-wrap ssm:w-full lg:w-[80%] px-4 mt-10 justify-evenly rounded-lg ssm:flex-col md:flex-row ssm:items-center hover'>
        {data.length > 0 ? (
          data.map((item) => (
            <article className=' ssm:w-[20rem] sm:w-[23rem] min-h-[13rem] py-4 px-8 my-4 shadow-custom rounded-md relative hover:scale-105 transform duration-200 cursor-pointer' key={item.id}>
              <h3 className='ssm:text-[1.2rem] sm:text-[1.4rem] font-semibold line-clamp-1'>{item.title}</h3>
              <p className='text-gray-900 line-clamp-2'>{item.content}</p>
              <div className='my-3 flex flex-wrap'>
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='ssm:text-[.8rem] ssm:my-1 sm:my-0 sm:text-[.9rem] ssm:px-2 ssm:py-1 sm:px-3 sm:py-1 bg-gray-200 text-gray-700 rounded-full mr-2'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className='inline-block mt-3 ssm:text-[.8rem] md:text-[.9rem] text-grayPrimary absolute bottom-5'>{item.publishDate}</span>
            </article>
          ))
        ) : (
          <p>cargando...</p>
        )}
      </section>
    </main>
  );
};

export default ItemsSearch;
