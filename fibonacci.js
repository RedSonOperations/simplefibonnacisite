function fibonacci(n) {
    var arr = [];
    var i = 0;
    for (i; i < n; i++) {
        arr[i] = i;
        if (i >= 2) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
    }
    return arr;
}

function generateSequence() {
    var num = document.getElementById("userInput").value;
    var sequence = fibonacci(num);
    var list = document.getElementById("fibSequence");
    list.innerHTML = "";
    for (var i = 0; i < sequence.length; i++) {
        var item = document.createElement("li");
        item.innerText = sequence[i];
        list.appendChild(item);
    }
}
