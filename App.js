import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import Button from './src/components/Button';
import Login from './src/screen/Login/Login';
import InvestmentsForm from '../BMI_App/src/screen/Login/InvestmentsForm';
import AddResiaddress from '../BMI_App/src/screen/Login/AddResiaddress';
import { colors } from './src/const/theme';
import AddBank from './src/screen/Login/AddBank';
import AddBeneficiary from './src/screen/Login/AddBeneficiary';
import Terms from './src/screen/Login/Terms';
import Approval from './src/screen/Login/Approval';
import Otp from './src/screen/Login/Otp';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Varification from './src/screen/Login/Varification';
import Reset from './src/screen/Login/Reset';
import Home from './src/screen/Home/Home';
import InvestedCompanies from './src/screen/Companies/InvestedCompanies';
import HeadCard from './src/screen/Companies/HeadCard/HeadCard';
import Companydet from './src/screen/Companies/Companydet';
import Sipdet from './src/screen/Companies/Sipdet';
import Zakath from './src/screen/Companies/Zakath';
import Expensedet from './src/screen/Companies/Expensedet';
import Investmentdet from './src/screen/Companies/Investmentdet';
import BmiSummary from './src/screen/Companies/BmiSummary';
import Profitdet from './src/screen/Companies/Profitdet';
import EachCompany from './src/screen/Companies/EachCompany';
import AccountSummary from './src/screen/Companies/AccountSummary';
import NewPassword from './src/screen/Login/NewPassword';
import Notification from './src/screen/Notification';
import Profile from './src/screen/Home/Profile';
import Splashscreen from './src/screen/Splash/Splashscreen';


const Stack = createNativeStackNavigator();


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};

function App() {
  return (

    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Splashscreen">
       
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="InvestmentsForm" component={InvestmentsForm} />
        <Stack.Screen name="AddResiaddress" component={AddResiaddress} />
        <Stack.Screen name="AddBank" component={AddBank} />
        <Stack.Screen name="AddBeneficiary" component={AddBeneficiary} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Approval" component={Approval} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Varification" component={Varification} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HeadCard" component={HeadCard} />
        <Stack.Screen name="InvestedCompanies" component={InvestedCompanies} />
        <Stack.Screen name="Companydet" component={Companydet} />
        <Stack.Screen name="Sipdet" component={Sipdet} />
        <Stack.Screen name="Zakath" component={Zakath} />
        <Stack.Screen name="Expensedet" component={Expensedet} />
        <Stack.Screen name="Investmentdet" component={Investmentdet} />
        <Stack.Screen name="BmiSummary" component={BmiSummary} />
        <Stack.Screen name="Profitdet" component={Profitdet} />
        <Stack.Screen name="EachCompany" component={EachCompany} />
        <Stack.Screen name="AccountSummary" component={AccountSummary} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Profile" component={Profile} />    
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App