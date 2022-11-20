import React, { useState } from 'react'
import "./createPost.css"

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const inputTitle = (e) => {
    setTitle(e.target.value)
  }
  const inputContent = (e) => {
    setContent(e.target.value)
  }

  const createPost = () => {
    console.log(title)
    console.log(content)
  }

  return (
    <div className='createPostPage'>
      <div className='postContainer'>
        <h1>記事を投稿する</h1>
        <div className='inputPost'>
          <div>タイトル</div>
          <input type='text' placeholder='タイトルを記入' onChange={inputTitle} />
        </div>
        <div className='inputPost'>
          <div>投稿</div>
          <textarea placeholder='投稿内容を記入' onChange={inputContent}></textarea>
        </div>
        <button className='postButton' onClick={createPost}>投稿する</button>
      </div>
    </div>
  )
}
