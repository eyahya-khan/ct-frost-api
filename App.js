import { useEffect,useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoadoing] = useState(true)
  const url = "http://cat-store-api.frostdigital.se/api";
  useEffect(() =>{
    fetch(url)
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoadoing(false))
  },[])
  return (
    <View style={styles.container}>
      {
        loading ? (<Text>loading....</Text>) : (
          data.products.map((data)=>(
            <View>
              <Text style={{fontSize:16}}>Name:{data.name}</Text>
            </View>
          ))
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
