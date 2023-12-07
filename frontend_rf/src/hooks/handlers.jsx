export const makeObject = (response) => {
  let array = [];
  response.map((value) => {
    array.push({
      value: value,
      label: value,
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
      { value: 1, label: "12:00pm" },
      { value: 2, label: "13:00pm" },
      { value: 3, label: "14:00pm" }
    );
  }
  if (response.strip2 > 0) {
    array.push(
      { value: 4, label: "18:00pm" },
      { value: 5, label: "19:00pm" },
      { value: 6, label: "20:00pm" }
    );
  }
  return array.sort((a, b) => (a.value > b.value ? 1 : -1));
};

export const makeObjectPeople = (response) => {
  console.log(response);
  let array = [];
  if (response.strip1 > 0) {
    array.push(
      { value: 1, label: "12:00pm" },
      { value: 2, label: "13:00pm" },
      { value: 3, label: "14:00pm" }
    );
  }
  if (response.strip2 > 0) {
    array.push(
      { value: 4, label: "18:00pm" },
      { value: 5, label: "19:00pm" },
      { value: 6, label: "20:00pm" }
    );
  }
  return array.sort((a, b) => (a.value > b.value ? 1 : -1));
};
