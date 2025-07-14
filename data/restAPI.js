const fetchUserData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    
    const userData = users.map(user => {
      return {
        nama: user.name,
        domisili: user.address.city
      };
    });
    
    console.log('Data User (nama dan domisili):');
    console.log(userData);
    
    const sortedUserData = userData.sort((a, b) => a.domisili.localeCompare(b.domisili));
    
    console.log('\nData User diurutkan berdasarkan domisili (ascending):');
    console.log(sortedUserData);
    
    return sortedUserData;
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


module.exports = { fetchUserData};