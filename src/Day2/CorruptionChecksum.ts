function partOne(str: string): number {
    const rows = str.split('\n');
    let checksum = 0;
    for (const row of rows) {
        let min: number | undefined;
        let max: number | undefined;
        const values = row.split(/\s+/);
        for (const value of values) {
            if (min === undefined) {
                min = Number(value);
            }
            if (max === undefined) {
                max = Number(value);
            }
            if (Number(value) < min) min = Number(value);
            if (Number(value) > max) max = Number(value);
        }
        if (typeof min === "number" && typeof max === "number") {
            checksum += max - min;
        }
    }
    return checksum;
}


export {
    partOne
};