$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var activity = $(this).siblings(".description").val();
        console.log(activity)
        var hour = $(this).parent().attr("id");
       localStorage.setItem(hour, activity);
       console.log(localStorage)
    })
    $(".clearBtn").on("click", function(){
        localStorage.clear()

    })

    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("-")[1])
       console.log(blockHour)
       var momentHour = moment().hours();
       console.log(momentHour)

       if(momentHour > blockHour) {
            $(this).addClass("past")
       }

       if(momentHour === blockHour) {
            $(this).addClass("present")
     }

        if(momentHour < blockHour) {
            $(this).addClass("future")
     }

    })

    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-1 .description").val(localStorage.getItem("hour-1"))
    $("#hour-2 .description").val(localStorage.getItem("hour-2"))
    $("#hour-3 .description").val(localStorage.getItem("hour-3"))
    $("#hour-4 .description").val(localStorage.getItem("hour-4"))
    $("#hour-5 .description").val(localStorage.getItem("hour-5"))
})