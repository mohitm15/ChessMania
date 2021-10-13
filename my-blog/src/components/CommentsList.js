import React, { useState } from "react";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

const CommentsList = ({ comments }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalInputComment, setModalInputComment] = useState("");
  //const [username,setUsername] = useState('');
  //console.log(comments);

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const handleCommentChange = (event) => {
    setModalInputComment(event.target.value);
  };

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
  };


  return (
    <>
      <div>
        {comments.map((item, key) => (
          <div className="comment" key={key}>
            <h4>{item.username}</h4>
            <p>{item.text}</p>
            {/* <Button
              variant="outline-primary btn-sm mx-3"
              onClick={() => handleShowModal()}
            >
              Update
            </Button> */}
            {/* <Button
              variant="outline-danger btn-sm"
              onClick={deleteComment(key)}
            >
              Delete
            </Button> */}
          </div>
        ))}

        <MyVerticallyCenteredModal
          show={modalShow}
          modalInputComment={modalInputComment}
          handleCommentChange={handleCommentChange}
          handleCloseModal={handleCloseModal}
          updateComment={updateComment}
        />
      </div>
    </>
  );
};

export default CommentsList;
