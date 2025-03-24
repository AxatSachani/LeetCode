function countDays(days: number, meetings: number[][]): number {
    // Sort the meetings by their start time
    meetings.sort((a, b) => a[0] - b[0]);

    let occupiedDays = 0;
    let currentStart = -1;
    let currentEnd = -1;

    for (const [start, end] of meetings) {
        if (start > currentEnd) {
            // Non-overlapping interval, count the previous one and start a new one
            if (currentEnd !== -1) {
                occupiedDays += (currentEnd - currentStart + 1);
            }
            currentStart = start;
            currentEnd = end;
        } else {
            // Overlapping interval, extend the current one if needed
            currentEnd = Math.max(currentEnd, end);
        }
    }

    // Add the last interval's occupied days
    if (currentEnd !== -1) {
        occupiedDays += (currentEnd - currentStart + 1);
    }

    // Return total available days
    return days - occupiedDays;
}
