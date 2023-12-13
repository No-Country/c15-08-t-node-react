import moment from "moment";
export const makeObject = (response) => {
  let array = [];
  response.map((value) => {
    array.push({
      value: moment(value).format("DD/MM/YYYY"),
      label: moment(value).format("DD/MM/YYYY"),
    });
  });
  return array.sort((a, b) => (a.value > b.value ? 1 : -1));
};

const optionstime = [
  { value: 1, label: "12:00pm" },
  { value: 2, label: "13:00pm" },
  { value: 3, label: "14:00pm" },
  { value: 4, label: "18:00pm" },
  { value: 5, label: "19:00pm" },
  { value: 6, label: "20:00pm" },
];

export const makeObjectTime = (response) => {
  console.log(response);
  let array = [];
  if (response.strip1 > 0) {
    array.push(
      { value: 1, label: "11:30" },
      { value: 2, label: "12:00" },
      { value: 3, label: "12:30" },
      { value: 4, label: "13:00" }
    );
  }
  if (response.strip2 > 0) {
    array.push(
      { value: 5, label: "20:30" },
      { value: 6, label: "21:00" },
      { value: 7, label: "21:30" },
      { value: 8, label: "22:00" }
    );
  }
  return array.sort((a, b) => (a.value > b.value ? 1 : -1));
};

export const makeObjectPeople = (response) => {
  console.log(response);
  let array = [];
  for (let i = 1; i <= response; i++) {
    array.push({
      value: i,
      label: `${i}`,
    });
  }
  return array.sort((a, b) => (a.value > b.value ? 1 : -1));
};
