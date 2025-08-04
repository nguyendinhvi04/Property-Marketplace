import React from 'react';

const samplePosts = [
  { id: '1', title: 'Bán nhà mặt phố Quận 1', date: '2024-07-01' },
  { id: '2', title: 'Cho thuê căn hộ Vinhomes', date: '2024-06-28' },
];

const PostsTab = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Tin đã đăng</h2>
      <ul>
        {samplePosts.map(post => (
          <li key={post.id} className="mb-4 border-b pb-2">
            <div className="font-semibold">{post.title}</div>
            <div className="text-gray-500 text-sm">Ngày đăng: {post.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsTab; 