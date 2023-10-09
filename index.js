let TOKEN;

webpackChunkdiscord_app.push(
    [
        [''],
        {},
        e => {
            m=[];
            for(let c in e.c)
                m.push(e.c[c])
        }
    ]
);

const moduleWithToken = m.find(
    m => m?.exports?.default?.getToken !== void 0
);

if (moduleWithToken) {
    TOKEN = moduleWithToken.exports.default.getToken();
    console.log('TOKEN:', TOKEN);
} else {
    console.error('Nie znaleziono modułu z getToken()');
}