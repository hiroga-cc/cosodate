import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'

const InfoItem = (props) => {

  const {title, author, date, text, link} = props.info;

  return (
    <TouchableHighlight underlayColor={'#f3f3f2'} onPress = {()=>Actions.info({ info: props.info })}>
      <View style={styles.rowContainer}>

          <View style={styles.rowDetailsContainer}>
              <Text style={styles.rowTitle}>
                  {title}
              </Text>
              <Text style={styles.rowDetailsLine}>
                  Posted by {author} | {date}
              </Text>
              <View style={styles.separator}/>
          </View>

      </View>
    </TouchableHighlight>
  );

};

var styles = {
  rowContainer:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
  },
  rowCount: {
      fontSize: 20,
      textAlign: 'right',
      color: 'gray',
      margin: 10,
      marginLeft: 15,
  },
  rowDetailsContainer: {
      flex: 1,
  },
  rowTitle: {
      fontSize: 15,
      textAlign: 'left',
      marginTop: 10,
      marginBottom: 4,
      marginRight: 10,
      color: '#FF6600'
  },
  rowDetailsLine: {
      fontSize: 12,
      marginBottom: 10,
      color: 'gray',
  },
  separator: {
      height: 1,
      backgroundColor: '#CCCCCC'
  }
};

export default InfoItem;
