
function createMultiplyTable(start, end){
    if(!isNumberLegal){
        return null;
    }
    return createTableString(start, end);
}

function isNumberLegal(start, end){
    if(isStartSmallerEnd && checkRange){
        return true;
    }
    return false;
}

function isStartSmallerEnd(start, end){
    if(start<=end){
        return true;
    }
    return false;
}

function checkRange(start, end){
    if(start>=1 && start<=1000 && end>=1 && end<=1000){
        return true;
    }
    return false;
}

function createTableString(start, end){
    var table='';
    for(let i=start;i<=end;i++){
        for(let j=start;j<=end;j++){
            let str = j + '*' + i + '=' + (i*j);
            table+=str;
            if(i==j && i!=end){
                table+='\n'
                break;
            } else if(i==j && i==end){
                break;   
            } else{
                table+='\s\s';
            }
        }
    }
    return table;
}

function formatTable(multiplyTable){
    //TODO format the string ...
}

module.exports = createMultiplyTable;