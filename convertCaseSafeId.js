const ConvertTable = {
  "00000":"A","00001":"B","00010":"C","00011":"D","00100":"E","00101":"F",
  "00110":"G","00111":"H","01000":"I","01001":"J","01010":"K","01011":"L",
  "01100":"M","01101":"N","01110":"O","01111":"P","10000":"Q","10001":"R",
  "10010":"S","10011":"T","10100":"U","10101":"V","10110":"W","10111":"X",
  "11000":"Y","11001":"Z","11010":"0","11011":"1","11100":"2","11101":"3",
  "11110":"4","11111":"5"}

/**
 * salesforceの15桁のIdを18桁に変換する
 * @param {String} fifteenId
 * @returns {String} CaseSafeId
 */
const convertToCaseSafeId = (fifteenId) => {
  if(fifteenId.length!==15){return fifteenId + ' is not length 15'}

  const splitGroupNum = 3
  const splitId = new Array(splitGroupNum)
  const reverseSplitId = new Array(splitGroupNum)
  const binId = new Array(splitGroupNum)
  let addId = ''

  splitId.fill('')

  for(let i = 0; i < splitGroupNum; i++){
    for(let j = 0; j < fifteenId.length/splitGroupNum; j++){
      splitId[i] += (fifteenId[j+fifteenId.length/splitGroupNum*i])
    }

    reverseSplitId[i] = splitId[i].split('').reverse().join('')

    binId[i] = reverseSplitId[i].replace(/[^A-Z]/g,'0').replace(/[A-Z]/g,'1')

    addId += ConvertTable[binId[i]];
  }

  return fifteenId + addId
}