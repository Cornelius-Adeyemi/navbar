import { social } from "./data"



export function Navigate({text}){

    return (
     <li>{text}</li>

    )
}


export function Icon({url, component:Componet}){

    return (<li>
        <a href={url}> <Componet/> </a>
    </li>)
}