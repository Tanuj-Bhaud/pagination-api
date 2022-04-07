import React from 'react'
import { useState, useEffect } from 'react'
function Posts({ posts }) {
  const dataElements = posts.map((item) => {
    return (
      <div className="p-4 lg:w-1/3">
        <div className="relative h-full overflow-hidden rounded-lg bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 text-center">
          <h1 className="title-font mb-3 text-xl font-medium text-gray-900 sm:text-2xl">
            {item.title}
          </h1>
          <p className="leading-relaxed">{item.body} </p>
        </div>
      </div>
    )
  })
  console.log(dataElements)

  return (
    <div>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-20">
          <div className="m-4 flex flex-wrap">
            {/*three items */}
            <div className="flex flex-wrap items-center justify-center">
              {dataElements}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Posts
