import React , {useState} from'react';
import { Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

const CommentsList=({comments, articleName, setArticleInfo})=> {

    const [modalShow, setModalShow] = useState(false);
    const [modalInputComment, setModalInputComment] = useState('');
    //const [username,setUsername] = useState('');
    const [commentText,setCommentText] = useState('');
    //console.log(comments);
    const handleShowModal = (event) => {
        setModalShow(true);
        setModalInputComment('');

    }

    const handleCloseModal = () => {
        setModalShow(false);
    }

    const handleCommentChange = (event) => {
        setModalInputComment(event.target.value);
    }

    const updateComment = async () => {
        //console.handleCommentChange("update");
        // const res = await fetch(`/api/articles/${articleName}/update-comment`,{
        //     method:'put',
        //     body:JSON.stringify({text:commentText}),
        //     headers: {
        //         'Content-Type':'application/json',
        //     }
        // })
        // const body = await res.json();
        // setArticleInfo(body);
        // setCommentText('');
        // handleCloseModal();
    }

    const deleteComment = async (index) => {

        //yeh server.js me bhejna hai, per bheje kaise??
        
        // for( let x=0;x<comments.length;x++) {
        //     if(x === index) {
        //       let  {usernametoPass, commentToPass} = comments[x];
        //       break;
        //     }
        // }
        
        //yeh to vaha se comments ko fdect krega after delete operation

        // const res = await fetch(`/api/articles/${articleName}/delete-comment?index=${index}`,{
        //     method:'delete',
        // });
        // const body = await res.json();
        // setArticleInfo(body);
        // setCommentText('');
        // handleCloseModal();
    };

    return(
    <>
        <div>
            {comments.map((item,key)=>(
                <div className="comment" key={key}>
                    <h4>{item.username}</h4>
                    <p>{item.text}</p>
                    <Button variant="outline-primary btn-sm mx-3" onClick={() => handleShowModal()}>Update</Button>
                    <Button variant="outline-danger btn-sm" onClick={deleteComment(key)} >Delete</Button> 
                </div>

            ))}

            < MyVerticallyCenteredModal 
                show={modalShow}
                modalInputComment={modalInputComment}
                handleCommentChange={handleCommentChange}
                handleCloseModal={handleCloseModal} 
                updateComment= {updateComment} 
            />

        </div>

    </>
    )
};

export default CommentsList;