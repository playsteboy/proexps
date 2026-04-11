export default function Button({text, bgColor, textColor, fontWeight, textSize, width, height}: {text: string, bgColor: string, textColor: string, fontWeight: string, textSize: string, width: string, height: string}) {
    return (
        <section className={`relative flex items-center justify-center rounded-xl text-purple-900 font-medium transition-all cursor-pointer ${bgColor} ${textColor} ${fontWeight} ${textSize} ${width} ${height}`}>
            <div className="absolute left-[0%] top-[0%] bottom-[0%] w-[2%] bg-linear-to-b from-purple-400 to-pink-400 rounded-r-md" />
            <h1>{text}</h1>
        </section>
    );
}