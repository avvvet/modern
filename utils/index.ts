
export async function fetchCars() {
  
  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '46b5d3255cmsh76ab153b7f735d0p1bbd6ejsnd8d71d0c1239',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options);

  const result = await response.json()

  return result
}