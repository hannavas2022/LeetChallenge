/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => b - a);

    let low = 0;
    let high = citations.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(isValidCitation(mid, citations)) {
            return mid + 1;
        } else if(mid < citations[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
};

function isValidCitation(citation, citations) {
    return citations[citation] === citation + 1;  
};