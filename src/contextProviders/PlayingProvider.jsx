import { useState, createContext } from "react";

const PlayingContext = createContext()

function PlayingProvider({children}) {

    const [playing, setPlaying] = useState(false)

    console.log(playing)

    return (
        <PlayingContext.Provider value={[playing, setPlaying]}>
            {children}
        </PlayingContext.Provider>
    )
}

export { PlayingContext, PlayingProvider }