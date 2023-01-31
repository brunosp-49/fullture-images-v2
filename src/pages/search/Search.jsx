import { useEffect, useState } from "react";
import { Alert, FlatList, Image, SafeAreaView, TextInput } from "react-native";
import { api } from "../api/api";
import { style } from "./SearchStyle";

export default function Search({ route }) {
  const [value, setValue] = useState(route.params.text);
  const [images, setImages] = useState([]);

  const start = async () => {
    const result = await api.get(
      `${value}&per_page=35&format=json&nojsoncallback=1`
    );
    setImages(result.data.photos.photo);
  };

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    start();
  }, [value]);

  return (
    <SafeAreaView style={style.container}>
      <TextInput
        style={style.input}
        value={value}
        onChangeText={(e) => setValue(e)}
        placeholder="Procurar imagens"
      />
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item, index }) => (
          <Image
            style={style.image}
            source={{
              uri: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`,
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}
