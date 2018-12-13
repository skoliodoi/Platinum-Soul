import TrophyGroup from "../../js/models/TrophyGroup";
import React from 'react';

export default new TrophyGroup ("Story Related", [{
        name: 'Enkindle', 
        img: 'assets/images/story/enkindle.png',
        text: 'This is a story based trophy that cannot be missed. Just activate a bonfire.',
        type: 'bronze'
    }, {
        name:'Estus Flask',
        img: 'assets/images/story/estus.png',
        text: 'This is a story based trophy that cannot be missed. You will obtain this near the start of the game.',
        type: 'bronze'
    }, { 
        name: 'Reach Lordran',
        img: 'assets/images/story/lordran.png',
        text: 'This is a story based trophy that cannot be missed. You will arrive after completing the prologue.',
        type: 'bronze'
    }, {
        name:' Ring the Bell (Undead Church) ',
        img: 'assets/images/story/bell1.png',
        text: 'This is a story based trophy that cannot be missed. Simply ring the bell after the Gargoyles boss.',
        type: 'bronze'
    }, {
        name:' Ring the Bell (Quelaag’s Domain)  ',
        img: 'assets/images/story/bell2.png',
        text: 'This is a story based trophy that cannot be missed. Simply ring the bell after defeating Quelaag.',
        type: 'bronze'
    }, {
        name:'  Rite of Kindling  ',
        img: 'assets/images/story/rite.png',
        text: 'This is a story based trophy that cannot be missed. You must kindle a bonfire by sacrificing some humanity and thus increasing the strength of the fire, you will obtain this ability after facing the boss Pinwheel in the Catacombs.',
        type: 'bronze'
    }, {
        name:'Art of Abysswalking  ',
        img: 'assets/images/story/abyss.png',
        text: 'This is a story based trophy that cannot be missed. Obtain this ring by defeating Great Wolf Sif.',
        type: 'bronze'
    }, {
        name:'Reach Anor Londo',
        img: 'assets/images/story/anorlondo.png',
        text: 'This is a story based trophy that cannot be missed. Be transported to Anor Londo upon completing Sen’s Fortress.',
        type: 'silver'
    }, {
        name:'Defeat Gravelord Nito',
        img: 'assets/images/story/neato.png',
        text: 'This is a story based trophy that cannot be missed. Defeat the Soul Lord Gravelord Nito',
        type: 'silver'
    }, {
        name:'Defeat Bed of Chaos',
        img: 'assets/images/story/boc.png',
        text: 'This is a story based trophy that cannot be missed. Defeat the Soul Lord Bed of Chaos.',
        type: 'silver'
    }, {
        name:'Defeat the Four Kings',
        img: 'assets/images/story/4kings.png',
        text: 'This is a story based trophy that cannot be missed. Defeat the Four Kings, inheritors of souls.',
        type: 'silver'
    }, {
        name:'Defeat Seath the Scaleless',
        img: 'assets/images/story/seath.png',
        text: 'This is a story based trophy that cannot be missed. Defeat Seath the Scaleless, inheritors of souls.',
        type: 'silver'
    }, {
        name:'Defeat Dark Sun Gwyndolin	',
        img: 'assets/images/story/gwyndo.png',
        text: <p>Gwyndolin is one of the optional bosses of the game and can be reached by lowering the spinning tower in Anor Londo and then going down the stairs, reaching a room with a bonfire and a big statue ahead. The boss room lies behind this statue, accessible only with the <a href="https://www.youtube.com/watch?v=Fg_7SpwFFZQ" target="_blank">Dark Seance Ring</a>.</p>,
        type: 'silver'
    }, {
        name:'Defeat Crossbreed Priscilla',
        img: 'assets/images/story/priscilla.png',
        text: <p>This optional boss can be found at the end of the Painted World of Ariamis. To gain access to this area the player needs to collect the strange doll that can be found after <a href="https://www.youtube.com/watch?v=ytpNHBjNBsw" target="_blank">returning to the Northern Undead Asylum</a> after leaving it the first time.</p>,
        type: 'silver'
    }]
)