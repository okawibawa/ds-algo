class HashTable {
  constructor(size) {
    this.data = new Array(size);
    this.numItems = 0;
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  getHashTable() {
    return this.data;
  }

  _resize() {
    console.log("Resizing hash table");

    const newHashTable = this.data.length * 2;

    this.data.forEach((bucket) => {
      if (!bucket) {
        console.log("Empty bucket");
        return;
      }
    });

    console.log(newHashTable);
  }

  set(key, value) {
    this.numItems++;
    const hash = this._hash(key);

    if (this.data[hash] === undefined) {
      this.data[hash] = {};
    }

    this.data[hash][key] = value;

    if (this.numItems > this.data.length * 0.7) {
      this._resize();
    }
  }

  get(key) {
    const hash = this._hash(key);

    if (this.data[hash] === undefined) {
      return undefined;
    }

    return this.data[hash][key];
  }
}

const newHashTable = new HashTable(5);

newHashTable.set("name", "oka");
newHashTable.set("language", "javascript");
newHashTable.set("sex", "male");
newHashTable.set("age", 26);

console.log(newHashTable.getHashTable());
