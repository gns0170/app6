import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native";
import Styled from "styled-components/native";

const Container = Styled.View`
    
`;
const Text_basic = Styled.Text`
    font-size: 20px;
`;



type Props = NativeStackScreenProps<StackNavigatorProps,"Stack1">;
const Stack1 = ({navigation}:Props) => {
    return(
    <Container>
        <Text_basic>STACK1!</Text_basic>
        <Button title="go to STACK1" onPress={()=>navigation.navigate('Stack1')}/>
        <Button title="go to STACK2" onPress={()=>navigation.navigate('Stack2')}/>
        <Button title="go to STACK3" onPress={()=>navigation.navigate('Stack3')}/>
    </Container>
    );

}

export default Stack1;


