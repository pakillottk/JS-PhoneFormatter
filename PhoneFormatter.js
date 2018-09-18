export default ( phoneStr ) => {
    //string is null or undefined
    if( !phoneStr ) {
        return '-'
    }
    const numbers = (phoneStr.match(/[0-9]/g)||[]).join('')
    //empty or wrong phormat, return as it is
    if( numbers.length === 0 ) {
        return phoneStr
    } else {
        let rest = numbers
        let output = ''

        //add prefix as: XXX
        output += rest.substr(0,3) + ' '
        rest = rest.substr(3)
        
        //add rest as pairs: XX
        while( rest.length > 0 ) {
            output += rest.substr(0,2) + ' '
            rest = rest.substr(2)
        }

        return output.trim()
    }
}
