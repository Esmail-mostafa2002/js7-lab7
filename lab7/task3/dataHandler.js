

class DataHandler {
  constructor() {
    this.data = [];
  }

  async fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const result = await response.json();
    this.data.push(result);
    return result;
  }

  saveData(newItem) {
    this.data.push(newItem);
    console.log("Data saved:", newItem);
  }

  get allData() {
    return this.data;
  }
}

export default DataHandler;
