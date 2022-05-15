import {useEffect} from 'react'
import { fetchGet } from '../../helpers/postFetch'

export const CardEpisodes = () => {
    useEffect(() => {
      
    

    }, [])
    const getCharacteres = async()=>{
        fetchGet(`https://rickandmortyapi.com/api/character?page=${1}`)
    }
  return (
    <>

    </>
  )
}
