`
const showModal = alert;
showModal("Execute modal"); // *
//จะ alert Execute modal

`;
const showModal = alert();
showModal("Execute modal"); // **
//จะ alert ' ' เพราะ alert มีวงเล็บที่ไม่มีค่าภายใน
