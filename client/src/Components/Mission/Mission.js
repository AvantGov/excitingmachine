import React from 'react';
import { useState } from 'react';

//  * STYLING
import '../../CSS/CSS__Mission/mission.css'

const Mission = () => {

    const [showMission, setShowMission] = useState(false);

    return(
        <div className='Mission'>
           {showMission ? 
                <div className='Mission__contentContainer_copy'>
                    <div className='contentContainer__copyContainer'>
                        <p className='copyContainer__copy'>I'm baby twee scenester single-origin coffee crucifix williamsburg activated charcoal austin stumptown. Copper mug lo-fi lyft mlkshk, distillery swag tattooed forage cornhole celiac flexitarian tacos art party vexillologist neutra. Hella cloud bread skateboard mixtape cronut, brunch selvage cliche enamel pin sartorial hot chicken VHS. Biodiesel fixie gluten-free woke synth YOLO street art hell of.</p>
                        <div className='copyContainer__btn'>
                            <span className='btn__text' onClick={() => {setShowMission(false)}}> 
                                [ tell me less ] 
                            </span>
                        </div>
                    </div>
                </div>
            :
                <div className='Mission__contentContainer'>
                    <h1 className='contentContainer__header'>
                        CUSTOM SYNTH COVERS 
                        <br /> 
                        <span className='header__quote'>
                            CUT FRESH IN  PENNSYLVANIA
                        </span>
                    </h1>
                    <div className='contentContainer__missionBtn' onClick={() => {setShowMission(true)}}>
                        <span className='missionBtn__text'>[ tell me more ]</span>
                    </div>
                </div>
            }
        </div>
    )
};

export default Mission;