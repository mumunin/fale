
        var id = J_get('file');
    var dp=new DPlayer({container: document.getElementById('sokutv'),theme:"#ff0000",loop:false,autoplay:false,hotkey:true, preload:"metadata", mutex:true, video: { quality: [{ url: ""+id+"","name":"RAKET TV", type: 'auto', }, ], defaultQuality: 0, pic: 'https://cdn.jsdelivr.net/gh/habotv/cdn@master/rktplays.jpg', referrerPolicy:"no-referrer"},}); 
   document.getElementById('sokutv').oncontextmenu = function () {
            document.querySelector('.dplayer-menu').style.display = "none";
            document.querySelector('.dplayer-mask').style.display = "none";
    return false;
    };
    setTimeout(function(){dp.play();},1000);