export default function TitleContainer({title, bgColor , width, height , textColor , textSize , skew , rounded , fontWeight}:
    {title: string, bgColor: string, width: string, height: string, textColor: string, textSize: string, skew: string, rounded: string, fontWeight: string}
) {
    return (
        <div className={`${width} ${height} relative ${bgColor} transform ${skew} overflow-hidden w-1/2 h-28 flex items-center justify-center ${rounded} shadow-lg ${textColor}`}>
          <div className={`transform -${skew} p-10`}>
            <h1 className={`${textSize} ${fontWeight}`}>
                {title}
            </h1>
          </div>
        </div>
    )
}