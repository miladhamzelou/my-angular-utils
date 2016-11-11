common.directive("collapse",[function()
{
    return {
        restrict : 'A',
        scope: {
            "collapse": "="
        },
        link:function (scope,element,attrs) {

            myelem  = $(element);

            scope.$watch("collapse",function(newValue,oldValue)
            {
                console.log(newValue);
                if(newValue) {
                    myelem.collapse('hide');
                }
                else
                {
                    myelem.collapse('show');
                }
            })

        }
    }
}]);
