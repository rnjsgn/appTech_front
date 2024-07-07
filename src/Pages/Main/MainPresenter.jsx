import React from "react";
import { ScrollView } from "react-native";

import { MainList } from "../../components/Main/MainList/MainList";

import MainStyle from "./MainStyle";

import { UserProvider } from "../../context/UserContext";

export const MainPresenter = ({
    navigation
}) => {
    return(
        <ScrollView
            style = {MainStyle.container}
        >
            <UserProvider>
                <MainList
                    navigation = {navigation}
                />
            </UserProvider>
        </ScrollView>
    )
}