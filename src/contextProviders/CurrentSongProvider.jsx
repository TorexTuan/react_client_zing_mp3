import { createContext, useState, useEffect } from 'react';

import songs from '../fake-data/songs';
import storage from '../storage/storage';
import eventBus from '../middlewares/eventBus'

const CurrentSongContext = createContext()

function CurrentSongProvider({children}) {

    if(!storage.get()) {
        storage.set({currentIndex: 0})
    }
    const [currentSong, setCurrentSong] = useState(songs[storage.get().currentIndex])
    useEffect(() => {
    eventBus.on('currentIndex', song => setCurrentSong(song))
    return () => {
        eventBus.remove('currentIndex')
    }
    })

    return (
        <CurrentSongContext.Provider value={currentSong}>
            {children}
        </CurrentSongContext.Provider>
    )
}

export { CurrentSongContext, CurrentSongProvider }