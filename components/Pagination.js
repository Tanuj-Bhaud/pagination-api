import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div className="flex flex-row items-center justify-center">
      <ul className="flex flex-row">
        {pageNumbers.map((number) => (
          <li
            onClick={() => paginate(number)}
            key={number}
            className="border px-2 text-3xl hover:border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            <a>{number}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
