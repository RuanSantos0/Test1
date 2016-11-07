angular.module('app.controllers', [])

.controller('petClinicCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {



}])

.controller('DonoCtrl', ['$scope', '$stateParams' , 'DonoService', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName


function ($scope, $stateParams, DonoService, $ionicPopup) {

  $scope.data = {
         nome: '',
         sobrenome: '',
         endereco: '',
         cidade: '',
         telefone: ''
     }

     $scope.submitting = false;

     $scope.submit = function(){
         $scope.submitting = true;
         DonoService.add($scope.data).then(function(){
             $scope.data = {
               nome: '',
               sobrenome: '',
               endereco: '',
               cidade: '',
               telefone: ''
             }
             $scope.submitting = false;

             $ionicPopup.alert({
                 title: 'Thank you!',
                 template: 'Your response has been recorded.'
             });

         })
     }

}])

.controller('PetCtrl', ['$scope', '$stateParams', 'PetService', 'RacaService','$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
//O controller é único por Classe. Se existe uma classe Pet, o seu controller deve ser o PetController
//Você vai trazer os metodos de consulta de dados pra cá!
// to achando o codigo estranho desse controller, de onde tu tirou ?
function ($scope, $stateParams, PetService, RacaService, $ionicPopup) {


    $scope.data = {
           nomePet: '',
           dataNascimento: '',
           raca: ''

       }

       $scope.submitting = false;

       $scope.submit = function(){
           $scope.submitting = true;
           PetService.add($scope.data).then(function(){
               $scope.data = {
                 nomePet: '',
                 dataNascimento: '',
                 raca: ''

               }
               $scope.submitting = false;

               $ionicPopup.alert({
                   title: 'Thank you!',
                   template: 'Your response has been recorded.'
               });

           })
       }


       $scope.pets= [];

       $scope.loadData = function(){

         PetService.all().then(function(res){
           $scope.pets = res;
         })
       }
       $scope.loadData();


       $scope.racas = [];

       $scope.lerRacas = function(){

         RacaService.pegaRacas().then(function(res){
           $scope.racas = res;

         })
       }
       $scope.lerRacas();

}])

.controller('alterarPetCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
//Primeiro Erro: no controller de Pet vc tá chmando DonoService.
//Segundo erro, nome do controller. O controller já existe e deve ser o PetController, que deve existir aqui... vou procurar...
console.log(PetService.all);



  $scope.showDelete = false;
  $scope.taggleDelete = function(){
    $scope.showDelete = !$scope.showDelete;

  }
  $scope.deleteItem = function($index){
      PetService.delete($scope.PetService[$index].id).then(function(){
        $scope.PetService.splice($index-1,1);
      })
  }
}])

.controller('editeOPetCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('adicionarVisitaCtrl', ['$scope', '$stateParams', 'VisitaService', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, VisitaService, $ionicPopup) {


  $scope.data = {
         dataVisita: '',
         descricao:''
     }

     $scope.submitting = false;

     $scope.submit = function(){
         $scope.submitting = true;
         VisitaService.add($scope.data).then(function(){
             $scope.data = {
               dataVisita: '',
               descricao:''
             }
             $scope.submitting = false;

             $ionicPopup.alert({
                 title: 'Thank you!',
                 template: 'Your response has been recorded.'
             });

         })
     }
}])
