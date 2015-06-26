app.controller('MainController', ['$scope', function($scope) {

  $scope.shirts = [
    {
      name: 'Cotton Heavy Ox Basic Shirt',
      image: 'images/products/FallWinter2014-15/shirts/0001/KicsDocument-Cotton-Heavy-Oxford-Basic-Shirt.jpg',
      price: 16000
    },
    {
      name: 'Typewriter G/Dyed Basic Shirt',
      image: 'images/products/FallWinter2014-15/shirts/0002/KicsDocument-Typewriter-G-Dyed-Basic-Shirt.jpg',
      price: 18000
    },
    {
      name: 'Cotton Starched Bosom W/ Bow Tie',
      image: 'images/products/FallWinter2014-15/shirts/0003/KicsDocument-Cotton-Starched-Bosom-Bow-Tie-Shirt.jpg',
      price: 19000
    },
    {
      name: 'Cotton Bosom W/ Bow Tie Shirt',
      image: 'images/products/FallWinter2014-15/shirts/0004/KicsDoucment-Cotton-Bosom-Bow-Tie-Shirt.jpg',
      price: 19000
    }
  ];

  $scope.pants = [
  	{
  		name: 'Wool Greencheck Tapered Pants',
  		image: 'images/products/FallWinter2014-15/pants/0001/KicsDocument-Wool-Greencheck-Tapered-Pants.jpg',
  		price: '15000'
  	},  	
  	{
  		name: 'Wool Silk Tapered Pants',
  		image: 'images/products/FallWinter2014-15/pants/0002/KicsDocument-Wool-Silk-Tapered-Pants.jpg',
  		price: '15000'
  	},
  	{
  		name: 'Wool Pile Tucked Easy Pants',
  		image: 'images/products/FallWinter2014-15/pants/0003/KicsDocument-Wool-Pile-Tucked-Easy-Pants.jpg',
  		price: '15000'
  	},
  	{
  		name: 'Wool Silk Tucked Easy Pants',
  		image: 'images/products/FallWinter2014-15/pants/0004/KicsDocument-Wool-Silk-Tucked-Easy-Pants.jpg',
  		price: '15000'
  	}
  ];

    $scope.jackets = [
  	{
  		name: 'Wool and silk chester Coat',
  		image: 'images/products/FallWinter2014-15/jackets/0001/KicsDocument-Wool-And-Silk-Chester-Coat.jpg',
  		price: '15000'
  	},
  	  	{
  		name: 'Wool Greencheck Chester Coat',
  		image: 'images/products/FallWinter2014-15/jackets/0002/KicsDocument-Wool-Grencheck-Chester-Coat.jpg',
  		price: '15000'
  	},
  	  	{
  		name: 'Wool Bi Fabric No Collar Jacket',
  		image: 'images/products/FallWinter2014-15/jackets/0003/KicsDocument-Wool-Pile-Bi-Fabric-No-Collar-Jacket.jpg',
  		price: '15000'
  	},
  	  	{
  		name: 'Wool Silk No Collar Jacket',
  		image: 'images/products/FallWinter2014-15/jackets/0004/KicsDocument-Wool-Silk-No-Collar-Jacket.jpg',
  		price: '15000'
  	}
  ];

    $scope.knits = [
  	{
  		name: 'Pants',
  		image: '',
  		price: '15000'
  	}
  ];
}]);