// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from "react";

const LikeSection = props => {

  let liked = false;

  function likeHandler(){
    if (liked === false){
      props.setLikes(props.likes + 1)
      liked = true;
    } else {
      props.setLikes(props.likes -1)
      liked = false;
    }
  }

  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick = {() => likeHandler()}/>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
    Likes: {props.likes}
    </p>
</div>
  )
};

export default LikeSection;
