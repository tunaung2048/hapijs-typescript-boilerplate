import * as Hapi from '@hapi/hapi';
// import * as Accept from '@hapi/accept';

export const index = function(request: Hapi.Request, h: Hapi.ResponseToolkit) {
  return h.view('home/index', {
    title: 'Welcome',
    message: 'hello world',
    min: 10,
    max: 499,
    year: '2019'
  });
};

export const sayHello = function(
  request: Hapi.Request,
  h: Hapi.ResponseToolkit
) {
  return h.view('home/hello', {
    message: 'hello',
    title: 'asldfkjaslfdkjal'
  });
};

// export const multiLangTemplateSample = function(
//   request: Hapi.Request,
//   h: Hapi.ResponseToolkit
// ) {
//   const supportedLanguages = ['en', 'zh'];
//   const defaultLanguage = 'en';
//   const templateBasename = 'index';

//   console.log('Header->', request.headers);
//   const langs = Accept.languages(request.headers['accept-language']);
//   console.log('Accept language -> ', langs);
//   const greetingText = 'Greeting!';

//   for (let i = 0; i < langs.length; i++) {
//     if (supportedLanguages.indexOf(langs[i]) !== -1) {
//       console.log('lang->', supportedLanguages[i]);
//       return h.view(templateBasename + '_' + langs[i], { title: greetingText });
//     }
//   }
//   return h.view('index' + '_' + defaultLanguage, { title: greetingText });
// };
