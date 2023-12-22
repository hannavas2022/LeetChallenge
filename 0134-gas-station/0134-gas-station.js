/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let length = gas.length;
    let tank = 0;
    let cur = 0;
    let index = false;
    for (let i = 0; i < length; i++) {
        let amount = gas[i];
        let spend = cost[i];
        if (cur + amount - spend > 0) {
            if (index === false) {
                index = i;
            };
            cur += amount - spend;
        } else {
            index = false;
            cur = 0;
        };
        tank += amount - spend;
    };
    return (tank > -1 ? index : -1);
};