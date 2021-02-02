# Handshake CSS Framework Project 2021
Last update February 1, 2021

## Purpose
This project is a ground up rebuild of the Handshake UI Framework that includes SASS modules from: 

* Selected components of Bootstrap 4.5 
* Kendo Bootstrap Theme SASS files

#### References
Your best references for this framework are: 
* [Bootstrap 4 documenation site](https://getbootstrap.com/docs/4.5/layout/overview/).  
* [Kendo UI for jQuery Styles and Appearance](https://docs.telerik.com/kendo-ui/styles-and-layout/sass-themes)

# Table of Contents 
* [Usage](#usage) 
* [Modules](#Modules)
  * [User Profile Cards](#user-profile-cards)
  * [Kendo Tab Styles](#kendo-tab-styles)
  * [HS Layouts](#hs-layouts)


## Usage
To use this repository to create a new/custom client build 

#### Clone this repository to a local folder 
All you need is the GitHub project folders and files.  You are not required to download, install or use Git unless you intend to check files back into this repository. 

If you do plan on updating this repository, make sure that you understand how to fork the project and create a pull request for the updates. 

#### Setup your machine to support a node.js/gulp build workflow 
Install and confirure node.js/gulp if you don't already have it on your build machine:

* Install [node.js](https://nodejs.org/en)
* Launch node.js command prompt, go to local work folder (the local drive/folder where you cloned this repository)
* Run **npm install**:  this will read the packgage.json file and get all the dependencies, including current bootstrap 4 and kendo packages.  These files will be downloaded to node_modules in the working directory.  You never need to upload or transfer this folder. Which is good - while not large it contains almost 10,000 files.
* Run **npm install --global gulp**:  this enables gulp to run directly from the cmd line as a process
* Make your required changes, the run **gulp build** to build the css package, which will create/update 2 files in ./release folder 

```
npm install
npm --global gulp

gulp build | watch
```
> If you get this error when running npm install  `npm ERR! errono SELF_SIGNED_CERT_IN_CHAIN` then try the command below
```
npm config set strict-ssl false
npm install
```

## Modules 
Description of modules 

### User Profile Cards 
User Profile Cards provide a number of options for displaying user information.  It is both responsive and declarative.  Meaning, at a "phone" level breakpoint, it will automatically display a compressed view, or your may choose to display the compressed mobile view even on a large screen. 

Them html markup should contain 3-4 areas:

1.  Photo section - designated by the class 'hs-upc-photo', optional if hs-upc-nophoto class is used
2.  Header - designated by the class 'hs-upc-header'
3.  Details - designated by the class 'hs-upc-details'
4.  Footer - designated by the class 'hs-upc-footer'

Sample markup
```html
<div class="hs-upc">
    <div class="hs-upc-photo">
        <img alt="" src="https://thispersondoesnotexist.com/image" />
    </div>
    <div class="hs-upc-header hs-upc-shade">
        <div class="hs-upc-title">Cameron Simmons, Partner</div>
        <div class="hs-upc-subtitle">Intellectual Property, Chicago</div>
    </div>
    <div class="hs-upc-details">
        <div class="hs-upc-h-group">
            <div>1919 North Main Street, Suite 6000</div>
            <div>Chicago IL 60606</div>
            <div>cameron.simmons@jlalaw.com</div>
        </div>
        <div class="hs-upc-v-group k-mb-2">
            <span class="p-office">512.555.1212(o)</span>
            <span class="p-mobile">512.555.1212(m)</span>
            <span class="p-fax">512.555.1212(f)</span>
        </div>
    </div>
    <div class="hs-upc-footer hs-upc-shade-primary">
        <div class="hs-upc-v-group">
            <span class="k-button k-flat">E-Mail</span>
            <span class="k-button k-flat">Bio Page</span>
            <span class="k-button k-flat">LinkedIn</span>
        </div>
    </div>
</div>
````

Using CSS in your skin, you can also dramatically alter the layout of the components.  For example, this css would create a layout with the header on top, and the photo between the deatils and footer section.  

```css
.hs-upc.hs-upc.my-custom-upc {
    grid-template-areas : "header header header photo" "details details details footer";
    grid-template-columns: 1fr 1fr 1fr 25%
}
```

#### Helper Classes for hs-upc 
In addition to the section classes, the following css can alter the view for specific use-cases. The following class names are pre-fixed by hs-upc- 

*   **shade or shade-[primary | secondary | dark | light]**:  sets the background color of a section.  
*   **h-group, v-group**:  display the content in the section as either a vertical or horizontal list 
*   **stacked**:  sets all sections in a single vertical grid 
*   **compact**:  set the photo and header on top, and puts details and footer stacked beneath, this is also the layout that will be used on small viewport 
*   **title, subtitle** - child elements of the header section, will expand font size and spacing on medium and greater viewports.

> Note: except for **hs-upc-photo**, the content contained in a particular section is arbitrary.  If your use-case doesn't require a section, like a footer, then supply a grid-template-areas rule that leaves that section out.  The photo section expect a photo, if you do not have/need one, then add hs-upc-nophoto class to the root element.

### User Profile Cards
##### Standard
![standardview](src/images/upc-standard-view.jpg)
##### Mobile 
![mobile](src/images/upc-mobile-view.jpg)
##### Stacked 
![mobile](src/images/upc-stacked-view.jpg) 

### Kendo Tab Styles 
The following classes are included to support useful customizations to kendo tabs that use appropriate bootstrap and kendo variables. They are each pre-fixed by hs-tabstrip- 


* **uppercase**: Sets the text of the tabs to be in Uppercase.
* **full**:  Tabs will use the entire width of the parent container. Borders are removed, except for the bottom border of the active tab.
* **bicolor**:  Sets the Active Tab to a background of $tabcolor(a), and all inactive tabs to $tabcolor(b). Text color is set using a function to determine optimim color based on the background-color. A slight box-shadow is set on the active tab.
* **fullcolor**:  Sets the background color of each tab to $tabcolor(a..e), then repeats. The opacticy of inactive tabs is $tabcolor(opacity), while the opacity for active and onhover tabs is 1 A slight box-shadow is set on the active tab. 
* **rounded**:  Set a radius to the top left/right corners. Radius is defined in the $tabcolor(radius)
* **radio**:  Renders the tabs as a set of radio control buttons
* **shaded**:  Tabs will use full width of the parent container. Active tab will use $tabcolor(a) as the background. Hover backgroud will be $tabcolor(b).
* **flat**:  Removes any box-shadow that may be set by another class such as hs-tabstrip-fullcolor.
* **flush**:  Removes padding and border of child elements such as a HTML5Grid or a list-group inside an HTML5ListView when it is a direct deciendent to the active tab container

> **TIPS** Many of these classes may be combined like fullwidth & fullcolor, but not all will make sense like fullcolor and bicolor. For consistency in your site, you may elect to use and Application Option variable to define on or more class name that may be used in the skin.
 
```xml
<html5tabstrip class="{tabstrip}" ...>
```
where tabstrip = "hs-tabstrip-fullwidth hs-tabstrip-uppercase" in the Application Options Table

##### Tabstrip Sample
![tabstrip](src/images/tabstrip-view1.jpg)  

### HS Layouts
The is framework provides a number of layout pre-defined layout options.  They are built using CSS Display Grids.  The Bootstrap Reponsive Grid Framework is not included in this build, and every effort has been made with these layout to mitigate that. 

All layouts are responsive, in that on mobile devices that will appear as stacked elements. 

CSS Grids are the most straighforward way to construct page layouts, if you have a complex custom use case it is not difficult to build that in the skin with approriate CSS.  [this is an excellent resource](https://css-tricks.com/snippets/css/complete-guide-grid/) if you are just starting with CSS grid.