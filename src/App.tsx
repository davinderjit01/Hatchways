import React, { useState, useEffect} from 'react';
import { findByLabelText } from '@testing-library/react';
import { Button, Grid, Hidden, IconButton, TextField } from '@material-ui/core';
import { useStyles } from './styles';
import { Student } from './student';


  function App() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({students:[]});

    const classes = useStyles();
    
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
    <div className={classes.main}>
      {isLoading  
        ? <h1>loading...</h1> 
        : <ul className={classes.sub_container}>

            <div className={classes.textFields}>
              <TextField className={classes.nameField}
                  fullWidth
                  type="text" id="name"
                  variant="standard" 
                  placeholder="Search by name" 
                  title="Type in a name">             
                </TextField>
                <TextField className={classes.tagField}
                  fullWidth
                  type="text" id="tag"
                  variant="standard" 
                  placeholder="Search by tag" 
                  title="Type in a tag">
                </TextField>
            </div>

            {data.students.map((item) => <Student key={item["id"]} item={item}/>)}
            
          </ul>
      }
    </div>
    );
  }

  export default App;
