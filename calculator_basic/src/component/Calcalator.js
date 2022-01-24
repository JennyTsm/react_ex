import React, { useState } from 'react';
import '../style/Calculator.css';

export default function Calcuator() {
    const [Result, setResult] = useState({
        "number1": "",
        "number2": "",
        "result": 0
    });

    const [OP, setOP] = useState("");

    const [monValue, setmonValue] = useState("0");

    function HandleNumber(value) {
        //alert(value);
        let temp = "";
        debugger;

        if (OP == "") {
            temp = Result["number1"];
            temp += value;
            setResult((prevResult) => ({
                ...prevResult,
                "number1": temp
            }))
           
        } else {
            temp = Result["number2"];
            temp += value;
            setResult((prevResult) => ({
                ...prevResult,
                "number2": temp
            }));          

        }

        setmonValue(temp);
    }

    function findResult() {
        let ans = 10;
        debugger;
        switch (OP) {
            case '+':
                ans = parseInt(Result["number1"]) + parseInt(Result['number2']);
                break;
            case '-':
                ans = parseInt(Result["number1"]) - parseInt(Result['number2']);
                break;
            case '*':
                ans = parseInt(Result["number1"]) * parseInt(Result['number2']);
                break;
            case '/':
                ans = parseInt(Result["number1"]) / parseInt(Result['number2']);
                break;
            default:
                break;
        }
        setResult((prevResult) => ({
            ...prevResult,
            "result": ans
        }))

        setmonValue(ans);
    }

    function reset() {

        setResult({
            "number1": "",
            "number2": "",
            "result": 0
        });

        setOP("");

        setmonValue("0");
    }

    function changeSign(){
        //alert("ok");
    }

    return (
        <div className='Calcuator'>
            <input type={"type"} className='mon' value={monValue} disabled />
            <div className='grid-container'>

                <div className='grid-item' onClick={() => HandleNumber("1")}>1</div>
                <div className='grid-item' onClick={() => HandleNumber("2")}>2</div>
                <div className='grid-item' onClick={() => HandleNumber("3")}>3</div>
                <div className='grid-item' onClick={() => setOP("+")}>+</div>

                <div className='grid-item' onClick={() => HandleNumber("4")}>4</div>
                <div className='grid-item' onClick={() => HandleNumber("5")}>5</div>
                <div className='grid-item' onClick={() => HandleNumber("6")}>6</div>
                <div className='grid-item' onClick={() => setOP("-")}>-</div>

                <div className='grid-item' onClick={() => HandleNumber("7")}>7</div>
                <div className='grid-item' onClick={() => HandleNumber("8")}>8</div>
                <div className='grid-item' onClick={() => HandleNumber("9")}>9</div>
                <div className='grid-item' onClick={() => setOP("*")}>*</div>

                <div className='grid-item' onClick={() => HandleNumber(".")}>.</div>
                <div className='grid-item' onClick={() => HandleNumber("0")}>0</div>
                <div className='grid-item' onClick={findResult}>=</div>
                <div className='grid-item' onClick={() => setOP("/")}>/</div>

                <div className='grid-item test' onClick={reset}>AC</div>
                <div className='grid-item' onClick={changeSign}>+/-</div>
                <div className='grid-item'>%</div>

            </div>
        </div>
    )
}
