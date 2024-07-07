import React from "react";
import { ScrollView } from "react-native";

import { UserProvider } from "../../context/UserContext";
import { MyPageList } from "../../components/MyPage/MyPageList/MyPageList";

export const MyPagePresenter = () => {
    return(
        <ScrollView>
            <UserProvider>
                <MyPageList />
            </UserProvider>
        </ScrollView>
    )
}