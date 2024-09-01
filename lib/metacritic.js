/* eslint-disable prettier/prettier */
export async function getLatestGames() {
    const LATEST_GAMES =
        "https://internal-prod.apigee.fandom.net/v1/xapi/finder/metacritic/web?sortBy=-metaScore&productType=games&page=1&releaseYearMin=1958&releaseYearMax=2024&offset=0&limit=24&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u";

    const rawData = await fetch(LATEST_GAMES);
    const json = await rawData.json();

    const {
        data: { items },
    } = json;

    return items.map((item) => {
        const {
            description,
            slug,
            releaseDate,
            image,
            criticScoreSummary,
            title,
        } = item;
        const { score } = criticScoreSummary;

        // crea la imagen
        const { bucketType, bucketPath } = image;
        const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

        return {
            description,
            releaseDate,
            score,
            slug,
            title,
            image: img,
        };
    });
}
// Obtener los datos de la Api de la sección de Categorías
export async function getCategorias(){
    const API_URL = "http://192.168.18.21:1337/api/categorias?populate=*"
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.data.map((item)=>{
        const{
            attributes:{
                titulo,
                descripcion,  
                imagen
            } 
        }= item;
        const imageUrl = imagen?.data?.attributes?.url;
        const fullImageUrl = imageUrl
            ? `http://192.168.18.21:1337${imageUrl}`
            : null;
            return {
                id: item.id,
                titulo,
                descripcion,
                imagen: fullImageUrl,
            };
    })
}

// Otener los datos de la API de la sección donde recuperaremos las prendas deportivas
export async function getFeaturedPrendas() {
    const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/prendas/?filters[esDestacado][$eq]=true&populate[imagen]=*&populate[categoria]=*&populate[tallas][populate]=*&populate[marca]=*`;

    const response = await fetch(API_URL);
    const data = await response.json();

    return data.data.map((item) => {
        const {
            attributes: {
                titulo,
                descripcion,
                precio,
                precioAntes,
                imagen,
                slug,
            },
        } = item;

        // Asegúrate de que hay datos en la imagen
        const imageUrl = imagen?.data?.[0]?.attributes?.url;
        const fullImageUrl = imageUrl
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`
            : null;

        return {
            id: item.id,
            titulo,
            descripcion,
            precio,
            precioAntes,
            slug,
            imagen: fullImageUrl,
        };
    });
}

export async function getGameDetails(slug) {
    const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

    const rawData = await fetch(GAME_DETAILS);
    const json = await rawData.json();

    const { components } = json;
    const { title, description, criticScoreSummary, images } = components[0];
    const { score } = criticScoreSummary;

    // get the card image
    const cardImage = images.find((image) => image.typeName === "cardImage");
    const { bucketType, bucketPath } = cardImage;
    const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

    const rawReviews = components[3].data.items;

    // get the reviews
    const reviews = rawReviews.map((review) => {
        const { quote, score, date, publicationName, author } = review;
        return { quote, score, date, publicationName, author };
    });

    return {
        img,
        title,
        slug,
        description,
        score,
        reviews,
    };
}
