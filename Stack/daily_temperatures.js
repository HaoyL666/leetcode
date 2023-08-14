/* 739. Daily Temperatures */

//Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.



// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// Example 2:
// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// Example 3:
// Input: temperatures = [30,60,90]
// Output: [1,1,0]


/**
 * https://leetcode.com/problems/daily-temperatures
 * Time O(N) | Space O(N)
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures, stack = []) {
    const days = Array(temperatures.length).fill(0);

    for (let day = 0; day < temperatures.length; day++) {/* Time O(N + N) */
        while (canShrink(stack, temperatures, day)) {    /* Time O(N + N) */
            const prevColdDay = stack.pop();
            const daysToWait = (day - prevColdDay);

            days[prevColdDay] = daysToWait;              /* Ignore Space O(N) */
        }

        stack.push(day);                                 /* Space O(N) */
    }

    return days;
};

const canShrink = (stack, temperatures, day) => {
    const previousDay = stack[stack.length - 1];
    const [prevTemperature, currTemperature] = [temperatures[previousDay], temperatures[day]];
    const isWarmer = prevTemperature < currTemperature;

    return stack.length && isWarmer;
}