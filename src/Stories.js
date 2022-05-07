import UserStory from "./UserStory"
export default function Stories(){
  const usuarioStory =[
    {
      url:"assets/img/9gag.svg",
      alt:"9gag",
      name:"9gag"
    },
    {
      url:"assets/img/meowed.svg",
      alt:"meowed",
      name:"meowed"
    },
    {
      url:"assets/img/barked.svg",
      alt:"barked",
      name:"barked"
    },
    {
      url:"assets/img/nathanwpylestrangeplanet.svg",
      alt:"nathanwpylestrangeplanet",
      name:"nathanwpylestrangeplanet"
    },
    {
      url:"assets/img/wawawicomics.svg",
      alt:"wawawicomics",
      name:"wawawicomics"
    },
    {
      url:"assets/img/respondeai.svg",
      alt:"respondeai",
      name:"respondeai"
    },
    {
      url:"assets/img/filomoderna.svg",
      alt:"filomoderna",
      name:"filomoderna"
    },
    {
      url:"assets/img/memeriagourmet.svg",
      alt:"memeriagourmet",
      name:"memeriagourmet"
    },
  ]
    return(
        <div class="stories">
            {usuarioStory.map((usuario)=> <UserStory url={usuario.url} alt={usuario.url} name={usuario.name} />)}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
    )
}