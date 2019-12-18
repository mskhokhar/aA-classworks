import Clock from './clock';
import Tabs from './tabs';
import React from 'react';


class Root extends React.Component{
    render(){
        const tab = [
            {title: 'one', content: 'Anything 1'},
            {title: 'two', content: 'Anything 2'},
            {title: 'three', content: 'Anything 3'}
        ];
        return (
           <div>
                <Clock />
                <Tabs tab={tab}/>
           </div>
        );
    }
        
    
}
export default Root;