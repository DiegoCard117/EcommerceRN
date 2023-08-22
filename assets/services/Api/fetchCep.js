const fetchCep = (PrimaryCep, SecondCep) => {
  // Importar o módulo 'node-fetch' usando 'import()'
  import('node-fetch').then(fetch => {
    // Agora você pode usar 'fetch' para fazer solicitações HTTP

    // Função para geocodificar um CEP usando o Nominatim
    const geocodeCep = async (cep) => {
      const url = `https://nominatim.openstreetmap.org/search?postalcode=${cep}&country=Brazil&format=json`;

      try {
        const response = await fetch.default(url);
        const data = await response.json();
        
        if (data.length > 0) {
          const location = data[0];
          return {
            lat: parseFloat(location.lat),
            lng: parseFloat(location.lon)
          }; // Retorna as coordenadas (latitude e longitude)
        } else {
          console.log('Erro na geocodificação do CEP:', cep);
          return null;
        }
      } catch (error) {
        console.error('Erro na geocodificação do CEP:', error);
        return null;
      }
    };

    // Geocodificar os CEPs de origem e destino
    Promise.all([geocodeCep(PrimaryCep), geocodeCep(SecondCep)])
      .then(async ([origemCoordenadas, destinoCoordenadas]) => {
        if (origemCoordenadas && destinoCoordenadas) {
          const apiKey = '5b3ce3597851110001cf62485787c5d5305c4593a44a4eec24b9fef7';
          const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${origemCoordenadas.lat},${origemCoordenadas.lng}&end=${destinoCoordenadas.lat},${destinoCoordenadas.lng}`;

          // Fazendo a requisição para a API do OpenRouteService com as coordenadas
          try {
            const response = await fetch.default(url);
            const data = await response.json();

            if (data.features && data.features.length > 0) {
              const distance = data.features[0].properties.segments[0].distance;
              const duration = data.features[0].properties.segments[0].duration;
              console.log(`Distância: ${distance} metros`);
              console.log(`Tempo estimado: ${duration} segundos`);
            } else {
              console.log('Erro ao calcular a distância e o tempo.');
            }
          } catch (error) {
            console.error('Erro na requisição ao OpenRouteService:', error);
          }
        } else {
          console.log('Erro na obtenção das coordenadas.');
        }
      })
      .catch(error => {
        console.error('Erro na geocodificação dos CEPs:', error);
      });
  });
}

fetchCep('01153000', '38740970');

