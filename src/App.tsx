import React, { useState, useEffect} from 'react';
import Pages, { Books } from "./pages";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    backgroundColor: "blue",
  },
});

function App() {
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState({students:[]}) ;

   const classes = useStyles();
  // this hook is used when we need any function or event to take plave only for once(replacement of componentDidMount)
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const url = "https://api.hatchways.io/assessment/students";
    const response = await fetch(url);
    const dataArray = await response.json();
    setData(dataArray);
    setLoading(false);
    console.log("data", dataArray.students[0]);
  };



  return (
  <>
    {isLoading  
      ? <div>loading...</div> 
      : <div className={classes.container}>{data.students.map(item => (
          <>
            <img src={item["pic"]} />
            <h1>{item["city"]}</h1>
            <h1> {item["company"]}</h1> 
            <h1>{item["email"]} </h1>
            <h1>{item["firstName"]} </h1>
            <h1>{item["grades"]} </h1></>
            ))}
        </div>
      }
  </>
  );
}
// function App() {
//   const [count, setCount] = useState(0);

//   setTimeout(() => { setCount(count + 1); }, 1000);

//   return (
//     <h1>
//       {count}
//     </h1>
//   );
// }

export default App;
