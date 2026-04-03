export default function Button({text,bgColor , textColor , fontWeight , textSize , width, height}) {
    return (
        <section className={`relative ${bgColor} transform -skew-x-10 ${width} ${height} ${textSize} overflow-hidden  flex items-center justify-center shadow-lg ${textColor} hover:scale-105 transition-all duration-300 ${fontWeight} text-shadow-2xs` }>
            <h1>{text}</h1>
        </section>
    );
}