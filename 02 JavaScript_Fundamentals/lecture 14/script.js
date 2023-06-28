//SWITCH STATEMENT

const day = 'sunday';

switch (day) {
  case 'monday': // day === monday
    console.log("Plan to go gym");
    console.log("Plan to code");
    break;
  case 'tuesday':
    console.log("prepare food");
    break;
  case 'wednesday':
  case 'thursday':
    console.log("write code examples");
    break;
  case 'friday':
    console.log("shopping");
    break;
  case 'saturday':
  case 'sunday':
    console.log("sleep");
    break
  default:
    console.log("not a valid day");
}

if (day === "monday") {
  console.log("Plan to go gym");
  console.log("Plan to code");
} else if (day === "tuesday") {
  console.log("prepare food");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("shopping");
} else if (day === "saturday" || day === "sunday")  {
  console.log("sleep");
} else {
  console.log("not a valid day");
}
