import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    const res = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await res.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
  };

  const clearText = () => {
    setUsername("");
    setCommentText("");
  };

  // const deleteProductFromCart = async (user, productId) => {

  //     //checking if user has Cart
  //     Cart.findOne({ email: user.email }, async (err, cart) => {
  //       if (err || !cart) {
  //         throw new ApiError(httpStatus.BAD_REQUEST, "User does not have a cart");
  //       }
  //       let productIndexInCart = -1;
  //       cart.cartItems.forEach((item, index) => {
  //         (item.product && item.product._id) == productId
  //           ? (productIndexInCart = index)
  //           : null;
  //       });
  //       if (productIndexInCart == -1) {
  //         throw new ApiError(httpStatus.BAD_REQUEST, "Product not in cart");
  //       } else {
  //         let updatedCart = cart.cartItems.filter(
  //           (item) => item.product._id != productId
  //         );
  //         cart.cartItems = updatedCart;
  //         await cart.save();
  //       }
  //     });

  // }

  return (
    <div id="add-comment-form">
      <h3>Add a Comment Here...</h3>
      <label>
        Name:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Comment:
        <textarea
          rows="4"
          col="50"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
      </label>
      <Button variant="primary" onClick={() => addComment()}>
        Add Comment
      </Button>
      <Button variant="primary" className="mx-3" onClick={() => clearText()}>
        Clear
      </Button>
      <h3 className="my-4">Preview</h3>
      <div className="comment" style={{ border: "1px black solid" }}>
        <h4>{username}</h4>
        <p>{commentText}</p>
      </div>
    </div>
  );
};

export default AddCommentForm;
