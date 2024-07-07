import React from "react";
import { View } from "react-native";
import { Game } from "../Game/Game";

export const GameList = ({
    infoPopUpVisible,
    setInfoPopUpVisible,

    rankPopUpVisible,
    setRankPopUpVisible
}) => {
    return(
        <View>
            <Game 
                infoPopUpVisible = {infoPopUpVisible}
                setInfoPopUpVisible = {setInfoPopUpVisible}
    
                rankPopUpVisible = {rankPopUpVisible}
                setRankPopUpVisible = {setRankPopUpVisible}
            />
        </View>
    )
}