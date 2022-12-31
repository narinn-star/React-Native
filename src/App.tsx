/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styled from 'styled-components/native';

const ScrollView = styled.ScrollView`
  background-color: ${Colors.lighter};
`;

const Body = styled.View`
  background-color: ${Colors.white};
`;

const SectionContainer = styled.View`
  margin-top: 32px;
  padding: 24px;
`;

const SectionDescription = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.dark};
`;

const HighLight = styled.Text`
  font-weight: 700;
`;

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Body>
            <SectionContainer>
              <SectionDescription>Step One</SectionDescription>
              <SectionDescription>
                Edit <HighLight>App.js</HighLight> to change this screen and then come back to see
                your edits.
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionDescription>See Your Changes</SectionDescription>
              <SectionDescription>
                <ReloadInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionDescription>Debug</SectionDescription>
              <SectionDescription>
                <DebugInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionDescription>Learn More</SectionDescription>
              <SectionDescription>Read the docs to discover what to do next:</SectionDescription>
            </SectionContainer>
            <LearnMoreLinks />
          </Body>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
