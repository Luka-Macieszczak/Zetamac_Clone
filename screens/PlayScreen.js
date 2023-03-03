import React, {useState, useContext, useEffect} from 'react'
import { Context } from '../Context';
import {
StyleSheet,
SafeAreaView,
View,
TouchableOpacity,
Text} from 'react-native';
 
const PlayScreen = ({ navigation }) => {
    const context = useContext(Context)

    // Context stores time statically
    // Local dynamic time state for timer
    const [time, setTime] = useState(context.time)
    const [score, setScore] = useState(0)
    const [answer, setAnswer] = useState('')
    const [opp, setOpp] = useState(0)
    const [arg1, setArg1] = useState(0)
    const [arg2, setArg2] = useState(0)
    const [checkAns, setCheckAns] = useState(0)

    const oppsList = ['+', '-', 'X', '÷']


    

    useEffect(() => {
        setTimeout(() => setTime((current) => {
            if(current <= 0){
                navigation.navigate('FinalScreen')
                context.setScore(score)
                return context.time
            }
            return current - 1
        }), 1000)
    }, [time])

    useEffect(() => {
        context.setScore(0)
        updateEquation()
    }, [])

    const updateEquation = () => {
        const newOpp = Math.floor(Math.random()*4)
        setOpp(newOpp)
        // Addition
        if(newOpp === 0){
            const [tmp1, tmp2] = [Math.floor(Math.random()*context.add2  + context.add1), Math.floor(Math.random()*context.add4 + context.add3)]
            setArg1(tmp1)
            setArg2(tmp2)
            setCheckAns(tmp1 + tmp2)
        }
        // Subtraction
        else if(newOpp == 1){
            const [tmp1, tmp2] = [Math.floor(Math.random() *context.add2 + context.add1), Math.floor(Math.random()*context.add4 + context.add3)]
            const [newArg1, newArg2] = tmp1 >= tmp2 ? [tmp1, tmp2] : [tmp2, tmp1]
            setArg1(newArg1)
            setArg2(newArg2)
            setCheckAns(newArg1 - newArg2)
        }
        // Multiplication
        else if(newOpp == 2){
            const [tmp1, tmp2] = [Math.floor(Math.random()*context.mul2 + context.mul1), Math.floor(Math.random()*context.mul4 + context.mul3)]
            setArg1(tmp1)
            setArg2(tmp2)
            setCheckAns(tmp1 * tmp2)
        }
        // Division
        else {
            const [tmp1, tmp2] = [Math.floor(Math.random()*context.mul4 +context.mul3), Math.floor(Math.random()*context.mul2 +context.mul1)]
            setArg1(tmp1 * tmp2)
            setArg2(tmp2)
            setCheckAns(tmp1)
        }
    }

    const enterAnswer = (val) => {
        tmp = answer + val
        setAnswer(tmp)
        console.log(Number.parseInt(tmp), checkAns)
        if(Number.parseInt(tmp) == checkAns){
            setScore(score + 1)
            updateEquation()
            setAnswer('')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scoreHeader}>
                <Text style={styles.scoreHeaderText}>{time}</Text>
                <Text style={styles.scoreHeaderText}>{score}</Text>
            </View>

            <View style={styles.equationHeader}>
                <Text style={styles.equationHeaderText}>{`${arg1} ${oppsList[opp]} ${arg2}`}</Text>
                <Text style={styles.equationHeaderText}>{answer}</Text>
            </View>

            <View style={styles.keyPad}>
                <View style={styles.keyPadRow}>
                    <TouchableOpacity onPress={() => enterAnswer(1)} style={styles.keyPadEntry}>
                        <Text style={{fontSize:48}}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => enterAnswer(2)} style={styles.keyPadEntry}>
                        <Text style={{fontSize:48}}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => enterAnswer(3)} style={styles.keyPadEntry}>
                        <Text style={{fontSize:48}}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.keyPadRow}>
                <TouchableOpacity onPress={() => enterAnswer(4)} style={styles.keyPadEntry}>
                        <Text style={{fontSize:48}}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => enterAnswer(5)} style={styles.keyPadEntry}>
                        <Text style={{fontSize:48}}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => enterAnswer(6)} style={styles.keyPadEntry}>
                        <Text style={{fontSize:48}}>6</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.keyPadRow}>
                <TouchableOpacity onPress={() => enterAnswer(7)} style={styles.keyPadEntry}>
                        <Text style={{fontSize:48}}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => enterAnswer(8)} style={styles.keyPadEntry}>
                        <Text style={{fontSize:48}}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => enterAnswer(9)} style={styles.keyPadEntry}>
                        <Text style={{fontSize:48}}>9</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.keyPadRow}>
                <TouchableOpacity onPress={() => enterAnswer(0)} style={styles.keyPadEntry}>
                        <Text style={{fontSize:48}}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyPadEntry}>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        let tmp = answer
                        setAnswer(tmp.slice(0, tmp.length - 1))
                    }} style={styles.keyPadEntry}>
                        <Text style={{fontSize:48}}>del</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    scoreHeader:{
        flex: 1/16,
        flexDirection:'row',
        justifyContent:'center'
    },
    scoreHeaderText:{
        flex:1,
        textAlign:'center',
        fontSize: 24
    },
    equationHeader:{
        flex: 1/8,
        flexDirection:'row',
        justifyContent:'center'
    },
    equationHeaderText:{
        flex:1,
        textAlign:'center',
        fontSize: 36
    },
    keyPad:{
        flex: 1,
        backgroundColor:'grey'
    },
    keyPadRow:{
        flex:1,
        flexDirection: 'row'
    },
    keyPadEntry:{
        flex:1,
        justifyContent:'center',
        borderWidth:1,
        alignItems:'center',
    }
});
 
export default PlayScreen;
 