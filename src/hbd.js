import React, {useEffect} from "react";
import confetti from "canvas-confetti";

export default function Hbd() {

    useEffect(() => {
        // Fire confetti when the component mounts
        const duration = 5 * 1000; // 5 seconds
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }, []);

    return(
        <div className="hbd-container">
            <div className="text-box">
            お誕生日おめでとう、愛。誕生日はあと2999人しか残っていない。愛してます。
            </div>        
        </div>
    );
}