/*It's been a tough week at work and you are struggling to get out of bed in the morning.
While waiting at the bus stop you realise that if you could time your arrival to the nearest minute you could get valuable extra minutes in bed.
There is a bus that goes to your office every 15 minute, the first bus is at 06:00, and the last bus is at 00:00.
Given that it takes 5 minutes to walk from your front door to the bus stop, implement a function that when given the current time will tell you how much time is left, before you must leave to catch the next bus.

Examples
"05:00"  =>  55
"10:00"  =>  10
"12:10"  =>  0
"12:11"  =>  14

Notes
Return the number of minutes till the next bus
Input will be formatted as HH:MM (24-hour clock)
The input time might be after the buses have stopped running, i.e. after 00:00*/

function busTimer(time) {
  const pushTime = () => {
    const timeBusArrive = [];
    for (let i = 355; i <= 1435; i += 15) {
      timeBusArrive.push(i);
    }
    return timeBusArrive;
  };

  const userTime = time.slice(0, 2) * 60 + Number(time.slice(3));
  if (userTime > 1435) {
    return 1440 - userTime + 355;
  }
  return pushTime().find((item) => item >= userTime) - userTime;
}

console.log(busTimer('23:59'));
let a;
