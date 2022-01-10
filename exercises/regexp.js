function CodelandUsernameValidation(str) {
    var len = str.length;
    if (len >= 4 && len <= 25) {
        if (str.match(/^[a-zA-Z]([a-zA-Z]|[0-9]|(_))*([a-zA-Z]|[0-9])$/g)) {
            return true;
        }
    }
    return false;
}

function CodelandUsernameValidation(str) {
    if (str.length >= 4 && str.length <= 25 && str[0].match(/[a-z]/i) && str.match(/^\w+$/) && str[str.length - 1].match(/[a-zA-Z0-9.-]/)) {
        return true;
    } else {
        return false;
    }
}

function CodelandUsernameValidation(str) {
    let userRegex = /^[a-z]{1}\w{2,23}[a-z|\d]{1}$/gi;
    return userRegex.test(str);
}

function CodelandUsernameValidation(str) {
    let lenghtOfString = str.length;

    if (lenghtOfString > 3 && lenghtOfString < 26 && /^([A-Za-z])/.test(str) && /[^_$]/.test(str.slice(-1)) && /([A-Za-z_])/.test(str)) {
        for (i = 0; i < str.length; i++) {}
        return true;
    } else {
        return false;
    }
}

function CodelandUsernameValidation(str) {
    var nameRegex = /^[a-zA-Z]([a-zA-Z0-9_]*[a-zA-Z0-9])?$/;
    if (str.length > 3 && str.length < 26) {
        if (str.match(nameRegex)) {
            return true;
        }
    }
    return false;
}

function CodelandUsernameValidation(str) {
    if (str.length < 4 || str.length > 25) {
        // console.log('Length incorrect')
        return false;
    }
    if (!/^([a-zA-Z])$/.test(str.charAt(0))) {
        // console.log('First character a letter')
        return false;
    }
    if (!/([a-zA-Z0-9_])$/.test(str)) {
        // console.log('Only letters and numbers and underscore')
        return false;
    }
    if (str.charAt(str.length - 1) == "_") {
        // console.log('Cannot end with underscore')
        return false;
    }
    return true;
}

function CodelandUsernameValidation(str) {
    if (str.length >= 4 && str.length <= 25) {
        if (str.charAt(0).toLowerCase() >= "a" && str.charAt(0).toLowerCase() <= "z") {
            if (str.charAt(str.length - 1) != "_") {
                reg = /^[0-9a-zA-Z_]+$/;
                if (str.match(reg)) {
                    return true;
                }
            }
        }
    }

    return false;
}

function CodelandUsernameValidation(str) {
    if (!str || str.length < 1) {
        return "false";
    }
    if (str.length < 4 || str.length > 25) {
        return "false";
    }
    if (!str[0].match(/[a-z]/i)) {
        return "false";
    }
    if (!str.match(/[a-zA-Z0-9_]/)) {
        return "false";
    }
    if (str[str.length - 1] === "_") {
        return "false";
    }
    return true;
}

function CodelandUsernameValidation(str) {
    let isValid = false;
    const regex = /^[a-z]{1}\w{3,23}[^_]$/gi;

    isValid = regex.test(str);

    return isValid;
}

function CodelandUsernameValidation(str) {
    let regex = /^[a-z|\d]{1}\w{2,23}[a-z|\d]{1}$/gi;
    return regex.test(str);
}

function CodelandUsernameValidation(str) {
    return /(?=\w{4,25}$)(^[A-Za-z])(.*[A-Za-z0-9]$)(?!\s)/.test(str);
}
