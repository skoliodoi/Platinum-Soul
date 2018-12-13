import React from 'react';


export default class TrophyBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            instructionsHidden: true
        }
    }
    handleClick(e) {
        if (e.target.tagName=='A'){
            return;
        };
        this.props.clickHandler(this.props.element, !this.props.checked)

    }

    handleInstructions(e){
        this.setState({
            instructionsHidden: !this.state.instructionsHidden
        })   
        e.preventDefault();
        e.stopPropagation();
    }

    render(){
        
        const checked = this.props.checked ? 'checked' : 'unchecked';
        const instructionsClassName = this.state.instructionsHidden ? 'hidden' : ''; 
        return <div>
            <div className={`trophyBox ${checked} ${this.props.isTrophy ? this.props.element.type : 'item'}`} onClick={e => this.handleClick(e)}>
               <div className="elementName">
                    {this.props.element.name}
                </div>
                
                <img src={this.props.element.img}/>
                
                <div className="instructionsLink" onClick={(e) => this.handleInstructions(e)}>Instructions</div>
                
                <div className={`instructions ${instructionsClassName}`}>
                    {this.props.element.text}
                </div>
                
                <div className="trophy"></div>
    
            </div>
        </div>
    }
}

