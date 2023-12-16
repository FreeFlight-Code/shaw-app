const products = [
  {
    id: 1,
    name: "Monthly product 1",
    recurring: true,
    price: 39.99,
  },
  {
    id: 2,
    name: "Monthly product 2",
    recurring: true,
    price: 139.99,
  },
];

const questions = [
  { queryId: "numEmployees", question: "How many employees do you have?" },
  { queryId: "numClaims", question: "How many unemployment claims do you expect a year? Put 0 if you want to use the industry average." },
];

const config = {
  title: "SIR Company Pricing Assessment",
  products,
  questions: questions.map((q, i)=>{
    return {
      ...q,
      id: i,
      complete: false
    }
  }),
  getPrice: (employees, claims)=>{
    employees = parseInt(employees);
    claims = parseInt(claims);
    const sirCost = 25;
    if(!employees) employees = 25;
    if(!claims && employees >= 50) claims = 9;
    if(!claims || claims < 6)claims = 6;
    const grossCost = claims * sirCost;
    const total = grossCost * 2;
    return [total.toFixed(2), parseFloat(total/12).toFixed(2)];
  }
}

export default config;
