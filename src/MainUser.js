export default function User (props){
    return(
        <div class="usuario">
            <img src={props.url} alt={props.alt} />
            <div class="texto">
              <strong>{props.name}</strong>
              {props.info}
            </div>
          </div>
    )
}