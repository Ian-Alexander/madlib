$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var petNameInput = $("input#petName").val();
    var activity1Input= $("input#activity1").val();
    var activity2Input = $("input#activity2").val();
    var hoursInput = $("input#hours").val();
    var yearsInput = $("input#years").val();
    var emotionInput = $("input#emotion").val();
    var petInput = $("input#pet").val();
    var medicalConditionInput = $("input#medicalCondition").val();
    var tvShowInput = $("input#tvShow").val();

    $(".name").text(nameInput);
    $(".petName").text(petNameInput);
    $(".activity1").text(activity1Input);
    $(".activity2").text(activity2Input);
    $(".hours").text(hoursInput);
    $(".years").text(yearsInput);
    $(".emotion").text(emotionInput);
    $(".pet").text(petInput);
    $(".medicalCondition").text(medicalConditionInput);
    $(".tvShow").text(tvShowInput);

    $("#story").show();

    event.preventDefault();
  });
});
