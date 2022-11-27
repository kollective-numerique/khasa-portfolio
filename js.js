var lire = document.getElementById('bootstrap');
lire.addEventListener('mouseleave', non)

var lire = document.getElementById('bootstrap');
lire.addEventListener('mousemove', ok)



function ok (){
        document.getElementById('ani').innerHTML='Bootstrap';
        lire.style.opacity = '0.5';
       
    }
  
    function non (){
        document.getElementById('ani').innerHTML='';
        lire.style.opacity = '1';
    }

    var lir = document.getElementById('html');
lir.addEventListener('mouseleave', non1)

var lir= document.getElementById('html');
lir.addEventListener('mousemove', ok1)



function ok1 (){
        document.getElementById('ani').innerHTML='Html';
        lir.style.opacity = '0.5';
    }
  
    function non1 (){
        document.getElementById('ani').innerHTML='';
        lir.style.opacity = '1';
    }


    var cyc = document.getElementById('js');
cyc.addEventListener('mouseleave', non2)

var cyc = document.getElementById('js');
cyc.addEventListener('mousemove', ok2)



function ok2 (){
        document.getElementById('ani').innerHTML='Javascript';
        cyc.style.opacity = '0.5';
    }
  
    function non2 (){
        document.getElementById('ani').innerHTML='';
        cyc.style.opacity = '1';
    }



    var rog = document.getElementById('css');
rog.addEventListener('mouseleave', non3)

var rog = document.getElementById('css');
rog.addEventListener('mousemove', ok3)



function ok3 (){
        document.getElementById('ani').innerHTML='Css';
        rog.style.opacity = '0.5';
    }
  
    function non3 (){
        document.getElementById('ani').innerHTML='';
        rog.style.opacity = '1';
    }


    let touche = document.getElementById('toggle');
    function voir (){
        let menu = document.getElementById('list');
        if (menu.style.display === 'none'){
            menu.style.display = 'block';
        }
        else{ 
            menu.style.display = 'none';
        }
    }
     touche.addEventListener('click', voir);