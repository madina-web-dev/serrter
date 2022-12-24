let hafta = +prompt("Hafta kunlari sonni kiriting:")

let qoldiq = hafta % 7


if ((hafta == 1)||(qoldiq == 1)){
    document.write("dushanba")
}

else if ((hafta == 2)||(qoldiq == 2)){
    document.write("seshanba")
}

else if ((hafta == 3)||(qoldiq == 3)){
    document.write("chorshanba")
}

else if ((hafta == 4)||(qoldiq == 4)){
    document.write("payshanba")
}

else if ((hafta == 5)||(qoldiq == 5)){
    document.write("juma")
}

else if ((hafta == 6)||(qoldiq == 6)){
    document.write("shanba")
}

else if ((hafta == 7)||(qoldiq == 7)){
    document.write("yakshanba")
}