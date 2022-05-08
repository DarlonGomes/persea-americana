import Info from "./Infos"
import User from "./MainUser"
import SuggestMenu from "./Suggestions"
export default function Sidebar(){
    return(
        <div class="sidebar">
          <User url="assets/img/catanacomics.svg" alt="Perfil do usuário: catanacomics" name="catanacomics" info="Catana"/>
          <SuggestMenu />
          <Info />
        </div>
    )
}