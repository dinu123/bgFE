import React, { useEffect, useState } from 'react';

function FetchedApi() {
  const [apiData, setApiData] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch('https://all.indiasarkarinaukri.com/api/blogs');
        console.log(response)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data)
        setApiData(data); // Set apiData to the fetched data array
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setLoading(false); // Set loading to false on error
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function (optional)
    return () => {
      // Cleanup code (if any)
    };
  }, []); 

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {apiData.data.data.map(item => (
            <div key={item._id}>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchedApi;
