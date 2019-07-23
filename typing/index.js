$(document).ready(() => {
    $('#display0').text('Type!');
    $('#display1').text('...');
    let tLast = -1;
    let tStart = null;
    let d0 = '';
    let d1 = '';
    $('html').keydown((e) => {
        const t = Date.now();
        let x;
        if (t - tLast > 300) {
            d0 = '';
            d1 = '';
            tStart = t;
            tLast = t;
            x = '_';
        }
        if (e.key.length === 1) {
            if (e.key === ' ') {
                d0 += '_';
            } else {
                d0 += e.key;
            }
        } else {
            d0 += '<' + e.key + '>';
        }
        if (x === '_') x = x;
        else if (t - tLast < 4) x = '#';
        //else if (t - tLast < 30) x = '+';
        //else if (t - tLast > 99) x = '/';
        else x = String(Math.floor((t - tLast) / 10));
        
        d0 += ' ';
        d1 += x + ' ';
        $('#display0').text(d0);
        $('#display1').text(d1);
        tLast = t;
    })
});