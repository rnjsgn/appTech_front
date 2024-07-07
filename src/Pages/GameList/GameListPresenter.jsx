import React from "react";
import { ScrollView, Text } from "react-native";
import { GameList } from "../../components/GameList/GameList/GameList";

export const GameListPresenter = ({
    infoPopUpVisible,
    setInfoPopUpVisible,

    rankPopUpVisible,
    setRankPopUpVisible
}) => {
    return(
        <ScrollView>
            <GameList 
                infoPopUpVisible = {infoPopUpVisible}
                setInfoPopUpVisible = {setInfoPopUpVisible}
    
                rankPopUpVisible = {rankPopUpVisible}
                setRankPopUpVisible = {setRankPopUpVisible}
            />
        </ScrollView>
    )
}