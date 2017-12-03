var arrayOfChoices = ["rock","paper","scissors"];

var appAngularControl = angular.module("myApp", ["ngRoute"]);

appAngularControl.value('Username', "Player");
appAngularControl.config(function($routeProvider) {
    $routeProvider
    .when("/", {
     templateUrl : './pages/setupPage.html',
     controller : 'SetupPageCtrl'
    })
    .when("/Game", {
        templateUrl : './pages/mainGame.html',
        controller : 'mainGameCtrl'
    });
});


appAngularControl.controller("SetupPageCtrl", function ($scope, $rootScope, Username) {
    $( document ).ready(function() {
      $("#inputForName").keyup(function(event) {
         var inputText = $(this).val();
         if (inputText.length >0){
          $("#startBtn").css("display","inline");
          $rootScope.Username = inputText;
         }
      });
    });  
});        


appAngularControl.controller("mainGameCtrl", function ($scope, $rootScope, Username) {
    $scope.Username = $rootScope.Username;
    $scope.ScorePlayer = 0;
    $scope.ScoreCPU = 0;

    $( document ).ready(function() {

        var mainGameClassInstance = new MainGameAction();
        var cpuClassInstance = new CPU();
        var playerClassInstance = new Player();

        $(".btn-group > button.btn").on("click", function(){

            var numOfPlayerOption = +this.value;
            var playerChoiceName = playerClassInstance.getOptionChosenName(numOfPlayerOption);
            var cpuChoice = cpuClassInstance.getOption();
            var cpuChoiceName = cpuClassInstance.getOptionChosenName();
            var gameWinner = mainGameClassInstance.getWinner( parseInt(numOfPlayerOption), cpuChoice);

            //update score
            if (gameWinner == "Player"){
              $scope.$apply(function () {
                $scope.ScorePlayer ++;
              });
            }
            else if (gameWinner == "CPU"){
              $scope.$apply(function () {
                $scope.ScoreCPU ++;
              });
            }

            //draw modal for game outcome, removal of div if already instantiated
            if ($( ".container" ).eq(0).find( "#myModal" ).length==0){
              $('.container').eq(0).append(mainGameClassInstance.generateModal(playerChoiceName,cpuChoiceName,gameWinner));
            }else{
               $('#myModal').remove();
               $('.container').eq(0).append(mainGameClassInstance.generateModal(playerChoiceName,cpuChoiceName,gameWinner));
            } 
            $('#myModal').modal('show');
        });

    });  
});        
