import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Daftar nama + NIM dari gambar
const data = [
  ["105841106019", "ARHAM MAULANA"],
  ["105841109021", "ARIF RAHMAN"],
  ["105841100122", "Siti Marwa"],
  ["105841103222", "Fajar Eka Alamsyah"],
  ["10584110422", "FERDIANSYAH"],
  ["105841100622", "PARWATI"],
  ["105841100722", "NABILA ISMAIL MATTA"],
  ["105841100822", "NUR MILANI HIDAYAH"],
  ["105841101122", "A. FAJAR APRILIAWAN"],
  ["105841101322", "MUHAMMAD ADIANTO"],
  ["105841106122", "ABSARARSAL RIZWAL MAHUA"],
  ["105841106122", "SYAWALUDDIN"],
  ["105841101322", "Andi citra ayu lestari"],
  ["105841101822", "FARISAN"],
  ["105841101922", "ERICK YUSUF KOTTE"],
  ["105841102022", "Fajar Rahma"],
  ["105841102022", "Muh. Aswan"],
  ["105841102222", "ALI SUTTON S PAILLATI"],
  ["105841102222", "MUHAMMAD FAHMI SANUSI"],
  ["105841102622", "A. IKRAM MUKARRAM"],
  ["105841103222", "AHMAD FATHIR"],
  ["105841103222", "NUR MUHAMMAD ASHMAN"],
  ["105841103222", "A. MUH. FARDHAN SAPUTRA"],
  ["105841103222", "MUHAMMAD FATURRAHMAN ISWAN"],
  ["105841103222", "NURMISBA"],
  ["105841103622", "ALVIAN SYAH BURHANI"],
  ["105841103622", "MAJERI"],
  ["105841103822", "Hamdani"],
  ["105841117222", "YUSRI ALI"],
];

// Urutan stambuk "ERICK YUSUF KOTTE" = index ke-14
const currentIndex = 14;

// Ambil 5 sebelum dan 5 sesudah, dengan looping jika di awal/akhir
const getIndices = (start: number, count: number, dir: 'prev' | 'next', length: number) => {
  const indices = [];
  for (let i = 1; i <= count; i++) {
    const index = dir === 'prev'
      ? (start - i + length) % length
      : (start + i) % length;
    indices.push(index);
  }
  return dir === 'prev' ? indices.reverse() : indices;
};

const fontFamilies = [
  'Merriweather',  // 1
  'Bitter',        // 2
  'Cabin',         // 3
  'FiraSans',      // 4
  'WinkyRough',    // 5
  'PlusJakartaSans', // 6
  'SplineSans',      // 7
  'IBMPlexSans',     // 8
  'Manrope',         // 9
  'RedHatDisplay'    // 10
];

const colors = [
  '#E57373', '#F06292', '#BA68C8', '#64B5F6', '#4DB6AC',
  '#81C784', '#FFD54F', '#FFB74D', '#A1887F', '#90A4AE'
];

export default function Tugas4() {
  const prev = getIndices(currentIndex, 5, 'prev', data.length).map(i => data[i]);
  const next = getIndices(currentIndex, 5, 'next', data.length).map(i => data[i]);
  const combined = [...prev, ...next];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {combined.map(([nim, name], index) => (
        <View key={index} style={styles.card}>
          <Text style={[styles.name, { fontFamily: fontFamilies[index], color: colors[index] }]}>
            {name}
          </Text>
          <Text style={[styles.nim, { color: colors[index] }]}>{nim}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 25,
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#aaa',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  nim: {
    fontSize: 16,
    marginTop: 4,
    fontStyle: 'italic',
  },
});
