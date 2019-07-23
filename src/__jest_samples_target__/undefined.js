let Truthiness = {
    getUndefined() {
        let someObj = {
            val1:"",
            val2: null
        };
        return someObj;
    }
}

module.exports = Truthiness;