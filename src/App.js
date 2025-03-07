import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/FormList.js';
import Form from '../src/components/Form.js'
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]); // 게시글 리스트 상태

  useEffect(()=>{
    const storage = JSON.parse(localStorage.getItem('posts')) || [] ;
    setPosts(storage); // 상태에 저장
  }, [])

  // 게시글 추가 함수
  const addPost = (name, phonenumber, postcode, address, detailaddress) => {
    const newPost = {
      id : Date.now(),
      name,
      phonenumber,
      postcode,
      address,
      detailaddress,
    };
    
    const updatedposts = [...posts, newPost];  // 기존 게시글에 새로운 게시글 추가
    setPosts(updatedposts);

    // 로컬스토리지에 게시글 업데이트
    localStorage.setItem('posts',JSON.stringify(updatedposts));
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id); // 해당 id를 제외한 새 배열 생성
    setPosts(updatedPosts);


    // 로컬스토리지에 업데이트된 게시글 반영
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    // 로컬스토리지에서 posts 항목 제거
    if (updatedPosts.length === 0) {
      localStorage.removeItem('posts'); // 게시글 목록이 비면 'posts' 항목 삭제
    }
  };

  return (
    <div className="App">
        <Link to='/'>목록</Link>
        <Link to='/form'>항목추가</Link>

        <Routes>
          <Route path='/' element={<Home posts={posts} deletePost={deletePost}/>}></Route> 
          {/* Form 컴포넌트에 addPost 함수 전달 */}

          <Route path='/form' element={<Form addPost={addPost}/>}></Route> 
          {/* 게시글 리스트 컴포넌트에 posts 전달 */}
        </Routes>
    </div>
  );
}

export default App;
