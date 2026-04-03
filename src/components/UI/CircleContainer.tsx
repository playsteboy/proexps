export default function CircleContainer({ title , bgColor , width , height , textColor , textSize , bgColor2 , width2 , height2}:
    {title: string, bgColor: string, width: string, height: string, textColor: string, textSize: string, bgColor2: string, width2: string, height2: string}
) {
    return (
        <section className={ `${width} ${height} overflow-hidden rounded-full flex items-center justify-center font-bold whitespace-normal text-center ${textColor} ${textSize} hover:scale-105 transition-all duration-300 cursor-pointer text-shadow-2xs`}>
            <div className={`${bgColor2} rounded-full w-full h-full flex items-center justify-center`}>
            <div className={`shadow-lg flex items-center ${bgColor} justify-center ${width2} ${height2} z-50 rounded-full p-2.5`}>
                <h1>{title}</h1>
            </div>
            </div>
        </section>
    );
}