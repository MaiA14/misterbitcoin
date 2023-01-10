# Digital-Bitcoin_Wallet

A digital wallet for holding bitcoins and sending them to contacts, developed in Angular 9. Including route guards, directives, forms and google charts.

![Image of misterbitcoin](https://res.cloudinary.com/dtwqtpteb/image/upload/v1583356877/fkaodetf4wuunr334lx1.png)

If you didn't sign up, this is the time. Only logged in user can see the content of other pages. There is auth guard who checks that.

My home page after I signed up:

![Image of misterbitcoin](https://res.cloudinary.com/dtwqtpteb/image/upload/v1583357124/jyar2liarf7y2tfrp4oq.png)

Bitcoin rate is updated since I am using Ajax to retrieve this data, with HttpClient. According the rate I am calculating the value in bitcoins. Now I can transfer bitcoins to my contacts. Let's see my contacts :)

![Image of misterbitcoin](https://res.cloudinary.com/dtwqtpteb/image/upload/v1583357387/ff2j0cu9xaifd901j7oe.png)

I see I can add contact. Let's add a contact:

![Image of misterbitcoin](
https://res.cloudinary.com/dtwqtpteb/image/upload/v1583357527/umil5onbntaertdeef9g.png)


![Image of misterbitcoin](
https://res.cloudinary.com/dtwqtpteb/image/upload/v1583357606/fwvsiiup3utydsoikhpk.png)

Because I have so many contacts, it's comfortable this app contains search, where I can serach by name, email or phone:

![Image of misterbitcoin](
https://res.cloudinary.com/dtwqtpteb/image/upload/v1583357824/vzcpkttbkzqco0hxiee4.png)

I can alson edit contact details, if in mistake I forgot a char in the email address or else.

Now, let's transfer some bitcoin to my friend Lihi:

![Image of misterbitcoin](https://res.cloudinary.com/dtwqtpteb/image/upload/v1583357982/dnmttpxbatwwxclapamz.png)

As you can see, in Lihi profile, there is new trasnfer by me. In my homepage, the amount of bitcoins also updated according to this transfer.

![Image of misterbitcoin](https://res.cloudinary.com/dtwqtpteb/image/upload/v1583358095/xehbv4o9b6hn5pygx3dx.png)


The app supports various mobile and browsers.


![Image of misterbitcoin](https://i.ibb.co/5GDhSGY/New-Project-9.png)

![Image of misterbitcoin](https://i.ibb.co/m9DQYVQ/New-Project-10.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
