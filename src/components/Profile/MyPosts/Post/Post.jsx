import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
            <div>
                <div className={s.post}>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQOiGTkUougAxxt8nb7rnsKiEh6Shmyf2PJBEiyjv38rQcS5ph"/>
                        {props.message} 
                    </div>
                    <div>
                        likes: {props.likesCount}
                    </div>
                </div>
            </div>);
  }

  export default Post;