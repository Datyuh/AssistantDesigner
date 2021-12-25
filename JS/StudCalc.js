var NotStFl2InId = document.getElementById('NotStFl2InId');
var textNotStFlId = document.getElementById('textNotStFlId')

var NotStFlInId = document.getElementById('NotStFlInId');
var textNotStFlId2 = document.getElementById('textNotStFlId2')
var textNotStFlId21 = document.getElementById('textNotStFlId21')

function checkedNotStFl() {
    var NotStFlInId = document.getElementById('NotStFlInId');
    var NotStFlLbId = document.getElementById('NotStFlLbId');
    if (NotStFlInId.checked === true) {
            NotStFlLbId.style.color = '#2600ff';
            NotStFl2InId.checked = false;
            textNotStFlId.disabled = false;
            textNotStFlId2.disabled = true;
            textNotStFlId21.disabled = true;
        }

    else{
        NotStFlLbId.style.color = '#ffffff';
        textNotStFlId.disabled = true;
    }
}

function checkedNotStFl2() {
    var NotStFl2InId = document.getElementById('NotStFl2InId');
    var NotStFl2LbId = document.getElementById('NotStFl2LbId');
    if (NotStFl2InId.checked === true) {
            NotStFl2LbId.style.color = '#2600ff';
            NotStFlInId.checked = false;
            textNotStFlId2.disabled = false;
            textNotStFlId21.disabled = false;
            textNotStFlId.disabled = true;
        }

    else{
        NotStFl2LbId.style.color = '#ffffff';
        textNotStFlId2.disabled = true;
        textNotStFlId21.disabled = true;
    }
}