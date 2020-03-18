function changeVocals(str) {
//code di sini
    var abjadKecil = 'abcdefghijklmnopqrstuvwxyz';
    var abjadBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var ubahHuruf = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E' || str[i] === 'O') {
            for (var j = 0; j < abjadBesar.length; j++) {
                if (str[i] === abjadBesar[j]) {
                    ubahHuruf += abjadBesar[j+1];
                }
            }
        }
        else if (str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o') {
            for (var j = 0; j < abjadKecil.length; j++) {
                if (str[i] === abjadKecil[j]) {
                    ubahHuruf += abjadKecil[j+1];
                }
            }
        }
        else {
            ubahHuruf += str[i];
        }
    }
    return ubahHuruf;
}
// console.log(changeVocals('Sergei Dragunov'));

function reverseWord (ubahHuruf) {
//code di sini
    var kebalik = '';
    for (var a = ubahHuruf.length - 1; a >= 0; a--) {
        kebalik += ubahHuruf[a];
    }
    return kebalik;
}
// console.log(reverseWord(changeVocals('Sergei Dragunov')));

function setLowerUpperCase (kebalik) {
//code di sini
    var ubahUkuran = ''
    for (var i = 0; i < kebalik.length; i++) {
        if (kebalik[i] === kebalik[i].toUpperCase()) {
            ubahUkuran += kebalik[i].toLowerCase();
        }
        else {
            ubahUkuran += kebalik[i].toUpperCase();
        }
    }
    return ubahUkuran;
}
// console.log(setLowerUpperCase(reverseWord(changeVocals('Sergei Dragunov'))));

function removeSpaces (ubahUkuran) {
//code di sini
    var noSpace = '';
    for (var i = 0; i < ubahUkuran.length; i++) {
        if (ubahUkuran[i] !== ' ') {
            noSpace += ubahUkuran[i];
        }
    }
    return noSpace;
}
// console.log(removeSpaces(setLowerUpperCase(reverseWord(changeVocals('Sergei Dragunov')))));

function passwordGenerator (name) {
//code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    else {
        var ubah = changeVocals(name);
        var balikin = reverseWord(ubah);
        var gedeKecil = setLowerUpperCase(balikin);
        var balikan = removeSpaces(gedeKecil);
        return balikan;
    }
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'