class InverseCaptcha {
    static inverseCaptcha(str: string): number {
        let total = 0;
        for (let i = 0; i < str.length; i++) {
            if (i === str.length - 1 && str[i] === str[0]) {
                total += Number(str[i]);
            } else if (str[i] === str[i + 1]) {
                total += Number(str[i]);
            }
        }
        return total;
    }

    static inverseCaptchaPartTwo(str: string): number {
        let total = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[(i + str.length / 2) % str.length]) {
                total += Number(str[i]);
            }
        }
        return total;
    }
}


module.exports = InverseCaptcha