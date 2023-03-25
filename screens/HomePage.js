import React from 'react'
import {View, Text, TextInput} from 'react-native'

const HomePage = () => {



    return(
        <View className="h-full">
            <View className="h-full justify-center p-3">
            <View className="text-center my-8">
            <Text className="text-4xl">Knowlater</Text>
            </View>
            <View className="flex flex-row mt-6 h-12">
                <Text className="text-2xl">
                    Login
                </Text>
                <TextInput className="w-3/5 rounded-3xl h-full border-4 border-black ml-12 pl-4 pr-4 text-xl"/>
            </View>
            <View className="flex flex-row mt-4 h-12">
                <Text className="text-2xl">
                    Password
                </Text>
                <TextInput className="w-3/5 rounded-3xl border-4 border-black ml-2 pl-4 pr-4 text-xl" />
            </View>
            </View>
        </View>
    )
}

export default HomePage;