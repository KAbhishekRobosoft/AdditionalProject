import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView,TouchableOpacity} from 'react-native';
import axios from 'axios';
import uuid from 'react-native-uuid';


const ImageDisplay = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    try {
      const response = await axios.post(
        `https://four-square-three.vercel.app/api/getReviewImage`,
        {
          _id: '63a178a939dec0f0d95c8565',
        },
      );
      setUsers([...users, ...response.data.reviewImage]);
      setIsLoading(false);
    } catch (er) {
      console.log('Error');
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
        flex:1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:"black"
        }}>
        {users.length > 0
          ? users.map(item => {
              return item.image.map(ele => {
                return (
                  <TouchableOpacity key={uuid.v4()}>
                    <View>
                      <Image
                        style={styles.itemImageStyle}
                        source={{uri: 'https' + ele.substring(4)}}
                      />
                    </View>
                  </TouchableOpacity>
                );
              });
            })
          : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  itemImageStyle: {
    width: 120,
    height: 120,
    marginRight:5
  },

  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    color: '#777',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
});

export default ImageDisplay;
