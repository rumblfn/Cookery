import React from 'react';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import fridge_animation from '../../video/fridge.mp4';


const Video = () => {
    const [play, setPlay] = useState(false);
    const [control, setControl] = useState(true);
    const ref = React.createRef();

    const videoControl = () => {
        if (control) {
            setPlay(!play);
            setControl(!control);
        } else {
            playReverse();
        }
    }


    const playReverse = () => {
        let time = 2;
        let refreshIntervalId = setInterval(() => {
            if (time - 0.1 > 0) {
                time -= 0.1
                time = Math.round(time * 100) / 100;
                console.log(time);
                ref.current.seekTo(time, 'seconds');
            } else {
                ref.current.seekTo(0);
                clearInterval(refreshIntervalId);
                // setControl(!control);
            }

        }, 50);
    }



    return (
        <div className='video-box'>
            <button className='video-button' onClick={() => videoControl()} />
            <button className='video-button' onClick={() => playReverse()} />
            <ReactPlayer
                playing={play}
                url={fridge_animation}
                ref={ref}
            />
        </div>
    )
}

export const HomePage = () => {
    return (
        <div>
            <div className="container">
                <Video />
            </div>
        </div>
    )
}