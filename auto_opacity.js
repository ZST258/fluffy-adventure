    var url = window.location.pathname;
    let filename = url.substring(url.lastIndexOf('/') + 1);
    var video=["mp4","mkv","avi","mov","rmvb","webm","flv","wmv","ts"];
    var root = document.querySelector(':root');
    for (var i=0;i<video.length;i++)
    { 
   	if(filename.substring(filename.lastIndexOf(".") + 1) == video[i])
    	{
          		root.setAttribute('style', '--suit-opacity: 1.0;');
          		break;
    	}
    	else{root.setAttribute('style', '--suit-opacity: 0.85;')};
      }
