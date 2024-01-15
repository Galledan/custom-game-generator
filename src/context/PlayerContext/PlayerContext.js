import { createContext,useContext } from "react";

const PlayerContext = createContext();

const PlayerProvider = ({children}) => {

    const initialData = [
        { name: "Galledan", role: { id: 1, rolename: "Mid" }, win: 20, lose: 5 },
        {
          name: "Freezenight",
          role: { id: 2, rolename: "Jungle" },
          win: 15,
          lose: 10,
        },
      ];


    const value = {initialData}

    return(
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    )
}

const usePlayer = () => {
    const context = useContext(PlayerContext)

    return context
}

export {PlayerProvider, usePlayer}