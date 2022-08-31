import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

export default class App extends Component { 
  render(){
    return(
      <View>
        <View 
          style={{ width:200 , height:100, marginTop:80, marginLeft:80}}>
          <Button 
            title="Charles Babbage"  
            color = "red"
             onPress={()=> alert('Charles Babbage, born to a wealthy London family in 1791, was the brain behind the idea, and is famous for his work developing plans for two different computers.')}//add code here to show alert box for The father of computing.
            />

        </View>
        
        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mahatma Gandhi"  
            color = "blue"
              onPress={()=> alert('Mahatma Gandhis greatest accomplishment was his life-long fight for the independence of India. His dream for his countrys independence finally became reality on August 15, 1947.')}//add code here to show alert box for The father of nation
            />

        </View>

        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Nelson Mandela"  
            color = "purple"
                onPress={()=> alert('Mandela won the Nobel Prize for Peace in 1993, along with South Africas president at the time, F.W. de Klerk, for having led the transition from apartheid to a multiracial democracy. He is also known for being the first black president of South Africa, serving from 1994 to 1999.')}        //add code here to show alert box for The first black president of South Africa.
/>
        </View>
        <View 
          style={{ width:200 , height:100, marginTop:20, marginLeft:80}}>
          <Button 
            title="Mother Teresa"  
            color = "green"
            onPress={()=> alert('During her lifetime Mother Teresa became famous as the Catholic nun who dedicated her life to caring for the destitute and dying in the slums of Calcutta - now known as Kolkata.')}//add code here to show alert box for Mother Teresa button
            
             />
        </View>
      </View>
    )
  }
}