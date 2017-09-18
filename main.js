'use strict';

$(document).ready(function () {

  // $('.welcome').hide();
  // $('.navbar__btn-start').hide();
  // //$('.test').hide();
  // $('.result').hide();
  // $('#hint').hide();

  function progressBar (count) {
     var percentage = '0';
     percentage = count * 25 + '%';
    //  $("#progressBar").css("width", percentage);
     $("#progressBar").animate({width: percentage}, 1000);

   }

   function testCompletenessCheck () {
     var count = 0;
     for (var i = 0; i < user.answers.length; i++) {
       count = count + user.answers[i];
     }
     progressBar(count);
     if (count == 4) {
       completed();
     }
   }

  function compareAnswer(numAnswer) {
    $('#hint').removeClass("true");
    if (numAnswer[7] == 1) {
          if (numAnswer[9] == 1) {
            $("#name").attr("value", result.f1.v1.name);
            $("#lastname").attr("value", result.f1.v1.lastname);
            $("#hint").text(result.f1.v1.hint);
            $('#hint').show();
            if (result.f1.v1.verity) {
              user.answers[0] = 1;
              $('#hint').addClass("true");
            } else {
              user.answers[0] = 0;
            };
          } else if (numAnswer[9] == 2) {
            $("#name").attr("value", result.f1.v2.name);
            $("#lastname").attr("value", result.f1.v2.lastname);
            $("#hint").text(result.f1.v2.hint);
            $('#hint').show();
            if (result.f1.v2.verity) {
              user.answers[0] = 1;
              $('#hint').addClass("true");
            } else {
              user.answers[0] = 0;
            };
          } else if (numAnswer[9] == 3) {
            $("#name").attr("value", result.f1.v3.name);
            $("#lastname").attr("value", result.f1.v3.lastname);
            $("#hint").text(result.f1.v3.hint);
            $('#hint').show();
            if (result.f1.v3.verity) {
              user.answers[0] = 1;
              $('#hint').addClass("true");
            } else {
              user.answers[0] = 0;
            };
          };
    } else if (numAnswer[7] == 2) {
          if (numAnswer[9] == 1) {
            $("#foto").attr("src", result.f2.v1.src);
            $("#hint").text(result.f2.v1.hint);
            $('#hint').show();
            $('#fotoTitle').hide();
            if (result.f2.v1.verity) {
              user.answers[1] = 1;
              $('#hint').addClass("true");
            } else {
              user.answers[1] = 0;
            };
          } else if (numAnswer[9] == 2) {
            $("#foto").attr("src", result.f2.v2.src);
            $("#hint").text(result.f2.v2.hint);
            $('#hint').show();
            $('#fotoTitle').hide();
            if (result.f2.v2.verity) {
              user.answers[1] = 1;
              $('#hint').addClass("true");
            } else {
              user.answers[1] = 0;
            };
          } else if (numAnswer[9] == 3) {
            $("#foto").attr("src", result.f2.v3.src);
            $("#hint").text(result.f2.v3.hint);
            $('#hint').show();
            $('#fotoTitle').hide();
            if (result.f2.v3.verity) {
              user.answers[1] = 1;
              $('#hint').addClass("true");
            } else {
              user.answers[1] = 0;
            };
          };
    } else if (numAnswer[7] == 3) {
          if (numAnswer[9] == 1) {
            $("#workPlace").text(result.f3.v1.workplace);
            $("#hint").text(result.f3.v1.hint);
            $('#hint').show();
            if (result.f3.v1.verity) {
              user.answers[2] = 1;
              $('#hint').addClass("true");
            } else {
              user.answers[2] = 0;
            };
          } else if (numAnswer[9] == 2) {
            $("#workPlace").text(result.f3.v2.workplace);
            $("#hint").text(result.f3.v2.hint);
            $('#hint').show();
            if (result.f3.v2.verity) {
              user.answers[2] = 1;
            } else {
              user.answers[2] = 0;
            };
          } else if (numAnswer[9] == 3) {
            $("#workPlace").text(result.f3.v3.workplace);
            $("#hint").text(result.f3.v3.hint);
            $('#hint').show();
            if (result.f3.v3.verity) {
              user.answers[2] = 1;
              $('#hint').addClass("true");
            } else {
              user.answers[2] = 0;
            };
          };
    } else if (numAnswer[7] == 4) {
          if (numAnswer[9] == 1) {
            $("#about").text(result.f4.v1.about);
            $("#hint").text(result.f4.v1.hint);
            $('#hint').show();
            if (result.f4.v1.verity) {
              user.answers[3] = 1;
              $('#hint').addClass("true");
            } else {
              user.answers[3] = 0;
            };
          } else if (numAnswer[9] == 2) {
            $("#about").text(result.f4.v2.about);
            $("#hint").text(result.f4.v2.hint);
            $('#hint').show();
            if (result.f4.v2.verity) {
              user.answers[3] = 1;
              $('#hint').addClass("true");
            } else {
              user.answers[3] = 0;
            };
          } else if (numAnswer[9] == 3) {
            $("#about").text(result.f4.v3.about);
            $("#hint").text(result.f4.v3.hint);
            $('#hint').show();
            if (result.f4.v3.verity) {
              user.answers[3] = 1;
              $('#hint').addClass("true");
            } else {
              user.answers[3] = 0;
            };
          };

      }
      testCompletenessCheck();
    };

  // =============== COMPLETED ================ //
  function completed () {
        // $('.welcome').hide();
        // $('.navbar__btn-start').hide();
        $('.navbar__btn-repeat').show();
        // $('.result').show();

          $('.test').animate({top: "30rem"}, 1000, function () {
              $('.result').show();
              $('.result').animate({top: "0"}, 900);
          });
  }


  // =============== INITIALIZATION ================ //

  var user = {
    answers: [0,0,0,0],
    currentAnswer: ''
  }

  var result = {
    f1: {
      v1: {
        name: 'Иван',
        lastname: 'Пивоваров',
        hint: 'Вы указали свое полное имя и фамилию. Правильное решение!',
        verity: true
      },
      v2: {
        name: 'Пивной',
        lastname: 'Супермен',
        hint: 'Укажите свое полное имя и фамилию. Не стоит оставаться анонимом в социальной сети.'
      },
      v3: {
        name: 'Ваня',
        lastname: 'Балтика',
        hint: 'Укажите свое полное имя и фамилию. Не стоит указывать вместо фамилии название Компании.'
      }
    },
    f2: {
      v1: {
        fotoname: 'Лого Балтики',
        src: 'baltika.png',
        hint: 'Не стоит размещать вместо личного фото логотип Компании.'
      },
      v2: {
        fotoname: 'Фото человека',
        src: 'tolstoy.png',
        hint: 'Вы разместили свое личное фото. Правильное решение!',
        verity: true
      },
      v3: {
        fotoname: 'Картинка супермена',
        src: 'superman.png',
        hint: 'Не стоит размещать чужое фото.'
      }
    },
    f3: {
      v1: {
        workplace: 'Пивоваренная компания «Балтика»/ Carlsberg Group',
        hint: 'Вы указали полное название Компании. Правильное решение!',
        verity: true
      },
      v2: {
        workplace: 'beer company',
        hint: 'Соблюдайте принцип открытости! Укажите полное название Компании.'
      },
      v3: {
        workplace: 'не указано',
        hint: 'Соблюдайте принцип открытости! Укажите полное название Компании.'
      }
    },
    f4: {
      v1: {
        about: 'Пил, пью и буду пить!',
        hint: 'Талант не пропьешь. Укажите что-нибудь другое.'
      },
      v2: {
        about: 'Работаю в сфере 18+',
        hint: 'Хороший выбор. Но лучше укажите легальную деятельность'
      },
      v3: {
        about: 'Я работаю в  пивоваренной компании «Балтика», при этом мои личные взгляды могут не совпадать с мнением моего работодателя',
        hint: 'Вы указали подходящую информацию. Правильное решение!',
        verity: true
      }
    }
  };

  $('.welcome__title').fadeIn(900);
  $('.welcome__description').fadeIn(900);
  $('.navbar__btn-start').fadeIn(900);
  $('.welcome__image').animate({top: "6.9375rem"}, 900);

  // =============== HANDLER =================//

  // =============== START =================//

    $('.navbar__btn-start').click(function () {
        // $('.welcome').hide();
        // $('.navbar__btn-start').hide();
        $('.test').fadeIn(900);
        $('.navbar__btn-start').fadeOut(500);
        $('.navbar__btn-repeat').fadeIn(900);
        $('#hint').hide();

        $('.welcome__title').fadeOut(400);
        $('.welcome__description').fadeOut(400);
        $('.welcome__image').animate({top: "30rem"}, 900, function () {
          $('.test').animate({top: "0"}, 900);
        });

    });

  // =============== REPEAT =================//
    $('.navbar__btn-repeat').click(function () {
        $('.navbar__btn-repeat').fadeOut(900);
        $('.result').animate({top: "30rem"}, 900);
        $('.test').animate({top: "30rem"}, 900, function () {
            $('.welcome__title').fadeIn(900);
            $('.welcome__description').fadeIn(900);
            $('.welcome__image').animate({top: "6.9375rem"}, 900);
            $('.navbar__btn-start').fadeIn(900);
        });

        user.answers[0] = 0;
        user.answers[1] = 0;
        user.answers[2] = 0;
        user.answers[3] = 0;
        $("#progressBar").css("width", "0%");
        $("#name").attr("value", "");
        $("#lastname").attr("value", "");
        $("#foto").attr("src", "");
        $("#workPlace").text("");
        $("#about").text("");
    });

  // =============== ANSWER =================//
  $(".form-answer1__item").click(function () {
      var numAnswer = $(this).attr("id");
      compareAnswer(numAnswer);
  });

  $(".form-answer2__item").click(function () {
      var numAnswer = $(this).attr("id");
      compareAnswer(numAnswer);
  });

  $(".form-answer3__item").click(function () {
      var numAnswer = $(this).attr("id");
      compareAnswer(numAnswer);
  });

  $(".form-answer4__item").click(function () {
      var numAnswer = $(this).attr("id");
      compareAnswer(numAnswer);
  });

});
