const Svg = ({pairs}) => { 
    return (
        <div>
            {
                <svg width="500" height="500"> 
                    {pairs.map(pair =>
                        Object.keys(pair).length % 2 === 0 &&
                        <line x1={pair[Object.keys(pair)[0]].x1} y1={pair[Object.keys(pair)[0]].y1} 
                              x2={pair[Object.keys(pair)[1]].x2} y2={pair[Object.keys(pair)[1]].y2} 
                              stroke="black" key={pair[Object.keys(pair)[0]].x1}/>)}
                </svg>
            }
        </div>
        
        
    )
}
export default Svg;