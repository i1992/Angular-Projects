
myApp.controller('add', function($scope){
// let user = [{
//                    $scope.fn,
//                    $scope.ln
//               }];
let counter = 0
let user = []
let module = []
$scope.addRow = function(){   
  
  
  let hyperlink = $scope.fn
  let txtMoudle = $scope.ln

  counter++ 

  module.push({  'counter': counter,
                      'fn': hyperlink,
                      'ln': txtMoudle })

  
  $scope.module = module
  console.log(module)
  
};


$scope.addFrom = function(){   

  
 
  user.push({
        'fn1':$scope.fn1,
        'ln1': $scope.ln1,
         'email': $scope.email,
         'drop1':$scope.drop1
  })
  $scope.user =user
  
};  

  console.log(module)
  $scope.del = function(i){
    $scope.module.splice(i,1);
  }
  $scope.dell = function(firstN){
    var index = -1;   
    var comArr = eval( $scope.module );
    for( var i = 0; i < comArr.length; i++ ) {
      if( comArr[i].firstN === firstN ) {
        index = i;
        break;
      }
    }
    if( index === -1 ) {
      alert( "Something gone wrong" );
    }
    $scope.module.splice( index, 1 );  
    
  }
});
