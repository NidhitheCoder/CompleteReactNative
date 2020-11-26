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