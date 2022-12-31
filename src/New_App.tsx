import React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';

const New_App = () => {
  const [line, setLine] = useState('React-Native 첫 걸음');
  const press = () => {
    return setLine('onPressed!');
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }} onPress={press}>
        {line}
      </Text>
    </View>
  );
};

export default New_App;
