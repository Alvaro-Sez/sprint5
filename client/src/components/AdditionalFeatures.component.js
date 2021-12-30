import React from 'react';
import {
    AdditionalFeaturesContainer
} from './styled.components'
import History from './History.component';
import Cam from './Cam.component';

export default function AdditionalFeatures(){
    return (
        <AdditionalFeaturesContainer>
            <Cam></Cam>
            <History></History>
        </AdditionalFeaturesContainer>
    )
}