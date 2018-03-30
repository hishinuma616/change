result = document.getElementById("result");
macArea = document.getElementById("macArea");
winArea = document.getElementById("winArea");

function changeMac(){
  var win = document.form.win.value.normalize('NFC');;
  var mac = "smb:" +   win.replace( /\\/g, "\/" );
  macArea.value = mac;
}

function changeWin(){
  var mac = document.form.mac.value.normalize('NFC');
  var win = mac.replace( /smb:/, "" ).replace( /\//g, "\\" );
  // win += mac.replace( /\//g, "\\" );
  winArea.value = win;
  win .normalize('NFC');
  console.log(win);
}
