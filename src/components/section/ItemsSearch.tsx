import React, { useEffect, useState } from 'react';
import { fetchData } from '../../utils/fetchData';
import InputSearch from '../common/Inputs/InputSearch';
import SkeletonPage from '../skeleton/Skeleton';

interface Post {
  id: string;
  title: string;
  nickname: string;
  content: string;
  publishDate: string;
  tags: string[];
}

const ItemsSearch = () => {
  const [data, setData] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  }

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const result = await fetchData('posts');
      if (result) {
        // Convertir el objeto en un array
        const postsArray = Object.keys(result).map((key) => ({
          id: key,
          ...result[key],
        }));
        setData(postsArray);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <main className='ssm:w-full flex flex-col items-center'>
      <InputSearch onChange={handleSearchChange} />
      <section className='flex flex-wrap ssm:w-full px-4 mt-10 justify-evenly rounded-lg ssm:flex-col md:flex-row ssm:items-center hover'>
        {loading ? (
          <SkeletonPage count={data.length || 6} />
        ) : 
        filteredData.length > 0 ? (
          filteredData.map((item) => (
            <a href={`/posts/${generateSlug(item.title)}`} key={item.id}>
              <article className='ssm:w-[20rem] sm:w-[23rem] min-h-[13rem] py-4 px-8 my-4 shadow-custom rounded-md relative hover:scale-105 transform duration-200 cursor-pointer'>
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
                <div className='flex justify-between'>
                  <span className='inline-block mt-3 ssm:text-[.8rem] md:text-[.9rem] text-grayPrimary bottom-5'>{item.nickname}</span>
                  <span className='inline-block mt-3 ssm:text-[.8rem] md:text-[.9rem] text-grayPrimary bottom-5'>{item.publishDate}</span>
                </div>
              </article>
            </a>
          ))
        ) : (
          <p>No results found</p>
        )}
      </section>
    </main>
  );
};

export default ItemsSearch;