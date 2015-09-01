var modal =  angular.module('ModalWindow', ['ngRoute']);

modal.directive('easyModal', function () {
   return{
        restrict: 'EA',
        templateUrl: 'app/Directives/ModalDirective/ModalTemplate.html',
        replace: true,
        scope: {
            isClose: '=',
            modalData: '=',
            nameButton: '@',
            closeButton: '&closeModal'
        }
   }
});