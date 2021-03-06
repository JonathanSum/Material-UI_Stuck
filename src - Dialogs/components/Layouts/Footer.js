import React from 'react';
import {Paper,Tabs,Tab} from '@material-ui/core';
export default ({muscles,category,onSelect}) =>{
    //finding the index from onChange method in store.js by muscles varible
    const index= category
    ? muscles.findIndex(group=> group===category)+1
    :0
    const onIndexSelect = (e,index)=>{
        onSelect(index===0?'':muscles[index-1])
    }


return<Paper>
        <Tabs
            value={index}
            onChange={onIndexSelect}


            indicatorColor="primary"
            textColor="primary"
            centered
        >
        <Tab label="All"/>
            {muscles.map((group,index)=>
         //rest of Tab, except All
         <Tab label={group} key={index}/>
                )}
        </Tabs>
    </Paper>

    }
