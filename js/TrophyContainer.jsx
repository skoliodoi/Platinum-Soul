import React from 'react';
import TrophyBox from './TrophyBox.jsx';
import SingleTrophy from './models/SingleTrophy.js';
import TrophyCounter from './TrophyCounter.jsx';
import ItemsCounter from './ItemsCounter.jsx';


export default class TrophyContainer extends React.Component{
    


    render(){
        const trophy = this.props.trophy;
        

        const isSingle = trophy instanceof SingleTrophy;
        const className = isSingle ? 'single' : 'group';


        const checkedCount = this.props.checked.filter(item => this.props.trophy.elements.map(e=>e.name).indexOf(item) !== -1).length
        const count = this.props.trophy.elements.length;

        const isComplete = checkedCount==count ? 'complete':'';

        return <div className = {`trophyContainer ${className} ${isComplete}`} id={trophy.name}>
            <div className="trophyHeadline">{trophy.name} (<TrophyCounter checked={this.props.checked} trophy={trophy}/>)</div>
            
            <ItemsCounter checked={this.props.checked} trophy={trophy}/>

            <div className="groupTrophy"></div>
            
            <div className="trophyVault">{trophy.elements.map((item)=><TrophyBox key={item.name} element={item} clickHandler={this.props.clickHandler} checked={this.props.checked.indexOf(item.name) !== -1} isTrophy={!isSingle}/>)}
            </div>
        </div>
    }
}

