Setup for MUi
Setting up a React Environment
npx create-react-app my-material-ui

cd my-react-app
npm start
localhost:3000

Setup for MUi
-Install Material UI, the world's most popular React UI framework.

npm install @mui/material @emotion/react @emotion/styled
-With styled-components
npm install @mui/material @mui/styled-engine-sc styled-components
-Icons
npm install @mui/icons-material
----------------------------------------
Button

<Button variant="outlined">Hello world</Button>
variant="outlined"
variant="contained"

Material UI components
Button
Buttons allow users to take actions, and make choices, with a single tap.

@mui/lab package
npm install @mui/lab

In Material-UI, Stack is a layout component used to manage the spacing between elements in a vertical or horizontal direction.
The Stack component is part of the @mui/material

Key Features of Stack:
Direction: You can stack elements vertically or horizontally.
Spacing: You can set the spacing between each child element.
Alignment: You can align children along the main axis or the cross axis.

 <Stack spacing={2} direction="row">
      <Button variant="contained">Button 1</Button>
      <Button variant="contained">Button 2</Button>
      <Button variant="contained">Button 3</Button>
    </Stack>
In Material-UI, the variant prop is used to define the style or appearance of a component. Different components support different variants, allowing you to easily apply a set of predefined styles to achieve the desired look and feel. Here are some common components and their variants:

Button
The Button component supports the following variants:

text: The default variant, typically a simple text button without any background.
contained: A button with a background color and elevation (shadow).
outlined: A button with an outlined border but a transparent background.

Typography

npm install @fontsource/roboto

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

Navigation Drawer 

https://mui.com/material-ui/react-drawer/
Mini variant drawer

------------------------------------------

Charts - Getting Started

add the MUI X Charts to your project
npm install @mui/x-charts
npm install @mui/material @emotion/react @emotion/styled

Style engine

npm install @mui/styled-engine-sc styled-components
