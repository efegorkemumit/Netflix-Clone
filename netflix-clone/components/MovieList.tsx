import React from 'react'
import {isEmpty} from 'lodash'

interface MovieListProps {

    data:MovieInterface[];
    title:string;
}

const  MovieList: React.FC<MovieListProps>=({data,title})=> {

    if(isEmpty(data)){
        return null;
    }
  return (
    <div>MovieList</div>
  )
}

export default MovieList