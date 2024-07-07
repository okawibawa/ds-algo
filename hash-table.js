class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    const hash = this._hash(key);

    if (this.data[hash] === undefined) {
      this.data[hash] = {};
    }

    this.data[hash][key] = value;
  }

  get(key) {
    const hash = this._hash(key);

    if (this.data[hash] === undefined) {
      return undefined;
    }

    return this.data[hash][key];
  }
}

const newHashTable = new HashTable(50);

newHashTable.set("name", "Oka");
newHashTable.set("age", 25);
newHashTable.set("city", "Lagos");

console.log(newHashTable.get("name"));
console.log(newHashTable.get("age"));
console.log(newHashTable.get("city"));
