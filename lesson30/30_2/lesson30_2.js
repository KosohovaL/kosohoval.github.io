let result = false;
let block = true;
let flag = false;
let flagDot = false;
let flag0 = false;
let value = "";

function resetCalculator(curValue) {
    $("#display").val(curValue);
    flagDot = false;
    flag0 = false;
    flag = false;
}

function resultFlag(res) {
    if (res) {
        resetCalculator("");
        result = false;
    };
}

$(".num-btn").click(function () {
    resultFlag(result);
    flag = false;
    value = $(this).val();
    if (flag0) value = "";
    $("input").val($("input").val() + value);
});

$(".function-btn").click(function () {
    resultFlag(result);
    flagDot = false;
    value = $(this).val();
    if (flag) value = "";
    $("input").val($("input").val() + value);
    flag = true;
});

$(".zerro").click(function () {
    resultFlag(result);
    value = $(this).val();
    if (flag0) value = "";
    if ($("input").val() == "") {
        flag0 = true;
        value = $(this).val();
    };
    $("input").val($("input").val() + value);
    flag = false;
});

$(".dot").click(function () {
    resultFlag(result);
    flag0 = false;
    value = $(this).val();
    if (flagDot) value = "";
    if (($("input").val() == "") || flagDot == false) {
        value = $(this).val();
    };
    $("input").val($("input").val() + value);
    flag = false;
    flagDot = true;
});

$(".equals-btn").click(function () {
    let resultDispl = eval($("input").val());
    $("input").val(resultDispl);
    result = true;
});

$(".clear-btn").click(function () {
    resetCalculator("");
});

$(".clear-last-btn").click(function () {
    $("input").val($("input").val().substr(0, $("input").val().length - 1));
    resultFlag(result);
})