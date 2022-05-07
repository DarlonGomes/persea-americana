import Actions from "./PostFunctions"
import Ellipsis from "./EllipsisIcon"
export default function FeedPost (props){
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
                <img src={props.postUrl} alt={props.postAlt} />
              </div>

              <div class="fundo">
                <Actions />
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