
common.directive('validateCurrency',[function()
{
    return{
        restrict : 'A',
        require : 'ngModel',
        link: function(scope,elem,attr,ctrl)
        {
            /* var pattern = /^[A-Z]{3}\s\d+$/;
             var regex =  new RegExp(pattern);

             ctrl.$parsers.unshift(function(value)
             {
             var test =  regex.test(value);

             ctrl.$setValidity('validateCurrency',test);

             return test? value: "";
             });*/
        }
    }
}]);
