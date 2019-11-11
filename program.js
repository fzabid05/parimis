/*$(".togglemenu").on("click",function(event){
    //afficher ou cacher la div#overlay
    $("#overlay").toggleClass("active");
    
  });*/

  (function(){
    const burger = document.querySelector(".burger");
    burger.onclick = function()
    {
      const menu = document.querySelector(".menu");

      if(menu.dataset.etat == "open") // si le menu est ouvert => fermer
      {
        menu.classList.add("open");
        menu.dataset.etat = "close";
      }
      else
      {
        menu.classList.remove("open") ;
        menu.dataset.etat = "open";
      }

    }
  })();

  /********************************************    Heur ************************************************ */

 function bip (){
    var date = new Date();
   var heures = date.getHours();
   var minutes = date.getMinutes();
   var secondes = date.getSeconds();
   
   $("#horloge").html(heures +": "+minutes+": "+ secondes +"</p>" ) 
   }
   setInterval(bip,1000);
   




  /* ****************************
                                      carrousslle
                                                              ************************/

  $(function() {
    // Calcul du ratio de taille de la première image
    var largeurImages = $('#diaporama img').width();
    var hauteurImages = $('#diaporama img').height();
    var ratio = largeurImages / hauteurImages;
    // Application du ratio à la hauteur de #diaporama
    var hauteurDiaporama = function() {
      $('#diaporama').height($('#diaporama').width() / ratio);
    };
    // Calcul de la hauteur de #diaporama au chargement
    hauteurDiaporama();
    // Calcul de la hauteur de #diaporama à chaque modification de la taille de la fenêtre;
    $(window).resize(hauteurDiaporama);
    $('#diaporama img').first().addClass('active');
    var duree = 4000;
    var changementDiapo = function() {
      // 1 ciblage de .active
      // 2 masquage de .active et suppression de la class
      // 3 recherche de l'image suivante et ajout de la class active
      // 4 affichage de l'image suivante
      var element = $('.active').fadeOut(duree / 3.5).removeClass('active');
      if (element.next().length) {
        element.next().addClass('active').fadeIn(duree / 3.5);
      } else {
        element.parent().children().first().addClass('active').fadeIn(duree / 3.5);
      }
    };
    setInterval(changementDiapo,duree);
  });
/****************************
                                       
******************************/


  /**************************  
                                      RESERVATION 
                                                               ********************************/
  $('#reservation #disponibilite').on('click',function(event){
    alert('Votre demande a été prise en compte et sera traitée dans les plus brefs délais');
  });


  /*  *********  CONTACT  ********* */
  $('#contact .container #boite').on('click',function(event){
    alert('Votre demande sera traitée dans les 24h. Merci de patienter');
  });


  
  /*  *********  NEWSLETTER  ********* */
  $('footer .newsletter').on('click',function(event){
    alert('Merci, vous êtes désormais inscrit(e) à notre newsletter.');
  });


