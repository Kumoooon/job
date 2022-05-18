function test() {
  if (!confirm("정말 삭제하시겠습니까?")) {
    location.href = "/employeeManagement-Edit.html";
  } else {
    location.href = "/employeeManagement.html";
  }
}
function test2() {
  if (!confirm("정말 삭제하시겠습니까?")) {
    location.href = "/annualManagement-Edit.html";
  } else {
    location.href = "/annualManagement.html";
  }
}
