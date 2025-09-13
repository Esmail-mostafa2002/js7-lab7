
import DataHandler from "./dataHandler.js";

async function main() {
  const handler = new DataHandler();

  // استخدام fetchData
  const fetched = await handler.fetchData();
  console.log("Fetched Data:", fetched);

  // استخدام saveData
  handler.saveData({ id: 2, title: "New Post" });

  // عرض كل الداتا
  console.log("All Data:", handler.allData);
}

main();
