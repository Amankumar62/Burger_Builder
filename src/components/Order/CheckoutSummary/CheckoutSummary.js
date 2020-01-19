import React from 'react';

import Button from '../../UI/Button/Button'; 
import Burger from '../../Burger/Burger';
import classes from './CheckoutSummary.css';

const checkSummary = (props) => {

    return (
    <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes well !</h1>
        <div style ={{width:'100%' , margin: 'auto'}}>
            <Burger ingredients={props.ingredients}/>
        </div>
        <Button btnType="Danger"
        clicked={props.checkoutCancelled}>CANCEL</Button>
        <Button btnType="Success"
        clicked={props.checkoutContinued}> CONTINUE</Button>
    </div>
    );
}

export default checkSummary;