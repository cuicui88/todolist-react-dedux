import React from 'react';
import {connect} from 'react-redux';

const Todolist = (props)=>{
    const {inputValue,changeInputValue,handleClick,list} = props;
        return(
            <div>
                <div>
                    <input value={inputValue} onChange={changeInputValue}/>
                    <button onClick={handleClick}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>     
            </div>    
        )
}

//把store里面的数据映射给组件，变成组件的props，state指store里的数据
const mapStateToProps = (state)=>{
    return{
        inputValue : state.inputValue,
        list: state.list
    }
}
//将store.dispatch映射到props上
const mapDispatchToProps = (dispatch)=>{
    return{
        changeInputValue(e){
            const action={
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick(){
            const action = {
                type: 'add_item'
            }
            dispatch(action); 
        }
    }
}
//第一个参数表示连接的规则，
export default connect(mapStateToProps,mapDispatchToProps)(Todolist);//让Todolist和store做连接
//而Todolist实际上是一个UI组件，而connect将UI组件和业务逻辑结合，返回了一个容器组件