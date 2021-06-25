const socket = io.connect("http://localhost:3000/");

function gonder(event){
	if(event){
		if(event.keyCode == 13){
			if(!document.querySelector("#isim").value || !document.querySelector("#mesaj").value) return alert("İsim ve mesaj girin.");
			socket.emit("mesaj_gonder",{gonderen : document.querySelector("#isim").value,mesaj : document.querySelector("#mesaj").value});
			document.querySelector("#mesaj").value = "";
		};
	}else {
		if(!document.querySelector("#isim").value || !document.querySelector("#mesaj").value) return alert("İsim ve mesaj girin.");
		socket.emit("mesaj_gonder",{gonderen : document.querySelector("#isim").value,mesaj : document.querySelector("#mesaj").value});
		document.querySelector("#mesaj").value = "";
	};
};

socket.on("mesaj_al",data => {
	document.querySelector("#chat").innerHTML += `<p><strong>${data.gonderen}</strong> : ${data.mesaj}</p>`;
	document.querySelector("#chat").scrollTo(0,5000000);
});