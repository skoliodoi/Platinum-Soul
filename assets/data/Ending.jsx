import TrophyGroup from "../../js/models/TrophyGroup";
import React from 'react';

export default new TrophyGroup ("Endings", [{
        name: 'To Link the Fire', 
        img: 'assets/images/story/ending1.png',
        text: 'This ending is obtained by lighting the bonfire that appears after defeating Gwyn, Lord of Cinder.',
        type: 'gold'
    }, {
        name:'The Dark Lord',
        img: 'assets/images/story/ending2.png',
        text: 'Triggered if the player leaves the area after defeating Gwyn, Lord of Cinder, without lighting the bonfire.',
        type: 'gold'
    }]
)