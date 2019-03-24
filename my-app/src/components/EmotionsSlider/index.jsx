import React, { Component } from 'react';
import './emotionsslider.css';

class EmotionsSlider extends Component {
    render() {
        return (
            <form action="#" method="post">
            Rate the intensity of your emotions.
            <input type="range" id="rating" min="1" max="5" />
            </form>
        )
    }

}
export default EmotionsSlider; 