import TrophyGroup from "../../js/models/TrophyGroup";
import React from 'react';

export default new TrophyGroup ("Covenants", [{
        name: 'Way of White', 
        img: 'assets/images/covs/wow.png',
        text: <p>Can be joined after talking to Petrus of Thorolund in Firelink Shrine</p>,
        type: 'bronze'
    }, {
        name:'Princess’s Guard',
        img: 'assets/images/covs/pg.png',
        text: <p>Can be joined after defeating Dragon Slayer Ornstein & Executioner Smough, and talking to Gwynevere, Princess of Sunlight, who can be found behind the closed doors next to the bonfire.</p>,
        type: 'silver'
    }, {
        name:'Blade of the Darkmoon',
        img: 'assets/images/covs/darkmoon.png',
        text: <p className="description">Can be joined after obtaining the Darkmoon Seance Ring that is found within the Catacombs. With the ring the <a href="https://www.youtube.com/watch?v=Fg_7SpwFFZQ" target="_blank">statue in front of the second bonfire in Anor Londo will disappear, revealing the hidden entrance to the Gwyndolin's chamber</a>.</p>,
        type: 'silver'
    }, {
        name:'Warrior of Sunlight',
        img: 'assets/images/covs/sunbro.png',
        text: <p>Can be joined after praying at the Altar of Sunlight, which is located next to the bonfire below the Hellkite Dragon in the Undead Parish.</p>,
        type: 'silver'
    }, {
        name:'Forest Hunter',
        img: 'assets/images/covs/forest.png',
        text: <p>Can be joined after in the Darkroot Garden after buying the Crest of Artorias and unlocking the sealed door. Past the Forest Protectors, in the ruined building behind the Bandit the player can meet Alvina. After talking to her, the covenant can be joined.</p>,
        type: 'silver'
    }, {
        name:'Darkwraith',
        img: 'assets/images/covs/darkwraith.png',
        text: <p> In order to join this covenant, the player has to defeat the Four Kings that lurk within New Londo Ruins but has to still possess the Lordvessel – <strong>it cannot be placed on the altair before killinf the boss!</strong> After defeating the Kings, a Primordial Serpent named Kaathe will appear. Talking to him grants the possibility to join the covenant and obtain the Dark Hand in the process.</p>,
        type: 'silver'
    }, {
        name:'Path of the Dragon',
        img: 'assets/images/covs/dragon.png',
        text: <p className="description">Can be joined after praying to the Stone Dragon at the end of the long path in <a href="https://www.youtube.com/watch?v=lZYYLh5H-s0&t=1s">Ash Lake</a>.</p>,
        type: 'silver'
    }, {
        name:'Gravelord Servant',
        img: 'assets/images/covs/gravelord.png',
        text: <p>Can be joined after offering Eye of Death to the Gravelord Nito in the Tomb of the Giants. The entrance to Nito's location is hidden in <a href="https://www.youtube.com/watch?v=kYA2J2AW_rs" target="_blank">one of the coffins located next to the Prowling Demon</a>.</p>,
        type: 'silver'
    }, {
        name:'Chaos Servant',
        img: 'assets/images/covs/chaos.png',
        text: <p className="description">Can be joined after defeating Quelaag and opening a secret passage <a href="https://www.youtube.com/watch?v=DQVu05BLZrM" target="_blank">underneath the second Bell of Awakening</a>.</p>,
        type: 'silver'
    }]
)