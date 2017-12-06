// > pogolemo
// < pomalo
// >= pogolemo ili ednakvo
// <= pomalo ili ednakvo
// == ednakvo
// === apsolutno ednakvo (identicno)
// != neednakvo
// !== apsolutno neednakvo

var kolichinaBrashno = 0.8;
var beloBrashno = true;
var crnoBrashno = true;
var jajca =2;

if(kolichinaBrashno > 1){
	console.log('Kje pravime torta! :D'); //code block for if
} else {
	console.log('Prvo kupi brashno, pa posle ke pravime'); // code block for else
}


if (beloBrashno==true){
	console.log('Kje pravime so belo brashno!');
}
 
 else if(crnoBrashno==true){
	console.log('Kje pravime so crno brashno!');
}
 
 else{
	console.log('Nema da pravime... :(');
}

if (jajca >=3){
	console.log('Pravime torta');
}else {
	console.log('Kupi jajca')
}



// + - / * %  osnovni operacii

console.log(2+2);
console.log(2/135);
console.log(4-12);
console.log(3*10);
console.log(26%13);


var broj=4;

if (broj%2==0)
{
	console.log('Paren broj');
}
 else{
	console.log('Neparen broj');
}

var ime="Vesna";
console.log(ime.length);

var mesec= 'Fevruari';

if (mesec.length%2==0){
	console.log('Mesecot e ubav');
}
else{
	console.log('Mesecot ne e ubav');
}

//&& i
// || ili

kolichinaBrashno=0.7;
var brashno=true;

if (brashno==true && kolichinaBrashno>=1){
	console.log('Ima brashno i e vo dovolna kolichina');
}
else{
	console.log('Nema brashno, ili ne e vo dovolna kolichina');
}

broj=11;

if (broj < 5 || broj >10){
	console.log('brojot  pomal od 5 ili pogolem od 10');
}
else{
	console.log('brojot e vo opsegot od 5 do 10 vklucuvajki gi i 5 i 10')
}

//true && true = true
//true && false = false
//false && true = false
//false $$ false = false

//true || true = true
//true || false = true
//false || true = true
//false || false = false

mesec='Maj';

switch(mesec){
	case 'Januari':
	console.log('Go odbravte mesec Januari');
	break;
	case 'Fevruari':
	console.log('Go odbravte mesec Fevruari');
	break;
	case 'Mart':
	console.log('Go odbravte mesec Mart');
	break;
	case 'April':
	console.log('Go odbravte mesec April');
	break;
	case 'Maj':
	console.log('Go odbravte mesec Maj');
	break;
	case 'Juni':
	console.log('Go odbravte mesec Juni');
	break;
	case 'Juli':
	console.log('Go odbravte mesec Juli');
	break;
	case 'Avgust':
	console.log('Go odbravte mesec Avgust');
	break;
	case 'Septemvri':
	console.log('Go odbravte mesec Septemvri');
	break;
	case 'Oktomvri':
	console.log('Go odbravte mesec Oktomvri');
	break;
	case 'Noemvri':
	console.log('Go odbravte mesec Noemvri');
	break;
	case 'Dekemvri':
	console.log('Go odbravte mesec Dekemvri');
	break;
	default:
	console.log('Ne postoi vakov mesec');
	break;

}

switch(mesec){
	case 'Januari':
	case 'Fevruari':
	case 'Mart':
	case 'Oktomvri':
	case 'Noemvri':
	case 'Dekemvri':
		console.log('Odbravte laden mesec');
	break;
	case 'April':
	case 'Maj':
	case 'Juni':
	case 'Juli':
		console.log('Odbravte topol mesec');
	break;
	
	default:
	console.log('Ne postoi vakov mesec');
}
ime= 'Eva';

function zdravo(prezime){
	console.log('Zdravo ' + ime + ' ' + prezime);
}
zdravo('Vesnovska');
zdravo('Ivana', 'Ivanovska');
// zdravo();
// zdravo();
// zdravo();
// zdravo();
// zdravo();
// zdravo();
// zdravo();

c2f(18); //x celziusovi stepeni vo farenhajtovi
f2c(120);

temp(12,'c2f'); // 
temp(107, 'f2c')