export default function SuggestedUser(props){
    
    return(
        <div class="sugestao">
              <div class="usuario">
                <img src={props.url} alt={props.alt}/>
                <div class="texto">
                  <div class="nome">{props.name}</div>
                  <div class="razao">{props.status}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
        </div>
    )
}