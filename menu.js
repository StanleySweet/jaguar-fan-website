var divList = [
    "home",
];

function showDiv(divName) {
    for (var div of divList)
    {
        $(`#${div}`).hide();
    }

    $(`#${divName}`).show();
}
