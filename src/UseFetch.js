export const useFetchData = async (url) => {
    const base_URL = 'https://api.themoviedb.org/3/';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZhY2M2YjZhODcxNDIwMDlkMGU0NGQ2ZGExZGI3YyIsInN1YiI6IjY0ZjAyODBmZGJiYjQyMDBhYjVlODkwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zJ0khRVk2ppQ5F9PJHMs7jz4AM9j4OMWD9cDsvAX33s'
        },
    };
    let data = [];

    try{
        const response = await fetch(base_URL + url ,options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } 
        const fetchedData = await response.json();
        data = fetchedData;
    }catch (error) {
        console.error('Error fetching data:', error);
    }

    return data;
}