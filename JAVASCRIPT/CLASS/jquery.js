$(document).ready(function() {
    $("#myForm").validate({
        rules: {
            account: {
                required: true
            }
        },
        messages: {
            account: {
                required: "This field is required."
            }
        },
        errorPlacement: function(error, element) {
            var name = $(element).attr("id");
            error.appendTo($("#" + name + "-error"));
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});