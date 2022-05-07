import SuggestTitle from "./SideTitle"
import SuggestedUser from "./SuggestedUser"
export default function UserSuggestion(){
    const usuariosSugeridos = [
        {
            url:"assets/img/bad.vibes.memes.svg",
            alt: "bad.vibes.memes",
            name:"bad.vibes.memes",
            status:"Segue você"
        },
        {
            url:"assets/img/chibirdart.svg",
            alt:"chibirdart",
            name:"chibirdart",
            status:"Segue você"
        },
        {
            url:"assets/img/razoesparaacreditar.svg",
            alt:"razoesparaacreditar",
            name:"razoesparaacreditar",
            status:"Novo no Instagram"
        },
        {
            url:"assets/img/adorable_animals.svg",
            alt:"adorable_animals",
            name:"adorable_animals",
            status:"Segue você"
        },
        {
            url:"assets/img/smallcutecats.svg",
            alt:"smallcutecats",
            name:"smallcutecats",
            status:"Segue você"
        }
]
    return(
        <div>
        <SuggestTitle />
        {usuariosSugeridos.map((usuario) => <SuggestedUser url={usuario.url} alt={usuario.alt} name={usuario.name} status={usuario.status} />)}
        </div>
    )
}
