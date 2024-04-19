function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5WXC3sqgzxL":
        Script1();
        break;
      case "6iDkupNTPNe":
        Script2();
        break;
      case "6ZUhdIXEN0Q":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="backsound.mp3";
audio.load();
audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.pause();
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.play();
}

