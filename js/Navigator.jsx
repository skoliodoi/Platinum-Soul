import React from 'react';

export default class Navigator extends React.Component{
    render(){
        return <div className="navigator">
            <ul>
                {this.props.items.map((item) => <li key={item}><a href={`#${item}`}>{item}</a></li>)}
            </ul>
        </div>
    }
}