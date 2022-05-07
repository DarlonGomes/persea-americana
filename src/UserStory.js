export default function UserStory(props){
    return(
        <div class="story">
        <div class="imagem">
          <img src={props.url} alt={props.alt}/>
        </div>
        <div class="usuario">
          {props.name}
        </div>
      </div>
    )
}