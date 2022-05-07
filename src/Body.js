import Esquerda from "./Left"
import Sidebar from "./Side"

export default function Corpo () {
    return(
        <div class="corpo">
            <Esquerda />
            <Sidebar />
        </div>
    )
}