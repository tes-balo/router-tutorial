# Organization best practices

This README contains a few best practices for organizing our app. Please go through it:

- Put Private Services in Components

- Configure path aliases in tsconfig.json.
- 
- 
- Bundle Code Into Modules
Angular modules are an implementation of the single responsibility principle. In Angular, each module represents a discrete and independent function.

Angular provides several types of modules to specify how to logically group or organize them.

Core
A core module is a NgModule that instantiates the app and loads core functions that will be used globally across the application.

Thus any singleton service should be implemented in a core module. A header, footer, or navigation bar are examples of this type of module.

All services that have to have one and only one instance per application (singleton services) should be implemented here. Examples include an authentication service or user service.

Feature
A feature module represents code that makes up the features of your app. In an online shopping app, for example, you might have a feature module for adding items to a cart and a separate module for making payments.

Shared
Shared modules are made of functions that can be combined to create feature modules. An example is a search function that could be used across multiple features.

Structuring the code this way makes things easier to locate and increases opportunities for reusability of code.

Ensure Separation of Concerns in Angular Code Reviews
Separation of concerns is a design principle for separating an application into distinct blocks so that each block follows the single responsibility principle.

The overall goal is to create a well-organized project that is maintainable, readable, and reusable.

To accomplish this, create separate modules for each set of logic within the application.

|-- modules

| |-- marketing

| | |-- marketing.spec|module|component|scss||routing.module|.ts

| |-- sales

| | |-- sales.spec|module|component|scss|routing.module|.ts

Lazy Load Modules
Lazy loading reduces the initial load time of the application and minimizes bandwidth. Avoid loading all modules at once. Only the feature module should be loaded synchronously.

The additional modules should only be loaded once the user requests a resource relying on that module.


- Implement good SEO practices via a robots.txt file and follow the guide in the last link below
- Occasionaly use a website audit tool to test your websites vitals and performance
- Ensure that the web app prioritizes accessibility (Inspect all tags, images, keyboard navigation etc)
@credit: adservio.io

@link: [adservio - How to Organize Angular Project](https://www.adservio.fr/post/how-to-organize-angular-project-top-5-tips)

@link: [Angular Code Review Checklist](https://www.adservio.fr/post/angular-code-review-checklist)

@credit: MICHELLE OFIWE via [semrush.blog](semrush.com/blog/url-parameters/) 

