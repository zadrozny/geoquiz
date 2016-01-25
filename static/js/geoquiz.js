var places = ['Afghanistan', 'Kabul', 'Albania', 'Tirana', 'Algeria', 'Algiers', 'Andorra', 'Andorra la Vella', 'Angola', 'Luanda', 'Antigua and Barbuda', "Saint John's", 'Argentina', 'Buenos Aires', 'Armenia', 'Yerevan', 'Australia', 'Canberra', 'Austria', 'Vienna', 'Azerbaijan', 'Baku', 'The Bahamas', 'Nassau', 'Bahrain', 'Manama', 'Bangladesh', 'Dhaka', 'Barbados', 'Bridgetown', 'Belarus', 'Minsk', 'Belgium', 'Brussels', 'Belize', 'Belmopan', 'Benin', 'Porto', 'Bhutan', 'Thimphu', 'Bolivia', 'La Paz (administrative); Sucre (judicial)', 'Bosnia and Herzegovina', 'Sarajevo', 'Botswana', 'Gaborone', 'Brazil', 'Brasilia', 'Brunei', 'Bandar Seri Begawan', 'Bulgaria', 'Sofia', 'Burkina Faso', 'Ouagadougou', 'Burundi', 'Bujumbura', 'Cambodia', 'Phnom Penh', 'Cameroon', 'Yaounde', 'Canada', 'Ottawa', 'Cape Verde', 'Praia', 'Central African Republic', 'Bangui', 'Chad', "N'Djamena", 'Chile', 'Santiago', 'China', 'Beijing', 'Colombia', 'Bogota', 'Comoros', 'Moroni', 'Congo, Republic of the', 'Brazzaville', 'Congo, Democratic Republic of the', 'Kinshasa', 'Costa Rica', 'San Jose', "Cote d'Ivoire", 'Yamoussoukro (official); Abidjan (de facto)', 'Croatia', 'Zagreb', 'Cuba', 'Havana', 'Cyprus', 'Nicosia', 'Czech Republic', 'Prague', 'Denmark', 'Copenhagen', 'Djibouti', 'Djibouti', 'Dominica', 'Roseau', 'Dominican Republic', 'Santo Domingo', 'East Timor (Timor', 'Leste)', 'Ecuador', 'Quito', 'Egypt', 'Cairo', 'El Salvador', 'San Salvador', 'Equatorial Guinea', 'Malabo', 'Eritrea', 'Asmara', 'Estonia', 'Tallinn', 'Ethiopia', 'Addis Ababa', 'Fiji', 'Suva', 'Finland', 'Helsinki', 'France', 'Paris', 'Gabon', 'Libreville', 'The Gambia', 'Banjul', 'Georgia', 'Tbilisi', 'Germany', 'Berlin', 'Ghana', 'Accra', 'Greece', 'Athens', 'Grenada', "Saint George's", 'Guatemala', 'Guatemala City', 'Guinea', 'Conakry', 'Guinea', 'Bissau', 'Guyana', 'Georgetown', 'Haiti', 'Port', 'Honduras', 'Tegucigalpa', 'Hungary', 'Budapest', 'Iceland', 'Reykjavik', 'India', 'New Delhi', 'Indonesia', 'Jakarta', 'Iran', 'Tehran', 'Iraq', 'Baghdad', 'Ireland', 'Dublin', 'Israel', 'Jerusalem*', 'Italy', 'Rome', 'Jamaica', 'Kingston', 'Japan', 'Tokyo', 'Jordan', 'Amman', 'Kazakhstan', 'Astana', 'Kenya', 'Nairobi', 'Kiribati', 'Tarawa Atoll', 'Korea, North', 'Pyongyang', 'Korea, South', 'Seoul', 'Kosovo', 'Pristina', 'Kuwait', 'Kuwait City', 'Kyrgyzstan', 'Bishkek', 'Laos', 'Vientiane', 'Latvia', 'Riga', 'Lebanon', 'Beirut', 'Lesotho', 'Maseru', 'Liberia', 'Monrovia', 'Libya', 'Tripoli', 'Liechtenstein', 'Vaduz', 'Lithuania', 'Vilnius', 'Luxembourg', 'Luxembourg', 'Macedonia', 'Skopje', 'Madagascar', 'Antananarivo', 'Malawi', 'Lilongwe', 'Malaysia', 'Kuala Lumpur', 'Maldives', 'Male', 'Mali', 'Bamako', 'Malta', 'Valletta', 'Marshall Islands', 'Majuro', 'Mauritania', 'Nouakchott', 'Mauritius', 'Port Louis', 'Mexico', 'Mexico City', 'Micronesia, Federated States of', 'Palikir', 'Moldova', 'Chisinau', 'Monaco', 'Monaco', 'Mongolia', 'Ulaanbaatar', 'Montenegro', 'Podgorica', 'Morocco', 'Rabat', 'Mozambique', 'Maputo', 'Myanmar (Burma)', 'Rangoon (Yangon); Naypyidaw or Nay Pyi Taw (administrative)', 'Namibia', 'Windhoek', 'Nauru', 'no official capital; government offices in Yaren District', 'Nepal', 'Kathmandu', 'Netherlands', 'Amsterdam; The Hague (seat of government)', 'New Zealand', 'Wellington', 'Nicaragua', 'Managua', 'Niger', 'Niamey', 'Nigeria', 'Abuja', 'Norway', 'Oslo', 'Oman', 'Muscat', 'Pakistan', 'Islamabad', 'Palau', 'Melekeok', 'Panama', 'Panama City', 'Papua New Guinea', 'Port Moresby', 'Paraguay', 'Asuncion', 'Peru', 'Lima', 'Philippines', 'Manila', 'Poland', 'Warsaw', 'Portugal', 'Lisbon', 'Qatar', 'Doha', 'Romania', 'Bucharest', 'Russia', 'Moscow', 'Rwanda', 'Kigali', 'Saint Kitts and Nevis', 'Basseterre', 'Saint Lucia', 'Castries', 'Saint Vincent and the Grenadines', 'Kingstown', 'Samoa', 'Apia', 'San Marino', 'San Marino', 'Sao Tome and Principe', 'Sao Tome', 'Saudi Arabia', 'Riyadh', 'Senegal', 'Dakar', 'Serbia', 'Belgrade', 'Seychelles', 'Victoria', 'Sierra Leone', 'Freetown', 'Singapore', 'Singapore', 'Slovakia', 'Bratislava', 'Slovenia', 'Ljubljana', 'Solomon Islands', 'Honiara', 'Somalia', 'Mogadishu', 'South Africa', 'Pretoria (administrative); Cape Town (legislative); Bloemfontein (judiciary)', 'South Sudan', 'Juba (Relocating to Ramciel)', 'Spain', 'Madrid', 'Sri Lanka', 'Colombo; Sri Jayewardenepura Kotte (legislative)', 'Sudan', 'Khartoum', 'Suriname', 'Paramaribo', 'Swaziland', 'Mbabane', 'Sweden', 'Stockholm', 'Switzerland', 'Bern', 'Syria', 'Damascus', 'Taiwan', 'Taipei', 'Tajikistan', 'Dushanbe', 'Tanzania', 'Dar es Salaam; Dodoma (legislative)', 'Thailand', 'Bangkok', 'Togo', 'Lome', 'Tonga', "Nuku'alofa", 'Trinidad and Tobago', 'Port', 'Tunisia', 'Tunis', 'Turkey', 'Ankara', 'Turkmenistan', 'Ashgabat', 'Tuvalu', 'Vaiaku village, Funafuti province', 'Uganda', 'Kampala', 'Ukraine', 'Kyiv', 'United Arab Emirates', 'Abu Dhabi', 'United Kingdom', 'London', 'United States of America', 'Washington D.C.', 'Uruguay', 'Montevideo', 'Uzbekistan', 'Tashkent', 'Vanuatu', 'Port', 'Vatican City (Holy See)', 'Vatican City', 'Venezuela', 'Caracas', 'Vietnam', 'Hanoi', 'Yemen', 'Sanaa', 'Zambia', 'Lusaka', 'Zimbabwe', 'Harare'];
var usedPlaces = []; 

