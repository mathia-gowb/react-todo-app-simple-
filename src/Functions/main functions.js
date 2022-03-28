import {ListItem} from '../components/list-item.js';
function createElements(array,eventHandler,deleteHandler){
    
    return array.map((task,index)=>{
        return <ListItem key = {index} keyValue={index} task={task} onClick={eventHandler.handleCheck} onDelete={deleteHandler}/>
    })
    

}
/* this function accepts the statesetter function 
and returns different eventhandlers which has access to the stateSetter function */
const eventHandlers={
 
        getTargetParentId(event){
            let parentKey=event.target.dataset.parentkey;
            
            return parentKey;
        },
        handleCheck(event){
            /* cycle through all elements*/
            const parentId=eventHandlers.getTargetParentId(event);
            const parent=document.getElementById(`${parentId}`);
            
            if(parent.classList.contains('complete')){
                parent.classList.remove('complete')
                parent.classList.add('not-complete')
            }else{
                parent.classList.add('complete')
                parent.classList.remove('not-complete')
            }
        }
  
}
export {createElements,eventHandlers}