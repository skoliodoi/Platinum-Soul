import TrophyGroup from "../../js/models/TrophyGroup";
import React from 'react';

export default new TrophyGroup ("Weapon Enhancements", [{
        name: 'Strongest Weapon', 
        img: 'assets/images/enhancements/normal.png',
        text: <p className="description">
        Basic standard upgrades (up to +5) are available through all blacksmiths and the Weapon Smithbox item; however, Andre of Astora is the only blacksmith who has the ability to ascend standard items from +5 to +6 and from +10 to +11, after being given the <a href="https://www.youtube.com/watch?v=BttO_dD52I0" target="blank">Large Ember</a> and the <a href="https://www.youtube.com/watch?v=BWxTm8LqrwQ" target="blank">Very Large Ember</a>, respectively. Any blacksmith, along with the Weapon Smithbox, may implement the intermediate upgrades to standard weapons with the required titanite and souls. <strong>9</strong> Titanite Shards are required for levels up to +5, <strong>9</strong> Large Titanite Shards from levels +6 to +10, <strong>7</strong> Titanite Chunks from +11 to +14, and a Titanite Slab for +15.</p>,
        type: 'bronze'
    }, {
        name:'Crystal Weapon',
        img: 'assets/images/enhancements/crystal.png',
        text: <p className="description">The Giant Blacksmith gains the ability to ascend weapons down the Crystal path after receiving the <a href="https://www.youtube.com/watch?v=QO33GIQvJ0w" target="blank">Crystal Ember</a>. Creation of a Crystal weapon requires <strong>9</strong> Titanite Shards and <strong>9</strong> Large Titanite Shards to upgrade a standard weapon to +10, <strong>8</strong> Titanite Chunks for upgrading it to +4, and a Titanite Slab for upgrading to +5, as well as the requisite souls. </p>,
        type: 'bronze'
    }, { 
        name: 'Lightning Weapon',
        img: 'assets/images/enhancements/lightning.png',
        text: <p className="description">Lightning is an upgrade path offered by the Giant Blacksmith in Anor Londo through ascension and does not require any ember. Creation of a Lightning weapon requires <strong>9</strong> Titanite Shards and <strong>9</strong> Large Titanite Shards to upgrade a standard weapon to +10, <strong>8</strong> Titanite Chunks for upgrading it to +4, and a Titanite Slab for upgrading to +5, as well as the requisite souls. </p> ,
        type: 'bronze'
    }, {
        name:'Raw Weapon',
        img: 'assets/images/enhancements/raw.png',
        text: <p className="description">Raw is available as an upgrade path for blacksmith Andre of Astora after he is given the <a href="https://www.youtube.com/watch?v=BttO_dD52I0" target="blank">Large Ember</a>. After using <strong>9</strong> Titanite Shards to upgrade a standard weapon to +5, Andre can ascend it to the Raw status and then upgrade it to +5 using <strong>10</strong> Large Titanite Shards.</p> ,
        type: 'bronze'
    }, {
        name:'Magic Weapon',
        img: 'assets/images/enhancements/magic.png',
        text: <p className="description">Magic is available by default to blacksmith Rickert of Vinheim, who can be found early <a href="https://www.youtube.com/watch?v=pOd7sRv_yc8" target="_blank">in the New Londo Ruins</a>. Initially, he can only ascend Magic weapons to +5, but he later gains the ability to ascend to +6 when given the <a href="https://www.youtube.com/watch?v=aQLHUPQ3R6g" target="_blank">Large Magic Ember</a> from The Duke's Archives. After using <strong>9</strong> Titanite Shards to upgrade a standard weapon to +5, Rickert can ascend it to the Magic status and then upgrade it to +10 using <strong>10</strong> Green Titanite Shards, <strong>7</strong> Blue Titanite Chunks, and a <a href="https://www.youtube.com/watch?v=Sk-IfhSv8Sc" target="_blank">Blue Titanite Slab</a>.</p> ,
        type: 'bronze'

    }, {
        name:'Enchanted Weapon',
        img: 'assets/images/enhancements/enchanted.png',
        text: <p className="description">The Enchanted upgrade path is made available by ascension after giving Rickert of Vinheim the <a href="https://www.youtube.com/watch?v=0TYkXuaEJLQ" target="blank">Enchanted Ember</a>. It requires a +5 Magic weapon, <strong>8</strong> Blue Titanite Chunks, and a <a href="https://www.youtube.com/watch?v=Sk-IfhSv8Sc" target="_blank">Blue Titanite Slab</a></p> ,
        type: 'bronze'
    }, {
        name:'Divine Weapon',
        img: 'assets/images/enhancements/divine.png',
        text: <p className="description">The Divine Upgrade Path becomes available to Andre of Astora after he receives the <a href="https://www.youtube.com/watch?v=OlTqbZY-AT0" target="_blank">Divine Ember</a> found in Darkroot Garden. Giving him the <a href="https://www.youtube.com/watch?v=TjBJ3nAwEAU" target="_blank">Large Divine Ember</a> found in the Tomb of the Giants allows him to ascend Divine weapons to +6 and beyond. After using <strong>9</strong> Titanite Shards to upgrade a standard weapon to +5, Andre can ascend it to the Divine status and then upgrade it to +10 using <strong>10</strong> Green Titanite Shards, <strong>8</strong> White Titanite Chunks, and a <a href="https://www.youtube.com/watch?v=k74m0W3HAWs" target="_blank">White Titanite Slab</a>.</p> ,
        type: 'bronze'
    }, {
        name:'Occult Weapon',
        img: 'assets/images/enhancements/occult.png',
        text: <p className="description">The Occult Upgrade Path becomes available to Andre of Astora after he receives the <a href="https://www.youtube.com/watch?v=PnHM1QD15jU" target="_blank">Dark Ember</a>. After finding <a href="https://www.youtube.com/watch?v=lG412dJVr-8" target="_blank">Occult Club in Anor Londo</a>, the player can use <strong>8</strong> White Titanite Chunks, and a <a href="https://www.youtube.com/watch?v=k74m0W3HAWs" target="_blank">White Titanite Slab</a> to upgrade it to +5.</p> ,
        type: 'bronze'
    }, {
        name:'Fire Weapon',
        img: 'assets/images/enhancements/fire.png',
        text: <p className="description">Fire is a path available from <a href="https://www.youtube.com/watch?v=A_MDOAdQCu8" target="_blank">Vamos</a> by default, although he can only ascend Fire weapons from +5 to +6 after he is given the <a href="https://www.youtube.com/watch?v=EUtXyDIIWds" target="_blank">Large Flame Ember</a>. After using <strong>9</strong> Titanite Shards to upgrade a standard weapon to +5, Vamos can ascend it to the Divine status and then upgrade it to +10 using <strong>10</strong> Green Titanite Shards, <strong>7</strong> Red Titanite Chunks, and a <a href="https://www.youtube.com/watch?v=wVToOTRGDw0" target="_blank">Red Titanite Slab</a>.</p> ,
        type: 'bronze'
    }, {
        name:'Chaos Weapon',
        img: 'assets/images/enhancements/chaos.png',
        text: <p className="description">The Enchanted upgrade path is made available by ascension after giving Vamos the <a href="https://www.youtube.com/watch?v=pSqI8KjYp8Q" target="blank">Chaos Flame Ember</a>. It requires a +5 Fire weapon, <strong>8</strong>Red Titanite Chunks, and a <a href="https://www.youtube.com/watch?v=wVToOTRGDw0" target="_blank">Red Titanite Slab</a></p> ,
        type: 'bronze'
    }]
)