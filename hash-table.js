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
    const newHashTable = new Array(this.data.length * 2);

    this.data.forEach((bucket) => {
      if (bucket) {
        for (let i = 0; i < bucket.length; i++) {
          const hash = this._hash(bucket[i][0]);

          if (!newHashTable[hash]) {
            newHashTable[hash] = [];
          }

          newHashTable[hash].push([bucket[i][0], bucket[i][1]]);
        }
      }
    });

    this.data = newHashTable;
  }

  set(key, value) {
    this.numItems++;
    const hash = this._hash(key);

    if (!this.data[hash]) {
      this.data[hash] = [];
    }

    this.data[hash].push([key, value]);

    if (this.numItems > this.data.length * 0.7) {
      this._resize();
    }
  }

  get(key) {
    const bucket = this.data[this._hash(key)];

    if (!bucket) {
      return undefined;
    }

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  }
}

const newHashTable = new HashTable(5);

newHashTable.set("dataStructure", "hashTable");
newHashTable.set("fruits", "grapes");
newHashTable.set("language", "japanese");
newHashTable.set("profession", "programmer");

console.log(newHashTable.getHashTable());
console.log(newHashTable.get("fruits"));
