$(document).ready(function() {
    $("button#hello").click(function() {
        $("ul").show();
      $("ul#user").prepend("<img src='imgs/yes.jpeg'>").css('size', '20px');
      $("ul#webpage").prepend("<img src='imgs/yes.jpeg'>").css('size', '20px');
    });
  
    $("button#goodbye").click(function() {
        $("ul").show();
      $("ul#user").prepend("<li>Goodbye!</li>").css('background-color', 'yellow');
      $("ul#webpage").prepend("<li>Goodbye, dear user!</li>").css('background-color', 'yellow');
    });
  
    $("button#stop").click(function() {
        $("ul").show();
      $("ul#user").prepend("<li>Stop copying me!</li>").css('background-color', 'blue');
      $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>").css('background-color', 'blue');
    });

    $("ul#user").first().click(function() {
        $(this).children().first().remove();
      });

    $("ul#webpage").first().click(function() {
        $(this).children().first().remove();
      });
  });