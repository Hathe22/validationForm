// kiểm tra box có rỗng hay không
function checknull(txt) {
  if (txt.value.length == 0) return true;
  else return false;
}

//  kiểm tra xem input có phải là số nguyên không
function isInteger(txt) {
  if (!isNaN(txt.value) && parseInt(txt.value) === Number(txt.value))
    return true;
  else return false;
}

//  kiểm tra xem input có đúng với biểu thức chính quy hay không
function StringMatch(txt, reg) {
  return reg.test(txt.value);
}

// kiểm tra xem đã chọn giới tính trong radio hay chưa
function notCheck(radio) {
  var check = true;
  for (i = 0; i < radio.length; i++) if (radio[i].checked) check = false;
  return check;
}

// kiểm soát dữ liệu vào form
function validform(f) {
  if (checknull(f.fullname)) {
    alert(f.fullname.name + " must be not null");
    f.fullname.focus();
    return;
  }
  if (checknull(f.age)) {
    alert(f.age.name + " must be not null");
    f.age.focus();
    return;
  }
  if (isNaN(f.age.value)) {
    alert(f.age.name + " must be a number");
    f.age.value = "";
    f.age.focus();
    return;
  }
  if (!isInteger(f.age)) {
    alert(f.age.name + " must be an integer number");
    f.age.value = "";
    f.age.focus();
    return;
  }
  if (eval(f.age.value) <= 0 || eval(f.age.value) >= 200) {
    alert(f.age.name + " must be in (0-200)");
    f.age.value = "";
    f.age.focus();
    return;
  }
  if (notCheck(f.gender)) {
    alert("gender must be chose");
    return;
  }
  if (
    !StringMatch(
      f.phone,
      /^(\\+84|0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-6]|9[0-9])[0-9]{7}$/
    )
  ) {
    alert("not valid  (example: 0362909853)");
    return;
  }
}
