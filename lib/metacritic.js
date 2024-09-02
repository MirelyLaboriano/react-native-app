/* eslint-disable prettier/prettier */
// Obtener los datos de la Api de la sección de Categorías
export async function getCategorias(){
    const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categorias?populate=*`
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
            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`
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
