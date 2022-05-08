import React from "react";
import Ellipsis from "./EllipsisIcon"
export default function FeedPost (props){
  const [like, setLike] = React.useState("")
    const [heart, setHeart] = React.useState("heart-outline");

    function likePost () {
        if (heart !== "heart-outline") {
            setLike("")
            setHeart("heart-outline")
        } else {
            setLike("like")
            setHeart("heart")
        }
    }
    return(
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.userUrl} alt={props.username}/>
                  {props.username}
                </div>
                <Ellipsis />
              </div>

              <div class="conteudo">
                <img onClick={likePost} src={props.postUrl} alt={props.postAlt} />
              </div>

              <div class="fundo">
              <div class="acoes">
                  <div>
                    <ion-icon onClick={likePost} class={"md hydrated " + like} name={heart}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>
                <div class="curtidas">
                  <img src={props.likeUrl} alt={props.likeUser}/>
                  <div class="texto">
                    Curtido por <strong>{props.likeUser}</strong> e <strong>outras {props.likeCounter} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    )
}

