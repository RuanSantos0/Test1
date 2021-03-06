angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('petClinic', {
    url: '/petclinc',
    templateUrl: 'templates/petClinic.html',
    controller: 'petClinicCtrl'
  })

  .state('adicinarDono', {
    url: '/adicionarPet',
    templateUrl: 'templates/adicinarDono.html',
    controller: 'adicinarDonoCtrl'
  })

  .state('adicionarPet', {
    url: '/adicionarPet',
    templateUrl: 'templates/adicionarPet.html',
    controller: 'adicionarPetCtrl'
  })

  .state('alterarPet', {
    url: '/alterarPet',
    templateUrl: 'templates/alterarPet.html',
    controller: 'alterarPetCtrl'
  })

  .state('editeOPet', {
    url: '/page8',
    templateUrl: 'templates/editeOPet.html',
    controller: 'editeOPetCtrl'
  })

$urlRouterProvider.otherwise('/petclinc')

  

});