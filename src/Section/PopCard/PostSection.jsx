import React, { useContext } from 'react'
import { AppContext } from '../../AppContext/DashboardContext'

function PostSection() {
    const { postFxn, handleDelete, handleFormEdit, setIsDisplayPost, isDisplayPost } = useContext(AppContext);
    const [ posts, setPosts ] = postFxn;
    

    

  return (
    <div className='post-section top-wrapper'>
        <button className="back-to-dashboard" onClick={()=> setIsDisplayPost(!isDisplayPost)}>Back ➡️</button>
        <h2>All Post</h2>
        <div className="post-container">
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>PostId</th>
                            <th>Author</th>
                            <th>Post Title</th>
                            <th>Thumbnail</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts && posts.map((post) => 
                            
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td className='post-author'>{post.authorName}</td>
                                <td className='post-title'>{post.title}</td>
                                <td className='post-thumbnail'><img src={post.thumbnail} alt="" /></td>
                                <td className='post-action'>
                                    <span>
                                        <button className='edit-post' onClick={() => handleFormEdit(post.id)}>🔱</button>
                                        <button className='delete-post' onClick={() => handleDelete(post.id)}>❌</button>
                                    </span>
                                </td>

                            </tr>
                        )}
                        <tr>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
  )
}

export default PostSection
