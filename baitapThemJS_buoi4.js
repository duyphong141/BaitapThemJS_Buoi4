//! Bài tập 5: Tính ngày tháng năm


document.getElementById('btnHomQua').onclick = function () {
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);

    var ketQua = '';

    if (ngay == 1 && thang == 1) {
        nam -= 1;
        ngay = 31;
        thang = 12;
        ketQua = ngay + '/' + thang + '/' + nam;
    } else if (ngay == 1 && thang == 2) {
        ngay = 31;
        thang = 1;
        ketQua = ngay + '/' + thang + '/' + nam;
    } else if (ngay == 1 && thang == 3) {
        ngay = 28;
        thang = 2;
        ketQua = ngay + '/' + thang + '/' + nam;
    } else if (ngay == 1 && thang == 4) {
        ngay = 31;
        thang = 3;
        ketQua = ngay + '/' + thang + '/' + nam;
    } else if (ngay == 1 && thang == 5) {
        ngay = 30;
        thang = 4;
        ketQua = ngay + '/' + thang + '/' + nam;
    } else if (ngay == 1 && thang == 6) {
        ngay = 31;
        thang = 5;
        ketQua = ngay + '/' + thang + '/' + nam;
    } else if (ngay == 1 && thang == 7) {
        ngay = 30;
        thang = 6;
        ketQua = ngay + '/' + thang + '/' + nam;
    } else if (ngay == 1 && thang == 8) {
        ngay = 30;
        thang = 7;
        ketQua = ngay + '/' + thang + '/' + nam;
    } else if (ngay == 1 && thang == 9) {
        ngay = 31;
        thang = 8;
        ketQua = ngay + '/' + thang + '/' + nam;
    } else if (ngay == 1 && thang == 10) {
        ngay = 30;
        thang = 9;
        ketQua = ngay + '/' + thang + '/' + nam;
    } else if (ngay == 1 && thang == 11) {
        ngay = 31;
        thang = 10;
        ketQua = ngay + '/' + thang + '/' + nam;
    } else if (ngay == 1 && thang == 12) {
        ngay = 30;
        thang = 11;
        ketQua = ngay + '/' + thang + '/' + nam;
    } else if (ngay <= 0 || ngay > 31) {
        ketQua = 'Ngày không xác định'
    } else if (thang <= 0 || thang > 12) {
        ketQua = 'Tháng không xác định'
    } else if (nam < 0) {
        ketQua = 'Năm không xác định'
    } else if (thang == 2 && ngay > 28) {
        ketQua = 'Ngày không xác định'
    } else {
        ngay -= 1;
        ketQua = ngay + '/' + thang + '/' + nam;
    }

    document.getElementById('hienThiNgay').innerHTML = ketQua;
}


document.getElementById('btnNgayMai').onclick = function () {
    var ngay = Number(document.getElementById('ngay').value);
    var thang = Number(document.getElementById('thang').value);
    var nam = Number(document.getElementById('nam').value);

    var ketQua = '';

    if (ngay == 31 && thang == 1) {
        ngay = 1;
        thang = 2;
    } else if (ngay == 28 && thang == 2) {
        ngay = 1;
        thang = 3;
    } else if (ngay == 31 && thang == 3) {
        ngay = 1;
        thang = 4;
    } else if (ngay == 30 && thang == 4) {
        ngay = 1;
        thang = 5;
    } else if (ngay == 31 && thang == 5) {
        ngay = 1;
        thang = 6;
    } else if (ngay == 30 && thang == 6) {
        ngay = 1;
        thang = 7;
    } else if (ngay == 31 && thang == 7) {
        ngay = 1;
        thang = 8;
    } else if (ngay == 31 && thang == 8) {
        ngay = 1;
        thang = 9;
    } else if (ngay == 30 && thang == 9) {
        ngay = 1;
        thang = 10;
    } else if (ngay == 31 && thang == 10) {
        ngay = 1;
        thang = 11;
    } else if (ngay == 30 && thang == 11) {
        ngay = 1;
        thang = 12;
    } else if (ngay == 31 && thang == 12) {
        nam += 1;
        ngay = 1;
        thang = 1;
    }

    else if (ngay > 0) {
        ngay += 1;
    }

    ketQua = ngay + '/' + thang + '/' + nam;

    if (ngay <= 0 || ngay > 31) {
        ketQua = 'Ngày không xác định'
    }
    if (thang <= 0 || thang > 12) {
        ketQua = 'Tháng không xác định'
    }
    if (nam <= 0) {
        ketQua = 'Năm không xác định'
    }
    if (thang == 2 && ngay > 28) {
        ketQua = 'Ngày không xác định'
    }

    document.getElementById('hienThiNgay').innerHTML = ketQua;
}

