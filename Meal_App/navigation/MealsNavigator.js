import React from 'react';
import { Platform } from 'react-native'
import { createStackNavigator  } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from '../Screens/CategoriesScreen'
import FavoritesScreen from '../Screens/FavoritesScreen'
import CategoryMealsScreen from '../Screens/CategoryMealsScreen'
import MealDetailScreen from '../Screens/MealDetailScreen'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons';


const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeal: {
        screen: CategoryMealsScreen 
    },
    MealDetail: {
        screen: MealDetailScreen
    }
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

const MealsFavNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator, 
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            }
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            }
        }
    }
},{
    tabBarOptions: {
        activeTintColor: Colors.primaryColor
    }
})

export default createAppContainer(MealsFavNavigator);