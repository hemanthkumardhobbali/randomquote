let quoteTelugu = document.querySelector(".quote")

let dataquote = [
    " జీవితం అందరికీ ఒకటే, కానీ దాన్ని ఎలా జీవిస్తామన్నది మనిషిపై ఆధారపడి ఉంటుంది",
    "విజయానికి నిద్ర లేదు, సాధనానికి అలసట లేదు.",
    "ప్రేమ అనేది మనసుకి తెలిసిన ఒక మధురమైన సంగీతం.",
    "ఆశ పడడం సహజం, కానీ ప్రయత్నించడం మన కర్తవ్యం.",
    "జీవితంలో ప్రతి అంగుళం ఓ పాఠం.",
    "ఏమీ సులువుగా రాదు, కానీ సాధనతో అంతా సాధ్యం.",
    "నమ్మకానికి విలువ ఉంటే, అబద్ధానికి శిక్ష ఉంటుంది.",
    "కష్టం అనేది ఒక పట్టుదల కోసం దారితీసే పద్ధతి.",
    "ప్రతి రోజూ కొత్త ప్రారంభం, కొత్త అవకాశంగా ఉంచుకో.",
    "నిజాయతీ మనిషి గుణాన్ని చెప్పే అద్దం.",
    "విజయానికి దారి చూపేది మన ఆత్మవిశ్వాసం.",
    "మనం చేసే చిన్న చిన్న తప్పులు మన జీవితంలో పెద్ద మార్పులు తెస్తాయి.",
    "మనోధైర్యం ఉన్నవాడికి విజయానికి అడ్డుకట్ట ఉండదు.",
    "స్వప్నాలు చూశాక, వాటిని సాధించటమే సార్థకత.",
    "కాలం విలువ తెలుసుకున్నవారే విజయానికి దగ్గరగా ఉంటారుకాలం విలువ తెలుసుకున్నవారే విజయానికి దగ్గరగా ఉంటారు.",
    "సంతోషం మనలోనే ఉంది, దాన్ని బయట వెతకడం అవసరం లేదు.",
    "బాధనుంచి బయట పడాలని చెబుతుందే జీవితం.",
    "కష్టపడి పంచుకునే సంతోషం, ఏ ఆస్తికన్నా విలువైనది.",
    "నమ్మకమైన వ్యక్తులు మీ జీవితంలో ధనికుల్లా.",
    "ప్రతిదీ ఓ సమయం, అదనైన సమయం కోసం వేచివుండాలి."
];

function genQuote(){
    const a = Math.floor(Math.random() * dataquote.length)
    console.log(a);
    quoteTelugu.textContent = dataquote[a]

}