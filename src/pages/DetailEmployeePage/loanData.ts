export type LoanData = {
  borrowed: number;
  received: number;
  date: Date;
};

function randomDate(start: Date, end: Date = new Date()) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
function getRandomArbitrary(min = 0, max = 250000) {
  return Math.random() * (max - min) + min;
}
const loanDataGenerator = (): Array<LoanData> => {
  const bigList = [...Array(10)].map(() => ({
    date: randomDate(new Date(2012, 0, 1)),
    borrowed: getRandomArbitrary(),
    received: getRandomArbitrary(),
  }));
  return bigList;
};

type groupType = { [x: string]: any };

let groupsRet: groupType = {};

export const loanData = () => {
  let loanData = loanDataGenerator();
  const groups = loanData.reduce((groups, data) => {
    const date = data.date.getFullYear();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(data);
    return groups;
  }, groupsRet);

  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      loans: groups[date],
    };
  });
  console.log(groupArrays);
  return groupArrays;
};
