import { h, Component } from 'preact';
import style from './style';
import DisplayBar from '../displayBar';
import IconButtonGrid from '../iconButtonGrid';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentExpressionString:"4",
            firstNum:"",
            operand:"",
            secondNum:""
        };
        this.handlers = {
            evaluateExpression:(firstNum,operand,secondNum)=>{
                if(firstNum===undefined||firstNum===""){
                    throw new Error("First number must be defined");
                 };
                if(operand===undefined||operand===""){
                    throw new Error("Operand must be defined");
                };
                if(secondNum===undefined||secondNum===""){
                    throw new Error("Second number must be defined")
                };
               let fn = firstNum.toString();
               let op = operand.toString();
               let sn = secondNum.toString();
               let execString = `${fn} ${op} ${sn}`;
               return eval(execString);
            },
            handleOperandClick:(operand)=>{
                console.log("clicked on operand!");
                if(this.state.operand===""||this.state.operand===undefined){
                    console.log("operand returned");
                    //need to update state to set operand
                }else if(state.operand!==""&&state.operand!==undefined){
                    console.log("operand already defined");
                    //test if second number
                    //eval if true
                }
            },
            handleNumberClick:(number)=>{
                console.log("clicked on number!");
            },
            handleEqualClick:()=>{
                console.log("clicked on equals");
            }
        };
    }

    render() {
        return (
            <div class={style.calculatorMainDiv}>
                <DisplayBar displayMessage={this.state.currentExpressionString}/>
                <IconButtonGrid util={this.handlers}/>
            </div>
        );
    }
}
