import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Fila() {

  const router = useRouter();
  const [meuPedido, setMeuPedido] = useState(null);
  const [fila, setFila] = useState(['#102', '#103', '#104']); 

  
  const gerarPedido = () => {
    const novoCodigo = Math.floor(Math.random() * 900) + 100; 
    const codigoFormatado = `#${novoCodigo}`;
    setMeuPedido(codigoFormatado);
    
    
    setFila([...fila, codigoFormatado]);
  };

  return (
    <View style={styles.container}>
  
      <Text style={styles.title}>Fila Virtual</Text>

      <View style={styles.cardDestaque}>
        <Text style={styles.label}>Seu Pedido:</Text>
        <Text style={styles.codigoText}>
          {meuPedido ? meuPedido : '---'}
        </Text>
        <Text style={styles.status}>
          {meuPedido ? 'Aguardando na fila...' : 'Gere um pedido abaixo'}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonPrimary} onPress={gerarPedido}>
          <Text style={styles.buttonText}>Gerar Novo Pedido</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push('/Cardapio')}>
          <Text style={styles.buttonTextSecondary}>Ver Cardápio</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filaContainer}>
        <Text style={styles.filaTitle}>Fila de Preparo</Text>
        <FlatList
          data={fila}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemFila}>
              <Text style={item === meuPedido ? styles.itemDestaque : styles.itemText}>
                Pedido {item} {item === meuPedido && "(Você)"}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#000', 
  },
  cardDestaque: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#6c757d',
  },
  codigoText: {
    fontSize: 48,
    fontWeight: '900',
    color: '#212529',
    marginVertical: 10,
  },
  status: {
    fontSize: 14,
    color: '#28a745',
    fontWeight: '600',
  },
  buttonContainer: {
    gap: 10,
    marginBottom: 30,
  },
  buttonPrimary: {
    backgroundColor: '#d9534f',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d9534f',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextSecondary: {
    color: '#d9534f',
    fontWeight: 'bold',
    fontSize: 16,
  },
  filaContainer: {
    flex: 1,
  },
  filaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#495057',
  },
  itemFila: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#495057',
  },
  itemDestaque: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d9534f',
  }
});
