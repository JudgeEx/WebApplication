import * as $ from "jquery"
console.log("Loaded");
$(() => {
    console.log("Init");
    $("#l-submit").on("click", () => {
        console.log("Clicked");
        $.post("/api/User/Login", $("#l-form").serialize()).done(ret => $("#result").text(ret));
        return false;
    });
});