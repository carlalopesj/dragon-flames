import { createContext, useState } from "react";

export const PlayerContext = createContext();

function PlayerProvider({ children }) {
    const [playerData, setPlayerData] = useState({
        health: 0,
        gold: 0
    });

    return (
        <PlayerContext.Provider value={{ playerData, setPlayerData }}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerProvider;