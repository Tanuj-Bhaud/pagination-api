import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import Posts from '../components/Posts'
import { useState, useEffect } from 'react'

const Home: NextPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        let dataArray = data
        console.log(dataArray)
        setPosts(dataArray)
      })
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  


  return (
    <div className="">
      <Head>
        <title>API Pagination</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header />    
        <Posts posts={currentPosts} /> 
      
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />

      </main>

    </div>
  )
}

export default Home
