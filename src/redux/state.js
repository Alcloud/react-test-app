let rerenderEntireTree = () => {

}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'how are you?', likesCount: 23},
            {id: 2, message: 'fine!', likesCount: 2},
            {id: 3, message: 'Gut', likesCount: 3}
        ],
        newPostText: 'etwas'
    },
    messagesPage: {
        dialogData: [
            {id: 1, name: 'Guillermo'},
            {id: 2, name: 'Alejandro'},
            {id: 3, name: 'Douglas'}
        ],
        messageData: [
        {id: 1, message: 'Hii'},
        {id: 2, message: 'wie gehtS?'},
        {id: 3, message: 'Gut'}
        ]
    }
}

export const addPost = (newMessage) => {
    let newPost = {
        id: 5,
        message: newMessage,
        likesCount :0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = 'j';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
}

export default state;