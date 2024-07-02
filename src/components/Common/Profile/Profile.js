import React from "react";
import { View, Text, Image } from "react-native";
import ProfileStyles from "./ProfileStyle";

export const Profile = () => {
    return(
        <View
            style = {ProfileStyles.container}
        >
            <Image
                style = {ProfileStyles.image}
                source={require('../../../assets/images/Superman.jpg')}
            />
            <View
                style = {ProfileStyles.info}
            >
                <Text>용의자 0658</Text>
            </View>
        </View>
    )
}