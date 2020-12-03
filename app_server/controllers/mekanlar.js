var express=  require('express');
var router = express.Router();
const anaSayfa=function(req,res,next){
  res.render('mekanlar-liste',
    { 'baslik':'Anasayfa',
      'sayfaBaslik':{
         'siteAd':'Mekan32',
         'aciklama':'Isparta civarındaki mekanları keşfedin!'
     },
     'mekanlar':[
          {
              'ad':'Starbucks',
              'adres':'Centrum Garden',
              'puan':'3',
              'imkanlar':['kahve','çay','pasta'],
              'mesafe':'10km'
          },
          {
            'ad':'Gloria Jeans',
            'adres':'Iyas Avm',
            'puan':'2',
            'imkanlar':['kahve','kek','çay'],
            'mesafe':'5km'
          },
          {
            'ad':'Antre Kitchen',
            'adres':'Iyas Avm',
            'puan':'4',
            'imkanlar':['kahvaltı','tatlı','kahve'],
            'mesafe':'5km'
          },
          {
            'ad':'Burç Fırın',
            'adres':'Modern Evler, Şht. Astsubay Yaşar Topçu Cd. No:127, 32200 Isparta Merkez/Isparta',
            'puan':'5',
            'imkanlar':['kahve','çay','tatlı'],
            'mesafe':'15km'
          },
          {
            'ad':'Gramafon Kafe',
            'adres':'Kepeci, Ülkü Sk. No:1 D:No:2, 32100 Isparta Merkez/Isparta',
            'puan':'5',
            'imkanlar':['kahve','çay','kahvaltı'],
            'mesafe':'20km'
          }
      ]
     }
    );
}  

const mekanBilgisi=function(req,res){
    res.render('mekan-detay',{
      'baslik':'Mekan Bilgisi',
      'sayfaBaslik':'Starbucks',
      'mekanBilgisi':{
          'ad':'Starbucks',
          'adres':'Centrum Garden',
          'puan':3,
          'imkanlar':['Kahve','Pasta','Kek'],
          'koordinatlar':{
              'enlem':37.781885,
              'boylam':30.566034
          },
      
          'saatler':[
              {
                'gunler':'Pazartesi-Cuma',
                'acilis':'7:00',
                'kapanis':'23:00',
                'kapali':false
     
              },
              {
                'gunler':'Cumartesi',
                'acilis':'9:00',
                'kapanis':'22:30',
                'kapali':false
   
              },
              {
                'gunler':'Pazar',
                'kapali':true
   
              }
      ],
      'yorumlar':[
          {
                'yorumYapan':'Asım Sinan Yüksel',
                'puan':3,
                'tarih':'18 Ekim 2017',
                'yorumMetni':'Kahveleri çok güzel'
          }
      ]
     }
    });
}

module.exports.yorumEkle=function(req,res){
  res.render('yorum-ekle',{title:'Yorum Ekle'});
};  
module.exports = {
    anaSayfa,
    mekanBilgisi,
  
 
};