import {ListItem} from '../components/list-item.js';
function createElements(array,handleCheck,targetKey){
    return array.map((task,index)=>{
        return <ListItem key = {index} keyValue={index} task={task} targetKey={targetKey} onClick={handleCheck}/>
       })
}

export {createElements}