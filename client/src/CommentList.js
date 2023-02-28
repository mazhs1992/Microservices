import React  from 'react';
import axios from 'axios';

export default ({comments})=>{  
    //const [comments,setComments] =useState({})
    // const fetchData = async () =>{       
    //     const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    //     setComments(res.data);     
    // };
    // useEffect(()=>{
    //     fetchData()
    // },[]) //empty array tells react to only run one time


    const renderedComments = comments.map(comment => {
        let content;

        if (comment.status === 'approved') {
            content = comment.content
        }

        if (comment.status === 'pending') {
            content = 'This comments is awaitung moderation'
        }

        if (comment.status === 'rejected') {
            content = 'This comments has been rejected'
        }


        return <li key={comment.id}>{content}</li>;
    })
   
    return <ul>{renderedComments}</ul>
   
}
