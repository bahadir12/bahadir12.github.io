const delay = 1000;

$(document).ready(function () {
    $("#image_list a").each(function () {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    $("#image_list a").click(function (evt) {
        var imageURL = $(this).attr("href");
 	$("#image")
            .fadeOut(delay)
            .promise()
            .done(function () {
                $("#image").attr("src", imageURL);
                $("#image").fadeIn(delay);
            });
        var caption = $(this).attr("title");
        $("#caption")
            .fadeOut(delay)
            .promise()
            .done(function () {
                $("#caption").text(caption);
                $("#caption").fadeIn(delay);
            });

        evt.preventDefault();
    });
    $("li:first-child a").focus();
    $("#image").hide().fadeIn(delay);
    $("#caption").hide().fadeIn(delay);
});
