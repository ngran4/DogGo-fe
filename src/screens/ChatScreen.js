import React, { useContext, useEffect } from 'react'
import { StateContext } from '../context/StateContext'
import { View, Text, SafeAreaView } from 'react-native'
import OpenAI from "openai";

const Chat = () => {
  const [stateContext] = useContext(StateContext)
  const { container, header } = stateContext
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  async function main() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });
  
    console.log(completion.choices[0]);
  }

  // useEffect(() => {
  //   main()
  // }, [])

  return (
    <SafeAreaView style={container}>
      <View>
        <Text style={header}>Chat</Text>
      </View>
    </SafeAreaView>
  )
}

export default Chat
