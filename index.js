function updateValue(val) {
    document.getElementById('range').value = val;

    return document.getElementById('dollar').innerHTML = "$" + val + ".00";
}

function updateCheck(value) {
    let checkVal = document.querySelector('#check').checked

    if (checkVal == true) {
        document.getElementById('per-month').innerHTML = updateValue(value) + "/year"
    }
}