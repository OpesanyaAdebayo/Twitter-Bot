$("#hashTagsForm").submit(function (event) {
    let rawFormInput = $("#twitterHashTags").val();
    if(rawFormInput.length == 0) {
        $(".error").html("You have not filled in any hashtags.");
        $(".alert").addClass("show");
        setTimeout(() => $(".alert").removeClass("show"), 4000);
    }
    else {
        $.post("/", $("#hashTagsForm").serialize(), function(data) {
            
        });
    }
    event.preventDefault();
});
//     $("#submitHashTags").attr('disabled', 'disabled');
//     let processedHandle = rawFormInput.toLowerCase();
//     $.post("/inputhandle", $("#twitterHandleForm").serialize(), function (data) {
//         if (data.message) {
//             $(".error").html(data.message);
//             $(".alert").addClass("show");
//             $("#submitHandle").removeAttr('disabled');
//             setTimeout(() => $(".alert").removeClass("show"), 4000);

//         } else {
//             window.location.href = '/dashboard';
//             return false;
//         }
//     });
//
// });
