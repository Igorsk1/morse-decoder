const MORSE_TABLE = {
	".-": "a",
	"-...": "b",
	"-.-.": "c",
	"-..": "d",
	".": "e",
	"..-.": "f",
	"--.": "g",
	"....": "h",
	"..": "i",
	".---": "j",
	"-.-": "k",
	".-..": "l",
	"--": "m",
	"-.": "n",
	"---": "o",
	".--.": "p",
	"--.-": "q",
	".-.": "r",
	"...": "s",
	"-": "t",
	"..-": "u",
	"...-": "v",
	".--": "w",
	"-..-": "x",
	"-.--": "y",
	"--..": "z",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	"-----": "0",
};

function decode(expr) {
	let str = ""; // the encoded letter
	let sign; // the Morse table sign
	let res = "";

	while (expr.length >= 10) {
		sign = "";
		str = expr.slice(0, 10);
		expr = expr.slice(10, expr.length);

		if (str == "**********") {
			res += " ";
			continue;
		}

		while (str.length > 0) {
			str.slice(0, 2) == "10"
				? (sign += ".")
				: str.slice(0, 2) == "11"
				? (sign += "-")
				: (sign += "");
			str = str.slice(2, str.length);
		}
		res += MORSE_TABLE[sign];
	}

	return res;
}

module.exports = {
	decode,
};
