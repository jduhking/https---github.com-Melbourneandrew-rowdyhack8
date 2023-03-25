import React from 'react'
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native'
import { Formik } from 'formik'


const HomePage = ({navigation}) => {



    return(
        <View className="h-full">
            <View className="h-full justify-center p-3">
            <View className="text-center my-8">
            <Text className="text-4xl">Knowlater</Text>
            </View>
            <Formik

            initialValues={{username: '', password: ''}}
            onSubmit={(values) => {

                console.log(values)
                navigation.navigate('Recording')
            
            }
            }
            
            
            
            >
                {({ handleChange, handleBlur, handleSubmit, values}) => (
                    <View>
                        {/* Login */}
            <View className="flex flex-row mt-6 h-12">
                
                <Text className="text-2xl">
                    Username
                </Text>
                <TextInput className="w-3/5 rounded-3xl h-full border-4 border-black ml-3 pl-4 pr-4 text-xl"
                placeholder="Username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                />
            </View>
                        {/* Password */}
            <View className="flex flex-row mt-4 h-12">
                <Text className="text-2xl">
                    Password
                </Text>
                <TextInput className="w-3/5 rounded-3xl border-4 border-black ml-4 pl-4 pr-4 text-xl" 
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                />
            </View>
       
            
                <Button onPress={handleSubmit} title="Login" />

            </View>
            )}
            </Formik>
                
            </View>
           
        </View>
    )
}

export default HomePage;