function OrderFormController($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.

	$scope.services = [
		{
			name: 'Template Slides',
			price: 300,
			active:true
		},{
			name: '100 Rims of papers',
			price: 280,
			active:false
		},{
			name: 'Epson Printer e788 series',
			price: 2500,
			active:false
		},{
			name: '10 Catridges',
			price: 1013,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

	$scope.total = function(){

		var total = 0;


		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}
