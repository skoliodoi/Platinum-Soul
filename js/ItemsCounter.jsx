import React from 'react';
import SingleTrophy from './models/SingleTrophy.js'


export default class ItemsCounter extends React.Component{

    render(){
        const isSingle = this.props.trophy instanceof SingleTrophy;
        if (isSingle){
            const checkedCount = this.props.checked.filter(item => this.props.trophy.elements.map(e=>e.name).indexOf(item) !== -1).length
            const count = this.props.trophy.elements.length;
    
            return <div className='itemsCounter'>{checkedCount}/{count}</div>

        } else {
            return null;
        }
        
    }
    
}