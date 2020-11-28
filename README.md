# Complete React Native Course

### requirements

1. Node LTS version
2. npm install

### How to run ?

1. After npm install run 'npm start' command.
2. In the browser window select tunnel or LAN .
3. Install Expo App in your physical device.
4. Scan QR code with your physical device camera.

### React components

- Every react component files have 4 parts.

  1. Import libraries we need to create a component.
  2. Create a component- a function that returns some JSX.
  3. Create a stylesheet to style our component.
  4. Export the component so we can use it elsewhere in our project.

- React liabrary : React library is all about how different components works together.
- react-native library : it knows to takes some information from those components and use it to actually to show some content on the mobile device.
- {} braces indicate that we only import that specific items/pieces only imported from the library
- CreateStaclNavigator: StackNavigator is a little object that decides what content we're going to show on the screen at any given point of time.
- InitialRouteName : it shows that which element shows first.

  - Text : A primitive react element.
  - View,Image,Buttons are the similer primitive elements.
  - View : for general grouping of elements.
  - image : showing an image.
  - Button : show a button the user can press.

- appNavigator : Its a tool from a library called 'React Navigation' That is used to show different sceen to the user.

## rules of JSX
- We can assumble different JSX elements like normal HTML.
- We can configure different JSX elements using 'props'.
- We can reffer to JS variables inside of a JSX block by using curley braces.
- We can assign JSX elements to a varibale. then show that variable inside of a JSX block.

- we cannot show javascript object inside as jsx component's value.
   
- If you need to return multiple line JSX block (or multiple elements) then you can choose 2 ways:
    1. Use ().
    2. Put Opening tag in the same line of return keyword.

### FlatList elements
 - Turns an array into a list of elements
 - It have two properties(props): data and renderItem
 - You must provide key for each items in the list

 - 2 different ways for provide key property:
    i). Put a 'key' property to the array item objects.({name:"Sara",key:"1"}).
        Key must be in string type and it must me unique.
    ii). Add a property named keyExtractor.
        keyExtractor = {(friend)=>{friend.name}}  . you can use a unique value field as key in this method
- Horizontal property helps to scroll horizontally.
- showsHorizontalScrollIndicator={false}  helps to avoid scollbar at the bottom of the app.
- marginVertical for vertical padding or gap between items.
- marginHorizontal for vertical padding or gap between items.

## Buttons with react native
- 2 different ways to show button to user are: Button,TouchableOpacity
- Button : Very simple component for showing a button and detecting press 
- TouchableOpacity : Highly customizable component that can detect a press on just about any kind of elements.

- navigate: natigate is a function that we can used to change the content that visible on the screen of our device(props.navigation.navigate)

# State in components
- Props : System to pass data from a parent to child.
- State : System to track a piece  of data that will change  over time. If that data changes , Our app will rerender.
- we can use state in our app by using 'useState'.
- import React,{useState} from 'react';

- How to use ?
     const [counter,setCounter] = useState(defaultValue);
      - In the above example counter is the storing variable and setCounter is the counter updating function.
      - setCounter helps to update value of the counter variable.
        setCounter(5) then, value of the counter is become 5.

- We are using function based state in functional component.
- We never directly modify a state variable.Use only setter function.
- We can naming anything as our wish for the variables. But remaind, the order is very important.
- We can track any kind of data that changes over time.
- When a component is rendered, all of its childrens get rerendered too.
- A state variable can  be passed  to a child component ! at that point , the state  variable is now being used as props.

### Introduce reducer
- Reducer is a fancy name. Reducer is a function that manages changes to an object.
- Function that get called with Two objects.
    - Object #1 / Argument #1
        * Object that has all of our state in it.
    - Object #2 /Argument #2 
        * Object that describes the update we want to make.
        * Argument #2 used for to decide how to change Argument #1.
    - We never change Argument #1 directly.
    - Reducer always return a value to be used as Argument #1.
- import React,{useReducer} from 'react';

### TextInput in react native
- TextInput is helps to take inout from the user .
- We need to style TextInput component.
- must needed styles are: autoCapitalize,autoCorrect.

### Layout with react native
- Box object model, FlexBox, Position
    1. Box object model
    - Height,width,margin,padding,spaces.
    - Use this to affect the positioning of a single element.
    - margin,marginVertical,marginHorizontal,padding,paddingVertical,PaddingHorizontal,BorderWidth
    
    2. Flexbox 
    - Arrage some number of sibling elements inside a parent element.
    - Use this to position mutliple elements with a common parent element.
       * Parent flex properties
            - alignItems : On parent element default value for alignItems is 'stretch', other values are flex-start ,center,flex-end.
            - FlexDirection : column,row 
            - JustifyContent : flex-start(default),center,flex-end,space-between,space-around
        * Child flex properties
            - alignSelf : stretch,flex-end,center,flex-start
            - flex - flex the child elements (with ratio ,eg if 3 elements  we can use value of flex as 4:4:2 for two equal size child and one the half child)

    3. Position
    - How a single element gets laid out inside of a parent element.
    - It is override box object model and flexbox.
    - Default value of position property is relative.
    - relative,absolute,
    - top,left,bottom,right properties helps to positioning. 
    - absoluteFillObject
        - ...styleSheet.absoluteFillObject


## Project generation
- We have two different options for new project generations
    * expo-cli
        - Add in a ton of default config to use features common in apps,like icons,video,better camera use, etc..
    * react-native-cli
        - Default CLI to generate a project . require a lot of extra work to add in common features.
- To create new project
    'npx expo-cli init food'

### 3 Types of navigators
- Bottom navigator,drower navigator and the stack navigator.
- How to install ?
    'npm install react-navigation'
    