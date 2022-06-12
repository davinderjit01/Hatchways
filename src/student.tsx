import { Button } from "@material-ui/core";
import { useStyles } from './styles';
import React, { useState } from "react";
import { average } from "./services/data";

export const Student = (props: any) => { 
    const { item } = props;
    const [isOpen, setIsOpen] = useState(false)
    const classes = useStyles();

    const onIndicatorPress = () => {
        setIsOpen(!isOpen);
      }

    return (
    <li className={classes.row_conatainer}>
        
        <div className={classes.img}>
            <img alt="img" src={item["pic"]} />
        </div>
        
        <div className={classes.student_details}>

            <div className={classes.student_name}>
                <h1 className={classes.h1}>{item["firstName"]} {item["lastName"]}</h1>
                <Button 
                    onClick={()  => {onIndicatorPress()}} 
                    style={{fontSize: '30px', padding: '0px', color: 'gray', fontWeight: 'bolder'}}
                    type="button">
                        {isOpen ? '-' : '+'}
                </Button>                     
            </div>
                      
            <div className={classes.student_subdetails}>
                <h4 className={classes.h4}>Email: {item["email"]}</h4> 
                <h4 className={classes.h4}>Company: {item["company"]} </h4>
                <h4 className={classes.h4}>Skill: {item["skill"]} </h4>
                <h4 className={classes.h4}>Average: {average(item["grades"])} % </h4>
            </div>
            
            {isOpen && (
                <div className={classes.accordion_body}>
                    <h4>{item["grades"].map((value: number, index: number) => <h4 className={classes.h4}>Text{index+1}: {value}%</h4>)}</h4>
                </div>
            )}

        </div>
    </li>
    )
}