import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';
import "./css/app.less";
import page from "./views/page.html";
import AOS from 'aos';
import FastClick from "fastclick";
import 'jquery-validation';
import $ from "jquery";

$("#page").html(page);


$(function() {
    AOS.init({
        disable: 'mobile'
    });

    FastClick.attach(document.body);

    //scroll
    $('a[href*=\\#]').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    });

    var scrollTop = $(".scrollTop");

    $(window).scroll(function() {

        var topPos = $(this).scrollTop();

        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");
        } else {
            $(scrollTop).css("opacity", "0");
        }

    });

    //Click event to scroll to top
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    });

    $("#frm-contacto").on("submit", function() {
        var $frm = $(this);
        if ($frm.valid()) {

            $.ajax({
                    url: $frm.prop("action"),
                    type: 'POST',
                    dataType: 'json',
                    data: $frm.serialize(),
                })
                .done(function() {
                    console.log("success");
                    alert("Se envio correctamente la informacion");
                    $frm[0].reset();
                });
        }
        return false;
    }).validate();
});

export default {
    // initialization page
    init() {}
};