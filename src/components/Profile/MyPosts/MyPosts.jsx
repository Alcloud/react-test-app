import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElement = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
            <div className={s.postBlock}>
                <h3>My Posts</h3>
                <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={addPost} value={props.newPostText}>Add Post</button>
                </div>
                </div>
                <div className={s.posts}>
                    {postElement}
                    {/*<Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                    <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                    <Post id={postsData[2].id} message={postsData[2].message} likesCount={postsData[2].likesCount}/>*/}
                </div>
            </div>);
  }

  export default MyPosts;