import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      
  
      <View style={styles.rectangle}>
      <Text style={styles.name}>ERICK JI</Text>
      </View>

   
      <View style={styles.triangle} />

  
      <View style={styles.pill}>
        <Text style={styles.emoji}>*</Text>
        <Text style={styles.stambuk}>105841101922</Text>
      </View>

    
      <Text style={styles.name}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
  marginTop: 7,
  fontSize: 19,
  fontWeight: 'bold',
  color: '#2750d5ff', 
  },

  container: {
    flex: 1,
    backgroundColor: '#3810a7ff',
    justifyContent: "center",
    alignItems: "center",
  },

  rectangle: {
    width: 200,
    height: 145,
    backgroundColor: '#8b8913ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 45,
  },

  image: {
    width: 100,
    height: 105,
    borderRadius: 15,
  },

  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#00ff08ff', 
    marginBottom: 40,
  },

  pill: {
    backgroundColor: '#091720ff', 
    borderRadius: 75,
    paddingVertical: 15,
    paddingHorizontal: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
  },

  emoji: {
    fontSize: 55,
    color: '#E0FFFF',
    marginRight: 10,
  },

  stambuk: {
    color: '#D0F0FD',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 25,
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#664200ff',
  },
});