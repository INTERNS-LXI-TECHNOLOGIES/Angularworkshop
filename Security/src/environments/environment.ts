// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// {
//   "realm": "Test",
//   "auth-server-url": "http://localhost:8080/auth/",
//   "ssl-required": "external",
//   "resource": "angular-client",
//   "public-client": true,
//   "confidential-port": 0
// }
export const environment = {
  production: false,
  keycloak: {
    config: {
      realm: 'Test',
      url: 'http://localhost:8080/auth/',
      clientId: 'spring-boot-server',
       credentials: {
         secret: '8602455c-65db-4fe8-9614-b1c616902d35'
       }
    }
  },
  server: {
    url: 'http://localhost:4200/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
