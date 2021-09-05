let range = $('#range');

range.on("input", function () {
    $('#dollar').val(this.value);
}).trigger("change");
