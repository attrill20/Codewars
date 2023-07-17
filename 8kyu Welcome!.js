function greet(language) {
	let greetings=
{english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'}
  
 if (language in greetings) {
    return greetings[language];
  } else {
    return greetings['english']; 
}
  }

  // 17/7/23 as a quick warm-up (this could be useful for accessing team data in my side project)