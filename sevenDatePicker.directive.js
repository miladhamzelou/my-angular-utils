common.directive('sevenDatePicker',[function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, elem, attrs,ngModel) {

            var $element = $(elem);
            if(!ngModel) return; // do nothing if no ng-model
            $element.datetimepicker({format: "DD/MM/YYYY"});
            $element.on('dp.change', function(){
                scope.$apply(read);
            });

            read();

            function read() {
                var value = $element.val();
                var from = value.split("/");
                var f = moment().set({'year': from[2], 'month': from[1]-1  , 'date': from[0]}).format('L');
                ngModel.$setViewValue(f);
                // ngModel.$setModelValue(f);
            }
        }
    }

}]);
