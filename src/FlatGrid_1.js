import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default class Example extends Component {
  render() {
    const items = [
      { name: 'Project', code: '#1abc9c' }, { name: 'Work Request', code: '#2ecc71' },
      { name: 'Inventory', code: '#3498db' }, { name: 'MTN Request', code: '#9b59b6' },
      { name: 'Equipment', code: '#3498db' }, { name: 'Sample', code: '#9b59b6' },
    ];

    return (
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: '#3498db' }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            {
              /*<Text style={styles.itemCode}>{item.code}</Text>*/
            }
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
