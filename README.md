# People List Challenge
Created with latest major vesrion of Angular (7) and Google Material

## how to run the app
befor runnig the app you need to install latest LTS version of NodeJs from `https://nodejs.org`

also i deploy the app on heroku with this Address : `https://people-list-challenge.herokuapp.com/`

Extract the zip file in folder

Open command prompt (CMD) on windows or Terminal in Mac
Navigate to folder you extract the files and run `npm i` (it will install node packages ...)
After installing node modules now run `ng serve` command for a dev server. Navigate to `http://localhost:4200/`. The app will Automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

I try to write some simple tests for the project using angular default test engine
Run `ng test` to execute the unit tests via `Karma`.

## Back End

I use PostMan Mock server to simulate simple communications with API to `get` or `post` data

## Some Description

1. I used setTimeout() to create some delay (about 2.5 secconds) to see ui animations on the loading data . 
2. I decided to put my filter on all the data received from server .
                so if you try to find someone by id or name it will works
                (the UI didn't show the ID column)
3. For sorting by people's Name you should just click on table header (Name column)
4. because i'm on a business trip i write the code piece by piece on my free times . but i think it takes me 3 to 4 hours.