const meow = require('meow');
const fs = require('fs');

const cli = meow(`
     Usage
        $ create-npmrc key=val key=val
`, {
    dupa:'dsfsdf'
});


const write = function (path, content, mode) {
    fs.writeFileSync(path, content, {
        mode: mode || 0o666
    });
};

function prepareContent(params) {
    return params.reduce((prev, param) => {
                const [key, value] = param.split('=');
                prev += `${key}=${value}\n`;
                return prev;
          },'');
}

write('.npmrc', prepareContent(cli.input));

