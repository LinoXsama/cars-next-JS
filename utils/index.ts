
export async function fetchCars() {

  const headers = {
		'x-rapidapi-key': '9845310cbamsh25af29a9a3842efp1155cejsn827195ecce41',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	};

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();

  return result;
};