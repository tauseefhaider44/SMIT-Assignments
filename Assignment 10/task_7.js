let myString = "I aM a StrIng in miXed Characters";

let toggled_String = "";

for (const element of myString) {
    if (element === element.toLowerCase()) {
        toggled_String += element.toUpperCase();
    }
    else {
        toggled_String += element.toLowerCase();
    }
}

console.log(toggled_String);