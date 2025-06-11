// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  ttsConfig: {
    apiUrl: "", // 👈 your TTS backend endpoint
    enableTTS: true, // 👈 set this to false if you want to disable your TTS in certain deployment environments. Note, if this is disabled, your EveryVoice components will not render and TTS will not be accessible from your application.
    developmentBearerToken: "", // 👈 OPTIONAL authentication token if required by your API. It will be treated as an Authorization Bearer token
    speakerID: "penac", // 👈 OPTIONAL speaker id.
    requiresAuth: true,
    diffusionSteps: 3, // 👈  OPTIONAL: number of diffusion steps
    middlewareEndpoint:
      "https://wsanec-tts-middleware-2372f187c744.herokuapp.com/tts",
    domain: "wsanec-sgile.ca.auth0.com",
    clientId: "XTyHkE8Jnea0YCcQpdxPylluY49H6XKJ",
    audience: "https://wsanec.everyvoice.middleware.ca",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
