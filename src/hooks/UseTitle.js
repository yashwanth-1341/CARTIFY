import { useEffect } from "react"

export const UseTitle = (title) => {

    useEffect(()=>
    {
        document.title=`${title} | Cartify`
    },[title])
return null
}

