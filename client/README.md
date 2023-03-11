# Instructions for Deploying React App

On CommentCreate.js we changed the URL of axios POST to ` await axios.post(`http://posts.com/posts/${postId}/comments`,{})`. The reason for that is that the user (browser) will have to sent requests on our /posts service . As described on the video 99 we can access this service throw url http://posts.com/posts

Same on files PostCreate, PostList 