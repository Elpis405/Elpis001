function doFirst() {
    pword = document.getElementById('password')
    vpword = document.getElementById('vpassword')

    spword = document.getElementById('pword')
    svpword = document.getElementById('vpword')

    tree()

    spword.addEventListener('mouseover', function(){pword.type = 'text'}, true)
    svpword.addEventListener('mouseover', function(){vpword.type = 'text'}, false)
    spword.addEventListener('mouseout', function(){pword.type = 'password'}, false)
    svpword.addEventListener('mouseout', function(){vpword.type = 'password'}, false)
}

function tree() {
    the_tree = document.querySelector('.the_tree')
}

window.addEventListener('load', doFirst, false)