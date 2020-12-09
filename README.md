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

    ```
        'npx expo-cli init food'
        or 
        'npx expo-cli init food --npm' // helps to avoid mix with yarn and npm
     ```

### 3 Types of navigators
- Bottom navigator,drower navigator and the stack navigator.
- How to install ?

    ```
        'npm install react-navigation' 
    ```

- for install Glesure
    npm install react-native-gesture-handler

- npm i react-navigation-stack   //or yarn add react-navigation-stack


### Axios and fetch
- Axios and Fetch are the two ways main to make network requests in react.
    1. Fetch 
        - Fetch is a buildin function  for making network requests. Error handiling is a little bit wierd.
        - Require us to write lots of wrapper code to make it work sensibly.
    2. Axios
        - Axios is the separate library for making requests.
        - Axios is easy to use and sensible defaults.
        - It increases our app size.

### useEffect
- UseEffect is a hook or essentially a function that allows us to run some snippet od code just one time when our component is first rendered to the screen.

## Props

- Communicat information  from a parent directly down a child.
- Easy to setup.
- To communicate data down multiple layers, we have to write a lots of code.

## Context

- Context is using for moving information from a parent to some nested child.
- Complied to setup. lots of special terms.
- Easy to communicate data from a parent to a super  nested child.

## navigation.pop
- The pop function is essentially pops off the current view off of a stack of current views  that the user is looking at.

## json-server with ngrok (connect json server with outside our local mechine)
- Create a directory
- Run 'npm init' for get package.json file.
- Run 'npm install json-server ngrok' for node modules and package-lock.json files.
- And inside the directory create a file with the name 'db.json'.
- add content to the db.json
    - example :
        {
            "blogposts":[]
        }
    - In this example I created an object key in the name of blogposts and add  an empty array as the value.This key is the endpoint for the server fetching url.
- In package.json, change script key as :

    - "db":"json-server -w db.json"
      "tunnel" : "ngrok http 3000"
      
- run with this commands in directory terminal:

    - 'npm run db' - Iinside the world.
    - 'npm run tunnel' - For outside the world.

## Express Server & API
- Create a Directory and run 'npm init -y' command for generate package.json.
- Run 'npm install bcrypt express jsonwebtoken mongoose nodemon' for installing dependencies.
- Create a folder src and create root file 'index.js'.
    example content in index.js:
    ```
        const express = require('express');
        const app = express();

        app.get('/',(req,res)=>{
            res.send("Hii there");
        });

        app.listen(3000,()=>{
            console.log("Listening on port 3000");
        });

    ```
- To run 'node src/index.js'.
- Mongoose is a library for helping to working express and mongodb together.

## Mongodb setup
- cloud.mongodb.com : Helps to free hosted MongoDB instance.
- in package .json change the script section to 
   '"dev":"nodemon src/index.js"'
- 'npm run dev'




### JSON WEB TOKENS
- A string that carries  some identifying information.
- JWT is created using a special    key that only our server knows.
- It is not possible to create  a new JWT or change  info  in an existing one  without that key.

### Bcrypt
- Bcrypt for hashing algorithm.
- Raibow table attack : It is a type of hacking wherein the perpetrator tries to use a rainbow hash table  to crack the passwords stored in a database system.
- Salting : A cryptographic  salt is made up of random bits added to each password instance before its hashing.

### Navigators
    1. Stack navigator : Classic back-and-forth between different nested screens.
    2. Bottom Tab Navigator : Shows a tab bar at  the bottom with Buttons to navigate between different screens.
    3. Switch navigator : Abrupt, 100% cub between different screens.
    4. Drower navigator : Shows a fly-out menu from one side of the device.

## react-native-elements Library
- How to install ?

    ```
    npm install react-native-elements
    ```
- It have pre-build set of common components.
- Docs and reference: https://reactnativeelements.com/

## Async storage
- Async storage is a simple,asyncronous, unencrypted by default module that allows to you persist data offline in react native apps.The persistance of data is done in a key-value storage system.
- setItem(key,value) : storage information on the user's device.
- getItem(key) : Retrives an item that has been stored.
- removeItem(key) : remove some stored information.

    - let user = await asyncStorage.getItem('user);
     let parsedUser = JSON.parse(user);
     alert(parserUser.email);

## NavigationEvents
- NavigitonEvents is a react components , we can show its inside of our components.
- It does not display anything on the screen forever, instead it optionally choose to pass couple of callback functions as props.
- NavigationEvents is to call them automatically anytime we render or navigte to this screen.
- onWillFocus : It will be called anytime that we are about to navigate to this  screen.
- onDidFocus : This will be any time called  anytime that we successfully complete the navigation over the screen.
- onWillBlur :It will be caleld anytime that we are about to navigate away from the specific screen.
- onDidBlur : As soon as the transition complete.

## Expo-locations
- Location service provided by the 'expo-location' library.
- How to install ?

    ```

    ```

- Before tracking users location, we need to ask for permission.
- Two forms of location tracking : foreground  and background.
- We need to extramely aware of when  we are tracking location- it consumes battery power.