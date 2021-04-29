const reduceIntoPairs = (pairs) => { 
    //pairs.lengh % 2 !==0 && pairs.pop();
    console.log('pairs in svg', pairs)
    const coordinates = []; 
    for (let i=0; i<pairs.length; i++){ 
        let idx = i % 2 === 0 ? 1 : 2
        let obj = {['x'+ idx]: pairs[i].x, ['y'+ idx]: pairs[i].y}
        coordinates.push(obj) 
    } 
    console.log('coordinates', coordinates); 
    const pairedCoordinates = coordinates.reduce(function(result, value, index, array) { 
        if (index % 2 === 0)
            result.push(array.slice(index, index + 2)); 
        return result; 
    }, []);
    console.log('pairedCoordinates', pairedCoordinates);
    const mappings = [];
    for (let i=0; i< pairedCoordinates.length; i++){ 
        mappings.push(Object.assign(pairedCoordinates[i][0], pairedCoordinates[i][1])) 
    } 
    return mappings;
}
const Svg = (props) => { 
    const pairs = reduceIntoPairs(props.pairs); 
    console.log('mappings', pairs) 
    return ( 
        <div>
            {
                <svg width="500" height="500"> 
                    {pairs.map(pair =><line x1={pair.x1} y1={pair.y1} x2={pair.x2} y2={pair.y2} stroke="black" key={pair.x1}/>)}
                </svg>
            }
        </div>
        
    )
}
export default Svg;