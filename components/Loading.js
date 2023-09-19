import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import * as Progress from "react-native-progress"


var { width, height } = Dimensions.get("window");

const Loading = () => {
  return (
    <View style={{width, height}} className="absolue flex-row justify-center items-center">
      <Progress.CircleSnail size={160} thickness={12} color={"orange"} />
    </View>
  )
}

export default Loading