//! Bài tập 6: Tính ngày
document.getElementById('btnTinhNgay').onclick = function () {
    var thang = Number(document.getElementById('nhapThang').value);
    var nam = Number(document.getElementById('nhapNam').value);
    var soNgay = 0;
    var ketQua = '';

    if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
        soNgay = 31;
    } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
        soNgay = 30;
    } else if (thang == 2) {
        if ((nam % 4 == 0 && nam % 100 != 0) || (nam % 400 == 0)) {
            soNgay = 29;
        } else {
            soNgay = 28;
        }
    } else {
        soNgay = 0;
    }
    ketQua = 'Tháng ' + thang + ' năm ' + nam + ' có ' + soNgay + ' ngày';
    document.getElementById('hienThiNgayBai6').innerHTML = ketQua;
}

//! Bài tập 7: Đọc số
document.getElementById('btnDocSo').onclick = function() {
    var num = Number(document.getElementById('nhapSo').value);
    var soHangTram = 0;
    var soHangChuc = 0;
    var soHangDonVi = 0;
    var ketQua = '';
    
    soHangTram = Math.floor(num/100);
    var soDu = num % 100;
    soHangChuc = Math.floor(soDu/10);
    soHangDonVi = soDu % 10;

    if (soHangTram == 1) {
        ketQua += 'một trăm';
    } else if (soHangTram == 2) {
        ketQua += 'hai trăm';
    } else if (soHangTram == 3) {
        ketQua += 'ba trăm';
    } else if (soHangTram == 4) {
        ketQua += 'bốn trăm';
    } else if (soHangTram == 5) {
        ketQua += 'năm trăm';
    } else if (soHangTram == 6) {
        ketQua += 'sáu trăm';
    } else if (soHangTram == 7) {
        ketQua += 'bảy trăm';
    } else if (soHangTram == 8) {
        ketQua += 'tám trăm';
    } else if (soHangTram == 9) {
        ketQua += 'chín trăm';
    } else (
        alert('số hàng trăm không xác định được')
    )

    if (soHangChuc == 1) {
        ketQua += ' mười';
    } else if (soHangChuc == 2) {
        ketQua += ' hai mươi';
    } else if (soHangChuc == 3) {
        ketQua += ' ba mươi';
    } else if (soHangChuc == 4) {
        ketQua += ' bốn mươi';
    } else if (soHangChuc == 5) {
        ketQua += ' năm mươi';
    } else if (soHangChuc == 6) {
        ketQua += ' sáu mươi';
    } else if (soHangChuc == 7) {
        ketQua += ' bảy mươi';
    } else if (soHangChuc == 8) {
        ketQua += ' tám mươi';
    } else if (soHangChuc == 9) {
        ketQua += ' chín mươi';
    } 

    if (soHangDonVi == 1) {
        ketQua += ' mốt';
    } else if (soHangDonVi == 2) {
        ketQua += ' hai';
    } else if (soHangDonVi == 3) {
        ketQua += ' ba';
    } else if (soHangDonVi == 4) {
        ketQua += ' bốn';
    } else if (soHangDonVi == 5) {
        ketQua += ' năm';
    } else if (soHangDonVi== 6) {
        ketQua += ' sáu';
    } else if (soHangDonVi == 7) {
        ketQua += ' bảy';
    } else if (soHangDonVi == 8) {
        ketQua += ' tám';
    } else if (soHangDonVi == 9) {
        ketQua += ' chín';
    } 

    document.getElementById('hienThiSo').innerHTML = ketQua;
}

//! Bài tập 8: Tìm sinh viên xa trường nhất
document.getElementById('btnTim').onclick = function() {
    var ten1 = document.getElementById('ten1').value;
    var ten2 = document.getElementById('ten2').value;
    var ten3 = document.getElementById('ten3').value;
    var toaDoX1 = Number(document.getElementById('toaDoX1').value);
    var toaDoX2 = Number(document.getElementById('toaDoX2').value);
    var toaDoX3 = Number(document.getElementById('toaDoX3').value);
    var toaDoY1 = Number(document.getElementById('toaDoY1').value);
    var toaDoY2 = Number(document.getElementById('toaDoY2').value);
    var toaDoY3 = Number(document.getElementById('toaDoY3').value);
    var toaDoX = Number(document.getElementById('toaDoX').value);
    var toaDoY = Number(document.getElementById('toaDoY').value);

    var d1 = 0;
    var d2 = 0;
    var d3 = 0;
    var ketQua = '';
    d1 = Math.sqrt(Math.pow(toaDoX1 - toaDoX, 2) + Math.pow(toaDoY1 - toaDoY, 2));
    d2 = Math.sqrt(Math.pow(toaDoX2 - toaDoX, 2) + Math.pow(toaDoY2 - toaDoY, 2));
    d3 = Math.sqrt(Math.pow(toaDoX3 - toaDoX, 2) + Math.pow(toaDoY3 - toaDoY, 2));
    // console.log(d1)
    if (d1 > d2 && d1 > d3) {
        ketQua = 'Sinh viên xa trường nhất: ' + ten1;
    } else if (d2 > d1 && d2 > d3) {
        ketQua = 'Sinh viên xa trường nhất: ' + ten2;
    } else if (d3 > d1 && d3 > d2) {
        ketQua = 'Sinh viên xa trường nhất: ' + ten3;
    }

    document.getElementById('hienThiTen').innerHTML = ketQua;
}