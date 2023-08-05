import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'

// Later we'll get these values from a db
const characters = [
    {charName: "name1", charClass: "Attacker", skillOrder: 1, charImg: "/res/nikke/char/admi.webp", icons: ["./res/nikke/class/icon_attack.webp","./res/nikke/burst/icon_burst1.webp"]},
    {charName: "name2", charClass: "Defender", skillOrder: 2, charImg: "./res/nikke/char/alice.webp", icons: ["./res/nikke/class/icon_defend.webp","res/nikke/burst/icon_burst2.webp"]},
    {charName: "name3", charClass: "Support", skillOrder: 3, charImg: "./res/nikke/char/blanc.webp", icons: ["./res/nikke/class/icon_support.webp","res/nikke/burst/icon_burst3.webp"]},
    {charName: "name4", charClass: "Attacker", skillOrder: 1, charImg: "./res/nikke/char/admi.webp", icons: ["./res/nikke/class/icon_attack.webp","./res/nikke/burst/icon_burst1.webp"]},
    {charName: "naqe5", charClass: "Defender", skillOrder: 2, charImg: "./res/nikke/char/alice.webp", icons: ["./res/nikke/class/icon_defend.webp","./res/nikke/burst/icon_burst2.webp"]},
    {charName: "nape6", charClass: "Support", skillOrder: 3, charImg: "./res/nikke/char/blanc.webp", icons: ["./res/nikke/class/icon_support.webp","./res/nikke/burst/icon_burst3.webp"]},
    {charName: "naje7", charClass: "Attacker", skillOrder: 1, charImg: "./res/nikke/char/admi.webp", icons: ["./res/nikke/class/icon_attack.webp","./res/nikke/burst/icon_burst1.webp"]},
    {charName: "nage8", charClass: "Defender", skillOrder: 2, charImg: "./res/nikke/char/alice.webp", icons: ["./res/nikke/class/icon_defend.webp","./res/nikke/burst/icon_burst2.webp"]},
    {charName: "name9", charClass: "Support", skillOrder: 3, charImg: "./res/nikke/char/blanc.webp", icons: ["./res/nikke/class/icon_support.webp","./res/nikke/burst/icon_burst3.webp"]},
    {charName: "name10", charClass: "Attacker", skillOrder: 1, charImg: "./res/nikke/char/admi.webp", icons: ["./res/nikke/class/icon_attack.webp","./res/nikke/burst/icon_burst1.webp"]},
    {charName: "naye11", charClass: "Defender", skillOrder: 2, charImg: "./res/nikke/char/alice.webp", icons: ["./res/nikke/class/icon_defend.webp","./res/nikke/burst/icon_burst2.webp"]},
    {charName: "name12", charClass: "Support", skillOrder: 3, charImg: "./res/nikke/char/blanc.webp", icons: ["./res/nikke/class/icon_support.webp","./res/nikke/burst/icon_burst3.webp"]},
]

class Roster extends React.Component {
    render(){
        return(
            <div className='roster-main'>
                <Grid container spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={{xs: 1, sm: 2, md: 3}}>
                    {characters.map((charArray, k) => (
                        <Grid xs="auto" key = {k}>
                            <CharacterCard 
                                name={charArray.charName} 
                                type={charArray.charType} 
                                img={charArray.charImg} 
                                icons={charArray.icons}
                            />
                        </Grid>
                        //<div className="card-frame" key={charArray.charName}>
                        //    <CharacterCard name={charArray.charName} type={charArray.charType} img={charArray.charImg} key={k} />
                        //</div>
                    ))}
                </Grid>
            </div>
        );
    }
}

function CharacterCard(props){
    return(
      // Click/Tap will open character page later.

        <div className="card-frame" key={props.name}>
            <img className="card-image" src={props.img} alt={props.name}></img>
            <div className="card-icon-container">
                <img src={props.icons[0]} className="card-icon" alt="Class"></img>
                <img src={props.icons[1]} className="card-icon" alt="Order"></img>
            </div>
            <div className="card-overlay">{props.name}</div>
        </div>
    );
}

export default Roster;