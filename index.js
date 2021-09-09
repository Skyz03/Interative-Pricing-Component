
function updateCheck() {

    console.log(updateValue());

    let checkVal = document.querySelector('#check').checked

    if (checkVal == true) {
        document.getElementById('per-month').innerHTML = updateValue() + "/year"
    }
}

function updateValue(val) {
    val = document.getElementById('range').value

    return document.getElementById('dollar').innerHTML = "$" + val + ".00";
}


