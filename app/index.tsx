import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang 👋</Text>
      <Button title="Buka Tugas 1" onPress={() => router.push('/tugas 1')} />
      <View style={{ margin: 10 }} />
      <Button title="Buka Tugas 2" onPress={() => router.push('/tugas 2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 30, fontWeight: 'bold' },
});
