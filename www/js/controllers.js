angular.module('app.controllers', [])

.controller('petClinicCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {



}])



.controller('DonoCtrl', ['$scope', '$stateParams' , 'DonoService', 'DonoServiceLocal', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName


function ($scope, $stateParams, DonoService, DonoServiceLocal, $ionicPopup) {

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

         DonoServiceLocal.addDono($scope.data);

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

        // })
     }

}])



.controller('AdicionarPetCtrl', ['$scope', '$stateParams', 'PetServiceLocal', 'RacaServiceLocal','DonoServiceLocal','$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
//O controller é único por Classe. Se existe uma classe Pet, o seu controller deve ser o PetController
//Você vai trazer os metodos de consulta de dados pra cá!
// to achando o codigo estranho desse controller, de onde tu tirou ?
function ($scope, $stateParams, PetServiceLocal, RacaServiceLocal, DonoServiceLocal, $ionicPopup ) {


    $scope.data = {
           nomePet: '',
           dataNascimento: '',
           raca_id: '',
           dono_id: ''
       }

    $scope.submitting = false;

    $scope.submit = function(){
           $scope.submitting = true;

           PetServiceLocal.addPet($scope.data);
console.log($scope.data);
            $scope.data = {
                 nomePet: '',
                 dataNascimento: '',
                 raca_id: '',
                dono_id: ''
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

//Criei essa parte-->
    $scope.donos = [];
    $scope.lerDono = function(){
      $scope.donos = DonoServiceLocal.getDonos();
    }

    $scope.lerDono();

//termina aqui

}])

.controller('adicionarVisitaCtrl', ['$scope', '$stateParams', 'AdicionarVisitaLocal','PetServiceLocal', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, AdicionarVisitaLocal ,PetServiceLocal, $ionicPopup) {
        var data = Date(2016,11,21);

        $scope.data = {
               dataVisita: data,
               descricao:'',
               idPet: ''
           }

        $scope.submitting = false;

        $scope.submit = function(){
               $scope.submitting = true;

               var d = new Date( );
               AdicionarVisitaLocal.addVisita($scope.data);
               console.log($scope.data);
                $scope.data = {
                     dataVisita: '',
                     descricao:'',
                     idPet: ''
                   }


                   $scope.submitting = false;

                   $ionicPopup.alert({
                       title: 'Thank you!',
                       template: 'Your response has been recorded.'
                   });

               //})
        }
      /**  $scope.racas = [];
        $scope.lerRacas = function(){
          $scope.racas = RacaServiceLocal.getRacas();
        }
        $scope.lerRacas();

    //Criei essa parte-->
        $scope.donos = [];
        $scope.lerDono = function(){
          $scope.donos = DonoServiceLocal.getDono();
        }
        $scope.lerDono();
    //termina aqui
**/



    /*  $scope.lerPet = function(){
        //  $scope.VisualizarOPet = PetServiceLocal.getPet($stateParams.id);

    //  };
    //  $scope.lerPet();*/

      $scope.pets = [];
      $scope.lerPet = function(){
        $scope.pets = PetServiceLocal.getPets();
      }
      $scope.lerPet();



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

.controller('EditeOPetCtrl', ['$scope', '$stateParams', 'PetServiceLocal', 'RacaServiceLocal','DonoServiceLocal', '$ionicPopup',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,PetServiceLocal,RacaServiceLocal,DonoServiceLocal, $ionicPopup) {

    $scope.lerPet = function(){
        $scope.EditPet = PetServiceLocal.getPet($stateParams.id);

    };

    $scope.lerPet();
    $scope.lerRacas = function(){
        $scope.racas = RacaServiceLocal.getRacas();
    }
    $scope.lerRacas();

//Criei essa parte-->
        $scope.donos = [];
        $scope.lerDono = function(){
          $scope.donos = DonoServiceLocal.getDonos();
        }
        $scope.lerDono();
    //termina aqui

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
      //tentativa do EXCLUIR
    $scope.excluindo = false;
    $scope.excluir = function(){
       $scope.excluindo = true;
       PetServiceLocal.delete($scope.EditPet);
       $scope.excluindo = false;

      $ionicPopup.alert({
              title: 'Excluido',
              template: 'Pet Deletado com Sucesso!'
       });
    }

}])




/**
.controller('visualizarPetsVisita', ['$scope', '$stateParams', 'PetServiceLocal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,PetServiceLocal) {

  $scope.pets= [];


  $scope.loadData = function(){
      $scope.pets = PetServiceLocal.getPets();

       // PetService.all().then(function(res){
       //    $scope.pets = res;
       //  })
  }
  $scope.loadData();

}])**/

function mascaraData(campoData){
            var data = campoData.value;
            if (data.length == 2){
                data = data + '/';
                document.forms[0].data.value = data;
    return true;
            }
            if (data.length == 5){
                data = data + '/';
                document.forms[0].data.value = data;
                return true;
            }
       }

function somenteNumeros(num) {
        var er = /[^0-9.^/]/;
        er.lastIndex = 0;
        var campo = num;
        if (er.test(campo.value)) {
          campo.value = "";
}
}
