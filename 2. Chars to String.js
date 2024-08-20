function charsToString(param1, param2, param3) {
    let res = (param1.concat(param2).concat(param3)).split(``).reverse().join(``);
    //console.log(`${param1}${param2}${param3}`);
    console.log(res);
    let newArr = [];
    for (let i = 0; i < res.length; i++) {
        let ascii = `${res[i]}`.charCodeAt(0);
        newArr.push(ascii);
    }
    let final = newArr.join(` `);
    console.log(final);

}
charsToString('%','2','o');
