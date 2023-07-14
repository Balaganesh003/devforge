import React from 'react';
import PostCard from '@/components/PostCard';
import { useSelector } from 'react-redux';
import HIghlightCard from '@/components/HIghlightCard';

const Posts = () => {
  const { posts, TrendingPostData } = useSelector((state) => state.posts);

  return (
    <div className=" mobile-lg:max-w-[64rem] w-full  h-full overflow-y-auto px-2 mobile-md:px-4 mobile-lg:px-6 md:px-8 py-8">
      {posts.map((post) => (
        <PostCard key={post.id * 9} post={post} />
      ))}
      <HIghlightCard />
    </div>
  );
};

export default Posts;
