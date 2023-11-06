# Organization of CSS

This project follows the 7-1 pattern for organizing SCSS files which are as follows:

- **App**— The main folder for the project.

*- *Abstract—The** Abstract partial, contains all the variables, mixings, and similar components.

- **Core** —Contains typography, resets, and boilerplate code, used across the whole website.

- **Components** — Contains styles for all components that are to be created for one website, such as buttons, tabs and modals.

- **Layout** — Contains files required to define the layout of the site such as the header and footer.

- **Pages—** Contains styles for each specific page.

- **Vendors** — This optional folder is intended for bootstrap frameworks, if any, that are being used for the project.

Create an all.scss file for every folder that contains all the imports for that specific folder.
