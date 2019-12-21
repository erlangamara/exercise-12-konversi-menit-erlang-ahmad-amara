function konversiMenit(menit){
    if (menit >= 60){
       menitJam = menit / 60;
       jam = Math.floor(menitJam);
       transformasiMenit = menit - jam * 60;
       if (transformasiMenit < 10){
           return jam + ':0' + transformasiMenit;
       } else if (transformasiMenit >= 10){
           return jam + ':' + transformasiMenit;
       }
    } else if (menit < 60 && menit >= 10){
        return '0:' + menit;
    } else if (menit < 10){
        return '0:0' + menit;
    }
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));