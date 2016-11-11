common.directive('validateIban',['$window',function($window)
{
    return{
        restrict : 'A',
        require : 'ngModel',
        link: function(scope,elem,attr,ctrl)
        {

            var IBAN = $window.IBAN;
            ctrl.$parsers.unshift(function(value)
            {
                var test =  IBAN.isValid(value);

                ctrl.$setValidity('validateIban',test);

                return test? value: "";
            });
        }
    }
}])
