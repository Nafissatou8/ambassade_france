/* 
  Marquage JS principal pour l'ensemble des pages (exceptions : erreur, plan, recherche)
*/


	//== Envoi données de base -> AT
  ATTag.page.set(conf_page);
  
  // custom var
  ATTag.customVars.set(conf_rang);
  ATTag.dispatch();
  // debug :   console.table(conf_rang);  


//== Click
  //= Social _#LANG
  if($(".menu_social_" + lang).length > 0){
    $(".menu_social_"+ lang + " a").on("click", function(e){
      //dbg: 	e.preventDefault();
      var o_click = {
        elem: this,
        name: $(this).attr("class").replace("fa fa-", "") + "_menu_social",
        level2: conf_page.level2,
        chapter1: 'reseaux_sociaux',
        chapter2: conf_rang.site[3],
        type: 'exit',
        event: e
      };
      //
      ATTag.click.send(o_click);
      //console.log(o_click)
    });//
  }//



  //= Partage réseaux sociaux (version 2014 uniquement)
  if($(".actions").length > 0){
    
    $(".actions li").on("click", function(e){

      var data = $(this).attr('class');
      if ((data == 'twitter') || (data == 'facebook') || (data == 'google') || (data == 'vkontakte') || (data == 'linkedin')) {

        var o_click = {
          elem: this,
          name: data + "_partage",
          level2: conf_page.level2,
          chapter1: 'reseaux_sociaux',
          chapter2: conf_rang.site[3],
          type: 'exit',
          event: e,
        };
        ATTag.click.send(o_click);
      }
      
    });//
  }//

  //= Contact - formulaire, étape de prévisu. (étape 2 de l'envoi) 
  $(document).on("click", ".previsu input[type=submit]", function(e){

    var o_click = {
      elem: this,
      name: "formulaire_envoye",
      level2: conf_page.level2,
      chapter1: 'pages_transverses',
      chapter2: 'formulaire_de_contact',
      type: 'navigation',
      event: e,
    };
    // debug : console.log(o_click)
    ATTag.click.send(o_click);
    
  });//



  //= Téléchargements
  // via la visionneuse js (pdf seulement)
  if($(".lecteurpdf").length > 0){

    $(".lecteurpdf").on("load", function(e) {
      // objet AT
      var o_click = {
        elem: this,
        level2: conf_page.level2,
        chapter1: conf_rang.site[2],
        type: 'download',
        event: e
      };
      
      // ajout du titre dans l'objet 'o_click' : si aucun titre de doc. stouvé via bdd alors recherche dans les metadatas du pdf
      o_click.name = ($(".lecteurpdf").attr("title")) ? ATU.CleanString_mae($(".lecteurpdf").attr("title")) : 0;


      if(!o_click.name){
        var cw = document.querySelector(".lecteurpdf").contentWindow;

        cw.PDFJS.getDocument(cw.DEFAULT_URL)
          .then(function (pdfDoc_) {
          pdfDoc = pdfDoc_;   
          pdfDoc.getMetadata().then(function(o_pdfjs_metadatas) {	// Metadonnées du pdf (via pdfjs)
            //console.log(o_pdfjs_metadatas);
            o_click.name = ATU.CleanString_mae(o_pdfjs_metadatas.info.Title);// ajout du titre dans l'objet 'o_click'
          })
          .catch(function(err) {
            console.log('Error getting meta data');
            console.log(err);
          });

          })
          .catch(function(err) {
            console.log('Error getting PDF from ' + cw.DEFAULT_URL);
            console.log(err);
          });
        //oe.promise
      }//eo.if

      var iframe_pdf = $(".lecteurpdf").contents();
      iframe_pdf.find("#download, #secondaryDownload").on("click", function(){
        ATTag.click.send(o_click);
        console.log("obj AT sur pdfjs", o_click);

      })//////.eo.click
      
    });// eo.onload

  }

  // via clic sur html::A (*.pdf uniquement)
  if($(".spip_documents").length > 0){
    $(".spip_documents a[href*='.pdf'], .spip_documents a[href*='.doc'] ").on("click", function(e){
      //  e.preventDefault();

      var file_name_dnld = $(this).attr("href").match(/([a-z0-9_-]+\.[pdf|doc|docx]+)/gi),
      o_click = {
        elem: this,
        name: ATU.CleanString_mae(file_name_dnld[0]),
        level2: conf_page.level2,
        chapter1: conf_rang.site[2],
        type: 'download',
        event: e
      };
      ATTag.click.send(o_click);
      //debug :ATU.ObjInspector_mae(o_click) ;       console.log("obj AT sur html:a");

    })
  }


//== Tools (ajouté à l'obj AT pour la portée)
ATU.ObjInspector_mae =  function(obj){
  this.version = "1.0.01";
  for ( var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
    console.log("%c"+prop+": %c"+obj[prop], 'color:#3380d0', 'color:#d517a6')
    }
  }
  return obj.erreur;
}


ATU.CleanString_mae = function(str){
  var accent = [
  /[\300-\306]/g, /[\340-\346]/g, // A, a
  /[\310-\313]/g, /[\350-\353]/g, // E, e
  /[\314-\317]/g, /[\354-\357]/g, // I, i
  /[\322-\330]/g, /[\362-\370]/g, // O, o
  /[\331-\334]/g, /[\371-\374]/g, // U, u
  /[\321]/g, /[\361]/g, // N, n
  /[\307]/g, /[\347]/g, // C, c
  /[\\]\\[\\(\\)/#@&.'’~,+"={:}]/g, /[ ]/g, /\u00a0/   // misc $$ (/\u00a0/ == une espace parfois représentée sous la forme '&nbsp;' dans certains devtools)
  ];

  var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c','', '_', '_'];
  str = (str != undefined) ? str : ATU.ObjInspector_mae(e={'erreur':'chaine inexistante (undefined)'});   
  for(var i = 0; i < accent.length; i++){
    str = str.replace(accent[i], noaccent[i]);
  }    
  
  return str.toLowerCase();
}
// console.log(ATU); //Utils
// console.log(ATTag) //Tag
