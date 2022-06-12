import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    main: {
      backgroundColor: "rgb(239, 239, 239)",
      display: "flex",
      justifyContent: "center",  
    },
    sub_container: {   
      margin:'10vh',
      padding:'0px',
      height: '79vh',
      width: '60vw',
      backgroundColor: "white",
      // alignItems: 'center',
      overflowY: 'auto',
      msOverflowStyle:'none',//hide scrollbar firefox
      scrollbarWidth:'none',//hide scrollbar firefox
      border: '1px solid lightgray',
      fontFamily:'Raleway',  
      //hide scrollbar in chrome(we use & bcoz we define it inside rows_container)
      "&::-webkit-scrollbar": {
        display:'none'
      }     
    },
    textFields: {
      zIndex: 1,
      padding: '10px',
      paddingBottom: '0px',
      fontFamily:'Raleway', 
      position:'sticky', 
      top: 0,
      backgroundColor:'white'
    },
    nameField: {
      marginBottom: '10px'
    },
    tagField: {

    },
    row_conatainer: {
      padding: '15px',
      display: 'flex',
      flexDirection: 'row',
      borderBottom: '1px solid lightgray',
      // fontSize: '15px',
    },
    img: {
      height: '15vh',
      margin: '20px',
      width:'18vh',
      borderRadius: '50%',
      border: '1px solid lightgray',
      overflow: 'hidden',
      display: 'flex',
    },
    student_name: {
      paddingLeft: '40px',
      display: "flex",
      justifyContent: "space-between"
    },
    student_details: {
      width: "100%",
    },
    h1: {
      margin: '0px',
    },
    h4: {
      color: 'gray',
      margin: '0px',
    }, 
    student_subdetails: {
      paddingLeft: '60px',
    },
    accordion_body: {
      color: 'gray',
      paddingLeft: '60px',
     },
  });

  export { useStyles };
