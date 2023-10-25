function returnDay(num) {
    const days = [null, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (num < 1 || num > 7) {
        return null;
    } else {
        return days[num];
    }
}
