import Info from "./Infos"
import User from "./MainUser"
import SuggestMenu from "./Suggestions"
export default function Sidebar(){
    return(
        <div class="sidebar">
          <User />
          <SuggestMenu />
          <Info />
        </div>
      
    )
}