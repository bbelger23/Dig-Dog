$(function () {
    $("form#digYard").on("submit", start);
    $("#squareYard").on("click", "td", dig);
});



function start(event) {
    event.preventDefault();

    let numRow = Number($("input#yard").val());
    let numCol = Number($("input#yard").val());


    let table = $("table");

    for (let tr = 1; tr <= numRow; tr++)
    {
        let row = table.append("<tr>");
        for(let td = 1; td <= numCol; td++)
        {

            row.append(`<td></td>`);

            let box = $("td");
            let randomBone = Math.random();
            if (randomBone < 0.3) {
                box.attr("class", 'hidden-bone');

                let bone = 0;
                $("td").each(function() {
                    if ( $(this).hasClass('hidden-bone')) {
                        bone++
                    }
                    $("p#msg").text(`Hidden Bones: ${bone}`);
                })


            }
            box.addClass('undug');

        }
    }
}


function dig(event) {
    event.preventDefault();

    let box = $(event.target);

    box.removeClass("undug");

    if (box.hasClass("hidden-bone")) {

        let bone = Number($("p:last").val());
        $("td").each(function() {
            if ( $(this).hasClass('hidden-bone')) {
                bone--
            }
            $("p#msg").text(`Hidden Bones: ${bone}`);
            if (bone === -1) {
                $("p#msg").text(`You found all the bones`);
            }
        })

        box.removeClass("hidden-bone");
        box.addClass("dug-bone");
    }

    box.addClass("dug");
}

for ( let bone = 0; bone < box.hasClass('hidden-bone'); bone++ ) {

    $("p#msg").text(`Hidden Bones: ${bone}`);
}