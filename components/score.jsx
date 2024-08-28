/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native'

export function Score({score, maxScore}){
    const getColors  = () => {
        const percentage = (score/maxScore)*100;
        if (percentage < 98){
            return "bg-red-500"
        }
        else if(percentage<99){
            return "bg-yellow-500 text-white"
        } else{
            return "bg-green-500 text-white"
        }
    }
    const className = getColors();
    return(
        <View className={`${className} w-8 h-8 rounded-full justify-center items-center`}>
            <Text className="text-lg font-bold text-white">{score}</Text>
        </View>
    )
}