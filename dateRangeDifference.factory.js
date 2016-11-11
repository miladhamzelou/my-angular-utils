common.factory('dateRangeDifference',[function()
{

    var serviceObject = {};
    serviceObject.dateDifference = function (inStartDate, inEndDate) {
        console.log(inStartDate);
        console.log(inEndDate);
        var outStartDate, outEndDate;
        var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        var regex = new RegExp(pattern);
        var diff = 0;
        if(regex.test(inStartDate))
        {
            var from = inStartDate.split("/");

            var startDateString = from[1] + "-"+from[0]+"-"+from[2] ;
            console.log(startDateString);
            inStartDate= moment(startDateString,"MM-DD-YYYY");
        }
        else
        {
            inStartDate = moment(inStartDate);
        }
        if(regex.test(inEndDate))
        {
            var to = inEndDate.split("/");

            var endDateString = to[1] + "-"+to[0]+"-"+to[2] ;
            console.log(endDateString);
            inEndDate = moment(endDateString,"MM-DD-YYYY");
        }
        else
        {
            inEndDate = moment(inEndDate);
        }

        if(moment.isMoment(inStartDate) && moment.isMoment(inEndDate))
        {
            diff =  inEndDate.diff(inStartDate,"days");
        }

        return diff;
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
