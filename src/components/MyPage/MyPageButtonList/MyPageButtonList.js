import React from "react";
import { MyPageButton } from "../MyPageButton/MyPageButton";
import { View } from "react-native";

export const MyPageButtonList = () => {
    return(
        <View>
            <MyPageButton 
                title = {'포인트 내역'}
            />
            <MyPageButton 
                title = {'게임 내역'}
            />
            <MyPageButton 
                title = {'프로필 수정'}
            />
            <MyPageButton 
                title = {'고객 센터'}
            />
        </View>
    )
}