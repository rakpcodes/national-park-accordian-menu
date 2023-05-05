# National Parks Accordion Coding Challenge

## Description

The goal of this coding challenege was to create an accordion style menu that could expand and collapse individual menu items 
along with an added feature to expand and collapse all menu items by clicking a separate "Expand/Collapse All" button. The button also needs to 
detect if all the menu items are opened individually, and if so, the text within the button should read "Collapse All" and if 
only some are opened to still read "Expand All".

## Project Wins

Creating the functionallity for the Expand/Collapse All to expand all menus when closed and collapse all menus when opened with the button was a success.
Creating the 'opening drawer' animation by changing the height of the text area directly when a menu item is opened was also a hurdle I'm happy to have overcome.

## Project Challenges

Detecting when all menu items were opened manually and updating the text within the Expand/Collapse All button proved to be a challenege I was unable to overcome.
I had attempted to try and target each indivial menu item to determine if an 'active' class was available but could not find an appropriate method or solution to do so 
within the given time frame.

I was also unable to complete the full functionallity of the Expand/Collapse button because of this. At the moment, when all menu items are closed, Expand All 
will open them and when they are all opened in this way, Collapse All will close them all and the text within the button updates accordingly. 
However, if some menu items are open and Expand All is clicked, it will open menus that are closed and close menus that are open. 

Will be looking to fix this issue moving forward! 

## Accessibilty Choices

I decided to make the rotating arrow in each park heading a <button> element for added accessibilty. 
Headers can be clicked on regularly and accessed using assistive technology to expand the menus individually. 
The decision to make the arrows a <button> element was to allow those that might be using a keyboard only to still access and open the menus.
