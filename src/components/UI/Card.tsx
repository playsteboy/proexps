export default function Card({title , gap , titleSize , titleColor , titleFont,  description , content,width, height, bgColor, textColor, textSize , skew , nskew , rounded , contentWidth , contentHeight}: 
    {title: string, description: string, content: React.ReactNode, width: string, height: string, bgColor: string, textColor: string, textSize: string, skew?: string, nskew?: string, rounded?: string, titleSize: string, titleColor: string, titleFont: string, gap?: string , contentWidth?: string , contentHeight?: string}

) {
    return (
        <div className={ `${width} ${height} ${bgColor} flex flex-col items-center justify-center p-5 shadow-lg ${skew} ${rounded} `}>
                    <ul className={`flex flex-col justify-evenly items-center h-full w-full  text-center ${gap} ${textColor} ${textSize} `}>
                        <li><p><span className={`${titleColor} ${titleSize} ${titleFont}`}>{title}</span></p></li>
                        <div className={`${contentHeight} ${contentWidth}`}>{content}</div>
                        <li><p>{description}</p></li>
                    </ul>
        </div>
    )
}