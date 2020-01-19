import React , {Component} from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    componentWillUpdate(){
        console.log('order Summary will update');
    }
   
    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (<li key={igKey+1}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li> ); 
        });
            return ( 
             <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following  ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price : {this.props.price.toFixed(2)}$</strong></p>
            <p>Continue to Checkout ? </p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        );
    }
}


 

export default OrderSummary;