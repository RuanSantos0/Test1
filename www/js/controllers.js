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

.controller('AdicionarPetCtrl', ['$scope', '$stateParams', 'PetServiceLocal', 'RacaServiceLocal','$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
//O controller é único por Classe. Se existe uma classe Pet, o seu controller deve ser o PetController
//Você vai trazer os metodos de consulta de dados pra cá!
// to achando o codigo estranho desse controller, de onde tu tirou ?
function ($scope, $stateParams, PetServiceLocal, RacaServiceLocal,  $ionicPopup ) {


    $scope.data = {
           nomePet: '',
           dataNascimento: '',
           raca_id: ''

       }

    $scope.submitting = false;

    $scope.submit = function(){
           $scope.submitting = true;

           PetServiceLocal.addPet($scope.data);

            $scope.data = {
                 nomePet: '',
                 dataNascimento: '',
                 raca_id: ''

               }

           // PetService.add($scope.data).then(function(){
           //     $scope.data = {
           //       nomePet: '',
           //       dataNascimento: '',
           //       raca: ''

           //     }
               $scope.submitting = false;

               $ionicPopup.alert({
                   title: 'Thank you!',
                   template: 'Your response has been recorded.'
               });

           //})
    }
    
    $scope.racas = [];
       
    $scope.lerRacas = function(){

        $scope.racas = RacaServiceLocal.getRacas();  
    }
    
    $scope.lerRacas();

}])

.controller('AlterarPetCtrl', ['$scope', '$stateParams', 'PetServiceLocal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, PetServiceLocal) {

    $scope.pets= [];
    
    
    $scope.loadData = function(){

        $scope.pets = PetServiceLocal.getPets();


         // PetService.all().then(function(res){
         //    $scope.pets = res;
         //  })
    }

    $scope.loadData();


       // $scope.racas = [];

       // $scope.lerRacas = function(){

       //   RacaService.pegaRacas().then(function(res){
       //     $scope.racas = res;

       //   })
       // }
       // $scope.lerRacas();


       // $scope.showDelete = false;
       
       // $scope.taggleDelete = function(){
       //    $scope.showDelete = !$scope.showDelete;

       // }
       
       // $scope.deleteItem = function($index){
       //     PetService.delete($scope.PetService[$index].id).then(function(){
       //       $scope.PetService.splice($index-1,1);
       //     })
       // }

}])

.controller('EditeOPetCtrl', ['$scope', '$stateParams', 'PetServiceLocal', 'RacaServiceLocal','$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,PetServiceLocal,RacaServiceLocal, $ionicPopup) {

    $scope.lerPet = function(){
        $scope.EditPet = PetServiceLocal.getPet($stateParams.id);
        
    };

    $scope.lerPet();
       
    $scope.lerRacas = function(){


        $scope.racas = RacaServiceLocal.getRacas();  
    }
    
    $scope.lerRacas();

// atualizar os dados do pet
    $scope.atualizando = false;

    $scope.atualizar = function(){
           
           $scope.atualizando = true; 
           PetServiceLocal.update($scope.EditPet);
           $scope.atualizando = false;

           $ionicPopup.alert({
                   title: 'Edite o Pet',
                   template: 'Pet Atualizado com Sucesso!'
            });

           
    }

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
