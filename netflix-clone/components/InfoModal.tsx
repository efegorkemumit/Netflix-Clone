import useInfoModalStore from '@/hooks/useInfoModalStore';
import useMovie from '@/hooks/useMovie';
import React, { useCallback, useEffect, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import PlayButton from './PlayButton';
import FavoriButtton from './FavoriButtton';

interface InfoModalProps{
    visible?: boolean;
    onClose:any;
}

const InfoModal:React.FC<InfoModalProps>=({visible, onClose})=> {

    const [isVisible, setIsvisible] = useState<boolean>(!!visible);

    const {movieId} = useInfoModalStore();
    const {data = {}} = useMovie(movieId);

   

  return (
    <div>

            {data?.title}

    
       
    </div>
  )
}

export default InfoModal