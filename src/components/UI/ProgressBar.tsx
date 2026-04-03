import { useState , useEffect} from "react";
export default function ProgressBar({width, height, bgColor, progressColor, progress}:
    {width: string, height: string, bgColor: string, progressColor: string, progress: number}
) {
    const [fillWidth, setFillWidth] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setFillWidth(progress);
        }
        , 100);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className={` ${width} ${height} ${bgColor} rounded-full shadow-lg`}>
            <div className={`h-4 rounded-full transition-all duration-500 ${progressColor}`} style={{width: `${fillWidth}%`}}></div>
        </div>
    )
}