var input = "AxBxC";

input = input.replace(" ", "");
var inStr = input;
input = input.split("");
var variables = [];
var result = [];
var operations = ["n", "o", "a", "x", "i", "e", "("];

input.forEach(char => {
	if (char == char.toUpperCase() && char != char.toLowerCase()) {
		if (!variables.includes(char)) variables.push(char);
	}
});

result.push(variables.concat(["k"]));

for (var n = 0; n < 2 ** variables.length; n++) {
	var str = n.toString(2).split("");
	var values = [];
	variables.forEach((val, index) => {
		if (str[str.length - index - 1] == "1") {
			values[variables.length - index - 1] = true;
		} else {
			values[variables.length - index - 1] = false;
		}
	});
	var invalidInput = false;
	var modInput = inStr.split("");
	modInput.forEach((char, index) => {
		if (variables.includes(char)) {
			modInput[index] = values[variables.indexOf(char)];
		}
	})
	while (modInput.length > 1) {
		var success = false;
		for (var i = 0; i < modInput.length; i++) {
			if (operations.includes(modInput[i])) {
				switch (modInput[i]) {
					case "n":
						if (i <= modInput.length - 2) {
							if (typeof modInput[i + 1] == "boolean") {
								modInput[i + 1] = !modInput[i + 1];
								modInput.splice(i, 1);
								success = true;
							}
						}
						break;
					case "o":
						if (i >= 1 && i <= modInput.length - 2) {
							if (typeof modInput[i - 1] == "boolean" && typeof modInput[i + 1] == "boolean") {
								modInput[i - 1] = modInput[i - 1] || modInput[i + 1];
								modInput.splice(i, 2);
								success = true;
							}
						}
						break;
					case "a":
						if (i >= 1 && i <= modInput.length - 2) {
							if (typeof modInput[i - 1] == "boolean" && typeof modInput[i + 1] == "boolean") {
								modInput[i - 1] = modInput[i - 1] && modInput[i + 1];
								modInput.splice(i, 2);
								success = true;
							}
						}
						break;
					case "x":
						if (i >= 1 && i <= modInput.length - 2) {
							if (typeof modInput[i - 1] == "boolean" && typeof modInput[i + 1] == "boolean") {
								modInput[i - 1] = (modInput[i - 1] || modInput[i + 1]) && !(modInput[i - 1] && modInput[i + 1]);
								modInput.splice(i, 2);
								success = true;
							}
						}
						break;
					case "i":
						if (i >= 1 && i <= modInput.length - 2) {
							if (typeof modInput[i - 1] == "boolean" && typeof modInput[i + 1] == "boolean") {
								if (modInput[i + 1]) {
									modInput[i - 1] = true;
								}
								else {
									modInput[i - 1] = !modInput[i - 1];
								}
								modInput.splice(i, 2);
								success = true;
							}
						}
						break;
					case "e":
						if (i >= 1 && i <= modInput.length - 2) {
							if (typeof modInput[i - 1] == "boolean" && typeof modInput[i + 1] == "boolean") {
								modInput[i - 1] = modInput[i - 1] == modInput[i + 1]
								modInput.splice(i, 2);
								success = true;
							}
						}
						break;
					case "(":
						if (i <= modInput.length - 3) {
							if (typeof modInput[i + 1] == "boolean" && modInput[i + 2] == ")") {
								modInput.splice(i + 2, 1);
								modInput.splice(i, 1);
								success = true;
							}
						}
						break;
					default:
						break;
				}
			}
			if (success) {
				break;
			}
		}
		if (!success) {
			console.log("Hibs bemenet");
			invalidInput = true;
			break;
		}
	}
	if (invalidInput) {
		result = "Hibás bemenet!";
		break;
	} else {
		if(modInput[0]) modInput = "1";
		else modInput = "0";
		var newValues = [];
		values.forEach(value => {
			if(value) newValues.push("1");
			else newValues.push("0");
		})
		result.push(newValues.concat([modInput]));
	}
}
console.log(result);