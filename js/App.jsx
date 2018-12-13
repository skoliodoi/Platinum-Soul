import React from 'react';
import TrophyContainer from './TrophyContainer.jsx';
import Navigator from './Navigator.jsx';
import Weapons from '../assets/data/Weapons.jsx';
import Miracles from '../assets/data/Miracles.jsx';
import Sorceries from '../assets/data/Sorceries.jsx';
import Pyro from '../assets/data/Pyro.jsx';
import Covenants from '../assets/data/Covenants.jsx';
import Enhancements from '../assets/data/Enhancements.jsx';
import Story from '../assets/data/Story.jsx';
import Ending from '../assets/data/Ending.jsx';
import TrophyBox from './TrophyBox.jsx';

export default class App extends React.Component{
    constructor(props){
        super(props);
        const savedData = window.localStorage.getItem('checked');
        const checked  = savedData ? JSON.parse(savedData) : [];

        this.state= {
            checked: checked,
            complete: false,
            trophyList: [Story, Weapons, Sorceries, Pyro, Miracles, Covenants, Enhancements, Ending]
        }

        setTimeout(() => {
            this.checkComplete(checked);
        }, 100);

        

    }

    toggleBox(trophyName, on){
        let newChecked = [];
        if (on) {
            const withAdded = this.state.checked.concat(trophyName);
            //https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
            newChecked = withAdded.filter((v, i, a) => a.indexOf(v) === i);
            
        } else {
            newChecked = this.state.checked.filter((element)=> element !== trophyName)
           
        }

        this.setState({
            checked: newChecked 
        })

        return newChecked;

    }

    checkComplete(checked){
        let allTrophies= [];
        this.state.trophyList.forEach(item=> {
            allTrophies=allTrophies.concat(item.elements.map(e=>e.name))
        })
        const complete = allTrophies.filter(item=>{
            return checked.indexOf(item) == -1
        }).length == 0;
        this.setState({
            complete: complete
        })
        
        if (complete){
            document.body.classList.add('completeList');
        } else {
            document.body.classList.remove('completeList');
        }
    }
    
    clickMaster(trophy, on){
        const newTrophies = this.toggleBox(trophy.name, on);
        this.checkComplete(newTrophies);
        window.localStorage.setItem('checked', JSON.stringify(newTrophies));
    }

    render (){
        return<div>
            <div className="background"></div>
            <Navigator items={this.state.trophyList.map(e=>e.name)}/>
            <div className="platinum">
            <div className="platinumText"></div>
            </div>
            <div className="darkSoul"></div>
            <div className="title">Trophy Guide</div>
            {this.state.trophyList.map((item)=> <TrophyContainer key={item.name} trophy={item} checked={this.state.checked} clickHandler={(trophyName, on)=>this.clickMaster(trophyName, on)}/>)}
        </div>
    }
}
