var app = angular.module('gallery', [])
.controller('galleryController', ['$scope', function($scope){
	$scope.images = [
		'img/gallery/image01.jpg',
		'img/gallery/image02.jpg',
		'img/gallery/image03.jpg',
		'img/gallery/image04.jpg',
		'img/gallery/image05.jpg',
		'img/gallery/image06.jpg'
	];
	$scope.viewImage = { view : false, link: ''};
	$scope.openImage = function(viewImage){
		$scope.viewImage.view = true;
		$scope.viewImage.link = viewImage;
	};
	$scope.closeImage = function(){
		$scope.viewImage.view = false;
		$scope.viewImage.link = '';
	};
}])
.directive('gallery', function() {
   	return {
	    restrict: 'E',
	    templateUrl: 'gallery/gallery.html'
	}
});