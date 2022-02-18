window.onload = function () {
    var els = document.getElementsByClassName("NC-MediaObject-main");
    // console.log(els);
    for (var i = 0; i < els.length; i++) {
        var con = els[i].getElementsByClassName("NC-VideoPlaybackIndicator-inner")
        if (con.length != 0) {
            // console.log(con)
            let style = window.getComputedStyle(con[0]);
            // console.log(style.transform)
            var val = style.getPropertyValue('transform')
            // console.log(val.replace(/matrix|\(|\)/g, ""))
            // console.log(parseFloat(val.slice(7, 29).split(',')[0]))
            var mv_per = parseFloat(style.getPropertyValue('transform').replace(/matrix|\(|\)/g, "").split(',')[0])
            console.log(mv_per)

            let vl = els[i].getElementsByClassName("NC-VideoLength")[0].textContent
            // console.log(vl.split(':'));
            let vlvec = vl.split(':');
            vl = parseInt(vlvec[0]) * 60 + parseInt(vlvec[1]);
            // console.log(vl);
            let conv = mv_per * vl;
            // console.log(conv);

            let a = els[i].getElementsByTagName('a');
            // console.log(a[0])
            // console.log(a[0].getAttribute('href'))
            let url = a[0].getAttribute('href') + '?from=' + conv;
            // console.log(url)

            let link = document.createElement('a');
            link.textContent = '続きから再生';
            link.href = url;
            els[i].parentNode.insertBefore(link, els[i].nextElementSibling)
        }
    }
};