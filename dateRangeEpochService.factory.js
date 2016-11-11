common.factory('dateRangeEpochService',[function()
{

    var serviceObject = {};
    serviceObject.epochStartEndDateGen = function (inStartDate, inEndDate) {
        var outStartDate, outEndDate;
        var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        var regex = new RegExp(pattern);
        if(regex.test(inStartDate))
        {
            var from = inStartDate.split("/");
            var inStartDate= new Date(from[2], from[1] - 1, from[0]);
        }
        if(regex.test(inEndDate))
        {
            var to = inEndDate.split("/");
            var inEndDate = new Date(to[2], to[1] - 1, to[0]);
        }
        if(inStartDate) {
            inStartDate = new Date(inStartDate);
        }
        else {
            inStartDate = new Date();
        }

        if(inEndDate) {
            inEndDate = new Date(inEndDate);
        }
        else {
            inEndDate = new Date();
        }

        outStartDate = parseInt(inStartDate.getTime() - (inStartDate.getTimezoneOffset() * 60000));
        outEndDate = parseInt(inEndDate.getTime() - (inEndDate.getTimezoneOffset() * 60000));
        /* outEndDate+= 86399000;*/

        return {
            startDate: outStartDate,
            endDate: outEndDate
        };

    }


    /*function epochStartEndDateGen_v2 (inDate) {
     var outDate;
     if(inDate != '' || inDate != null) {
     inDate = new Date(inDate);
     outDate = parseInt(inDate.getTime() - (inDate.getTimezoneOffset() * 60000));
     }
     else {
     outDate = null;
     }

     return {
     date: outDate
     };

     }*/

    return serviceObject;

}])
