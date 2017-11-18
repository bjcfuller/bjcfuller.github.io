/* bjcf.bitbucket.io scripts.built.js *//* General scripts */


/*
 * Load template parts
 * @param url str the relative url to load
 * @param el str the element to fill
 * @param success func optional success function
 */
function loadTemplatePart(url, el, success) {
    
    'use strict';
        
    var xmlhttp = new XMLHttpRequest(), loc, n, i, path, s;
                
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
            document.querySelector(el).innerHTML = xmlhttp.responseText;
            if (success) {
                success();
            }
        }
    };
    
    loc = window.location.pathname.split('/');
    loc.shift();
        
    n = (url.match(/\..\//g) || []).length;
    for(i=0; i<n+1; i++) {
        loc.pop();
    }
    
    loc = loc.toString();
    loc = loc.replace(/,/g,'/');
            
    path = window.location.protocol + '//' + window.location.hostname + '/' + loc + '/' + url.replace(/\..\//g, '');
    
    xmlhttp.open('GET', path, true);
    xmlhttp.send();

}
