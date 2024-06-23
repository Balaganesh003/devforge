import React from 'react';
import PostCard from '@/components/PostCard';
import { useSelector } from 'react-redux';
import HIghlightCard from '@/components/HIghlightCard';

const Posts = () => {
  const { posts, TrendingPostData } = useSelector((state) => state.posts);

  return (
    <div className=" mobile-lg:max-w-[64rem] mx-auto w-full  px-2 mobile-md:px-4 mobile-lg:px-6 md:px-8 my-[3.5rem] flex flex-col items-center">
      {posts.map((post) => (
        <PostCard key={post.id * 9} post={post} />
      ))}
      <HIghlightCard />
    </div>
  );
};

export default Posts;
