const input = [531461, 123643];
const regExCase1 = /^(\d).{5,}$/;
const regExCase2 = /(\d).*\1/g;
const regExCase3 = /(\d)(?=\d\1)/g;
const regExCase4 = /(\d)\1+/g;
let testCase = {
  case1: false,
  case2: false,
  case3: false,
  case4: false,
};

const validateCallResult = (input) => {
  for (let i = 0; i < input.length; i++) {
    regExCase1.test(input[i])
      ? (testCase.case1 = true)
      : (testCase.case1 = false);
    if (testCase.case1) {
      const case2 = regExCase2.test(input[i]);
      if (case2) {
        let thisInput = input[i].toString();
        let pairs = [];
        const regex = /(\d)\1/g;
        for (let j = 0; j < thisInput.length; j += 2) {
          let pair = thisInput[j] + thisInput[j + 1];
          pairs.push(pair);
        }
        for (let x = 0; x < pairs.length; x++) {
          if (pairs[x] && pairs[x + 1] && pairs[x + 2]) {
            regex.test(pairs[x]) && !regex.test(pairs[x+1]) && regex.test(pairs[x+2]) ? testCase.case2 = false : testCase.case2 = true;
          }
        }
      }
      const case4 = input[i].toString().match(regExCase4);
      if (case4 !== null) {
        case4.length < 3 ? (testCase.case4 = true) : (testCase.case4 = false);
      }
    }
    console.log(`TestCase Input: ${input[i]}`);
    console.log("Case1", testCase.case1 ? "✅" : "❌");
    console.log("Case2", testCase.case2 ? "✅" : "❌");
    console.log("Case3", testCase.case3 ? "✅" : "❌");
    console.log("Case4", testCase.case4 ? "✅" : "❌");
  }
};

validateCallResult(input);
