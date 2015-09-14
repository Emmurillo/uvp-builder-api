# UVP builder's API

Backend implementation for the [UVP builder tool](https://github.com/manfredt27/uvp-builder-web).

**This tool is powered by [Pernix-Labs](http://labs.pernix-solutions.com/)**.

### Setup

Before start the project setup, you need to be sure you already have installed, [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/en/) and NPM is enabled on your NodeJS configuration.

It's very important that you have installed [MongoDB](https://www.mongodb.org/) and your database server is running.

After that you're ready to go cloning the repository.

```
git clone https://github.com/emmurillo/uvp-builder-api.git
```

or vía SHH if you want.

Now you have to access package.json file, it's located at uvp-builder-api/ folder. Once you're there just install all the dependencies.

```
cd uvp-builder-api
npm install
```

The code tasks is automatized using [Gulp](http://gulpjs.com/) so now you just have to run the setup/server task.

```
gulp
```


