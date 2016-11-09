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
    url: '/adicionarDono',
    templateUrl: 'templates/adicinarDono.html',
    controller: 'DonoCtrl'
  })

  .state('adicionarPet', {
    url: '/adicionarPet',
    templateUrl: 'templates/adicionarPet.html',
    controller: 'AdicionarPetCtrl'
  })

  .state('alterarPet', {
    url: '/alterarPet',
    templateUrl: 'templates/alterarPet.html',
    controller: 'AlterarPetCtrl'
  })

  .state('editeOPet', {
    url:'/editeOPet/:id/',
    templateUrl: 'templates/editeOPet.html',
    controller: 'EditeOPetCtrl'
  })

  .state('adicionarVisita', {
    url: '/adicionarVisita',
    templateUrl: 'templates/adicionarVisita.html',
    controller: 'adicionarVisitaCtrl'
  })

$urlRouterProvider.otherwise('/petclinc')



});
