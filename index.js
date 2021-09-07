function updateValue(val) {
    document.getElementById('range').value = val;

    document.getElementById('dollar').innerHTML = "$" + val + ".00";
}