var $form = $('#my-form'); 
var $input = $('#my-input');

var last = null;
 
$form.bind("submit", function (event) {
// event.preventDefault(); //Not necessary if you have: return false;
 var text = $input.val();
 console.log( text ); //Prints out text to console
 $input.val(""); 
 text = capitaliseFirstLetter(text);
 check(text);
 printUsed(usedPlaces);
 return false; //Prevents submit action from going through
});

function check(foo){
  console.log("foo is", foo);
  console.log("last is", last);
  if ( places.indexOf(foo) > -1 && (foo[0].toLowerCase() === last || last == null))  { //in main list
    last = foo.slice(-1).toLowerCase();
    $('#status').html("That's correct! Enter another one starting with: "+last)
    usedPlaces.push(foo);//add to used list write
    var index = places.indexOf(foo);
    delete places[index];//delete from main list
  } else if (foo[0].toLowerCase() != last){ 
    $('#status').html("You need to enter a country or capital beginning with: "+last)
  } else if ( usedPlaces.indexOf(foo) > -1)  { //in used list
    $('#status').html("Sorry, you've used that one already. Enter another one.")
    
  } else {
    $('#status').html("Sorry, that's neither a country nor capital.")
  }
 }

function printUsed(bar){
  //var textarea = document.getElementById("used");

  var newHTML = [];
  $.each(bar, function(index, value) {
    newHTML.push('<del>'+value+'</del>'+'</br>');
  });
  $("#used").html(newHTML.join(""));
}

function checkLastLetter(foo){
  var last = foo.slice(-1); // returns "d"
}

//Lifted from http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript
function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}