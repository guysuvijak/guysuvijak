## :globe_with_meridians: React Native Coding Style (TypeScript)
This folder serves as an example of my coding style using React Native (TypeScript).</br>
It will demonstrate how to create a Hello Screen that fetches data from the <code>https://api.publicapis.org/entries</code> API and displays it on the screen using FlatList.</br>
And the code has been divided into 3 separate files for clarity and ease of maintenance, as deemed appropriate. (Screen, Interface, StyleSheet)

## :computer: Project done with React Native

**1.TGSG** [(Visit on Play Store)](https://play.google.com/store/apps/details?id=com.tgsgmobileapp&hl=en_US)</br>
description: I am the sole developer of this application (Internal Application)</br>
UX/UI Design, Frontend, Backend (Create API with ExpressJS), Backend (Database MSSQL & Create query with Stored Procedures), Publish to Play Store & App Store</br>
This app is for internal use within the TGSG organization and includes the following systems:
 - Calendar-based work scheduling
 - Order Tracking
 - Utility bill recording (water and electricity expenses)
 - View Report PDF (Data from Reportserver)
 - Integration with Outlook email
 - Database connection to MSSQL
 - CRUD operations on the database using APIs
 - User access rights management system
 - Multi-language support for the application (Thai, English, Burmese, Lao)
 - 2 Themes (Light, Dark)
 - Version update notification system
 - App maintenance and update notification system
<p>(The mentioned system is only a part of the entire system.)</p>

## :green_book: React Native Coding Style (Best Practice)
◈ **Separate file** = <img src="https://github.com/vscode-icons/vscode-icons/blob/master/icons/file_type_reactts.svg" alt="tsxicon" width="15" height="15"/> Screen file (index.tsx) / <img src="https://github.com/vscode-icons/vscode-icons/blob/master/icons/file_type_typescriptdef.svg" alt="dtsicon" width="15" height="15"/> Interface file (types.d.ts) / <img src="https://github.com/vscode-icons/vscode-icons/blob/master/icons/file_type_js.svg" alt="javascripticon" width="15" height="15"/> StyleSheet file (styles.js)</br>
◈ **camelCase** = variable name, function name, interface member, file name</br>
◈ **PascalCase** = class name, screen name, interface name, type name, sub folder name (last folder)</br>
◈ **kebab-case** = assets file name</br>
┕ ex: example-picture.png, loading-circle-animation.json</br>
◈ **lowercase** = folder name (main folder)</br>
◈ **Indent Using Spaces** = 4</br>

◈ Declare variable **"const"** only</br>
◈ Declare variable **"let"** when use with **"for loop" & "switch case"**</br>
◈ Use **'Single Quote'** only;</br>
◈ Always set the name of the Interface variable after the word **"Props"**.</br>
┕ ex: ExampleProps</br>
◈ Always set the name of the Extend Interface variable start the word **"Base"**.</br>
┕ ex: BaseExample // interface ExampleProps extends BaseExample</br>
◈ **Pure StyleSheet** only in React Native (I'm a pure style expert, but not as good at CSS as Tailwind CSS.)

<code>**Folder Structure (Example)**</code></br>
-└<img src="https://github.com/vscode-icons/vscode-icons/blob/master/icons/folder_type_component_opened.svg" alt="foldericon" width="15" height="15"/> **ReactNative**</br>
---├<img src="https://github.com/vscode-icons/vscode-icons/blob/master/icons/file_type_reactts.svg" alt="tsxicon" width="15" height="15"/> index.tsx</br>
---├<img src="https://github.com/vscode-icons/vscode-icons/blob/master/icons/file_type_typescriptdef.svg" alt="dtsicon" width="15" height="15"/> types.d.ts</br>
---└<img src="https://github.com/vscode-icons/vscode-icons/blob/master/icons/file_type_js.svg" alt="javascripticon" width="15" height="15"/> helloStyles.js
